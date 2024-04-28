import type { RequestHandler } from '@builder.io/qwik-city';
import { fetchFont, ImageResponse, html } from 'og-img';
 
export const onGet: RequestHandler = async ({ send }) => {
  send(
    new ImageResponse(
      // Use Tailwind CSS or style attribute
      html`
        <div tw="text-4xl text-green-700" style="background-color: tan">
          Hello, world!
        </div>
      `,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Roboto',
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: await fetchFont(
              'https://www.example.com/fonts/roboto-400.ttf'
            ),
            weight: 400,
            style: 'normal',
          },
        ],
      }
    )
  );
};