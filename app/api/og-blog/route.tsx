import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
const size = {
  width: 1200,
  height: 630,
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasDescription = searchParams.has('description');
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : 'My default description';
    // Font
    const pacifico = fetch(
      new URL('http://fonts.gstatic.com/s/pacifico/v8/GIrpeRY1r5CzbfL8r182lw.ttf')
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 128,
            background: '#171717',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: "lightblue"
          }}
        >
          <h3 style={{marginLeft: "20px"}}>henri</h3>
          <p style={{marginLeft: "20px"}}>{description}</p>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Pacifico',
            data: await pacifico,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image, the error: ` + e.message, {
      status: 500,
    });
  }
}