import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";
import { translationFn } from "./speak-function";
import "./global.css";
import { useQwikSpeak } from "qwik-speak";
import { ThemeProvider } from 'qwik-themes'
export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  /**
   * Init Qwik Speak
   */
  useQwikSpeak({ config, translationFn });
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content="https://henri.gg/og" />
        <RouterHead />
      </head>
      <body lang="en">
        <ThemeProvider>
          <RouterOutlet />
        </ThemeProvider>
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
