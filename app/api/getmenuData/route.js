import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  const finaldata = {
    database: 'cw_sites',
    collection: 'header_menu',
    dataSource: 'Cluster0',
    filter: {
      site_id: process.env.SITE_ID,
    }
  };

  try {
    const axiosResponse = await axios.post(`${process.env.MONGO_DB_URL}/find`, finaldata, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': `${process.env.MONGO_DB_APIKEY}`
      },
    });
    return new Response(JSON.stringify(axiosResponse.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to submit data: ' + error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
