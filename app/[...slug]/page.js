import React from 'react';
import axios from 'axios';
import Layout from '../hoc/Layout';
import RenderSections from '../../components/renderSections';
import { MetaData } from "../../components/common/Helper";
import CustomPages from '../custom/home';
import ContactUs from '../resources/contact';
import { getStaticData } from './page.server';
import Custom404 from '../../app/404';


export async function generateMetadata({ params }) {
  const data1 = await getStaticData(params);
  const title = data1?.data?.title || 'Default Title';
  const maintitle = `CW Suite | ${title}`;

  return {
    title: maintitle,
    description: MetaData[0].metaDescription,
    keywords: 'cw suite,retail saas platform, POS, inventory management, purchase management, sales management, finance management, HRMS, low-code app builder',
    robots: 'index, follow',
    charset: 'UTF-8',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params?.slug?.join('/')}`,
    },
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${params?.slug?.join('/')}`,
      title: maintitle,
      description: MetaData[0].metaDescription,
      images: [
        {
          url: 'https://example.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Image description',
        },
      ],
      siteName: 'CW Suite',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@CW_Suite',
      title: maintitle,
      description: MetaData[0].metaDescription,
      image: 'https://example.com/twitter-image.jpg',
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CW Suite LLC",
      "url": `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
      "logo": "https://example.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/cwsuite",
        "https://twitter.com/cwsuite",
      ],
    },
  };
}

export default async  function HomePage({params}) {
  const data1 = await getStaticData(params);
  const { type, data , slug, menuData, notFound } = data1;
  return (
    <Layout menuData={menuData} setSidebarOpen={false} isSidebarOpen={false}>
      {notFound ? (
        <Custom404 />
      ) : (
        <>
          {data === null && type === 'page' ? (
            <LoadingAnimation />
          ) : (
            type === 'page' && <RenderSections data={data} />
          )}
          {type === 'post' && <PostComponent />}
          {type === 'form' && <ContactUs />}
          {type === 'custom' && <CustomPages type={type} slug={slug} />}
        </>
      )}
    </Layout>
  );
}


export async function generateStaticParams() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
    const menuData = JSON.parse(response.data.documents[0].content);

    const paths = menuData.flatMap((menuItem) => {
      const paths = [];
      if (menuItem.children) {
        menuItem.children.forEach((childItem) => {
          if (childItem.subchildren) {
            childItem.subchildren.forEach((subChildItem) => {
              if (!subChildItem.slug.startsWith('http')) {
                paths.push({ slug: subChildItem.slug.split("/").filter(Boolean) });
              }
            });
          } else if (!childItem.slug.startsWith('http')) {
            paths.push({ slug: childItem.slug.split("/").filter(Boolean) });
          }
        });
      } else if (!menuItem.slug.startsWith('http')) {
        paths.push({ slug: menuItem.slug.split("/").filter(Boolean) });
      }

      return paths;
    });
    return paths;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}


export const revalidate = 3600;