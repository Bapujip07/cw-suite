import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  const finaldata = {
    database: 'cw_sites',
    collection: 'forms',
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
        'api-key': `${process.env.MONGO_DB_APIKEY}`,
      },
    });

    return NextResponse.json(axiosResponse.data);
  } catch (error) {
    console.log('catch error', error);

    return NextResponse.json({ error: 'Failed to submit data: ' + error.message }, { status: 500 });
  }
}
