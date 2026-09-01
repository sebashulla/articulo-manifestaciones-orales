const SOURCE_URL = 'https://s2.elespanol.com/2017/06/27/ciencia/salud/leucemia-hematologia_y_hemoterapia-cancer_226988450_37693065_1706x1280.jpg';

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).setHeader('Allow', 'GET');
    return res.end('Method Not Allowed');
  }

  try {
    const response = await fetch(SOURCE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Vercel Image Proxy/1.0)',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.elespanol.com/'
      },
      redirect: 'follow'
    });

    if (!response.ok) {
      res.status(response.status);
      return res.end('No se pudo obtener la imagen de origen.');
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).send(buffer);
  } catch (error) {
    console.error('Error al obtener la imagen de leucemia:', error);
    res.status(502);
    return res.end('Error al obtener la imagen.');
  }
};
