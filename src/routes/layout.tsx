import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};
export const onRequest: RequestHandler = ({ locale, error,  }) => {
  // E.g. 404 error page
  if (!locale()) throw error(404, 'Page not found for requested locale');

  // E.g. Redirect
  // if (!locale()) {
  //   const getPath = localizePath();
  //   throw redirect(302, getPath('/page', 'en-US')); // Let the server know the language to use
  // }
};

export default component$(() => {
  return <Slot />;
});
