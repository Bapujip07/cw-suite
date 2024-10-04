import axios from 'axios';

export async function GET(req) {
  // Extract query parameters from the request URL
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  const finaldata = {
    database: 'cw_sites',
    collection: 'pages',
    dataSource: 'Cluster0',
    filter: {
      site_id: process.env.SITE_ID,
      slug1: slug,
    },
  };

  try {
    const axiosResponse = await axios.post(`${process.env.MONGO_DB_URL}/find`, finaldata, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': `${process.env.MONGO_DB_APIKEY}`,
      },
    });

    // Return the response as JSON
    return new Response(JSON.stringify(axiosResponse.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching page data:', error);

    // Return an error response
    return new Response(JSON.stringify({ error: 'Failed to fetch data: ' + error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
