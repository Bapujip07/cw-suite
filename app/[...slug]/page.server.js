
import axios from 'axios';

export async function getStaticData(params) {
  const pathSegments = params.slug || [];
  const path = `/${pathSegments.join("/")}`;
 

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
  const menuData = JSON.parse(response.data.documents[0].content);

  let matchedMenuItem = null;
  for (const menuItem of menuData) {
    if (menuItem.slug === path) {
      matchedMenuItem = menuItem;
      break; 
    }
    if (menuItem.children) {
      for (const childItem of menuItem.children) {
        if (childItem.slug === path) {
          matchedMenuItem = childItem;
          break;
        }
        if (childItem.subchildren) {
          for (const subChildItem of childItem.subchildren) {
            if (subChildItem.slug === path) {
              matchedMenuItem = subChildItem;
              break;
            }
          }
          if (matchedMenuItem) break;
        }
      }
      if (matchedMenuItem) break;
    }
  }

  if (!matchedMenuItem) {
    return {
      notFound: true,
      menuData,
    };
  }

  const { type, slug } = matchedMenuItem;

  if (type === "custom" || type === "form") {
    return {
      type,
      data: null,
      slug,
      menuData,
    };
  }

  try {
    // const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?slug=${path.substring(1)}`;
    // const headers = { "Content-Type": "application/json" };
 const finalUrl=`${process.env.NEXT_STRAPI_BASE_URL}/api/pages?filters[slug]=${path.substring(1)}&pLevel=6`
    const headers= {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${process.env.STRAPI_API_KEY}`,
}

    const dataResponse = await axios.get(finalUrl, headers);
    const result = dataResponse.data;
    const data=result.data
    
    if (!data) {
      return { notFound: true, menuData };
    }

    return {
      type,
      data,
      slug,
      menuData,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true, menuData };
  }
}
