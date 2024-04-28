import type { RequestHandler } from '@builder.io/qwik-city';
import {  ImageResponse, fetchFont, html } from 'og-img';
export const onGet: RequestHandler = async ({ send }) => {
  send(
    new ImageResponse(
      // Use Tailwind CSS or style attribute
      html`
        <div tw="text-9xl bg-[#171717] flex-col text-white h-full flex items-start justify-start " >
          <h1 tw="ml-5 text-[#ffc799]">henri</h1>
        </div>
      `,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Pacificio',
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: await fetchFont("http://fonts.gstatic.com/s/pacifico/v8/GIrpeRY1r5CzbfL8r182lw.ttf"),
            weight: 400,
            style: 'normal',
          },
        ],
      }
    )
  );
};