import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useSpeakLocale, useSpeakConfig, useDisplayName, inlineTranslate, localizePath } from 'qwik-speak';

export const ChangeLocale = component$(() => {
  const t = inlineTranslate();

  const pathname = useLocation().url.pathname;

  const locale = useSpeakLocale();
  const config = useSpeakConfig();
  const dn = useDisplayName();

  const getPath = localizePath();

  return (
    <>
      <h2>{t('app.changeLocale@@Change locale')}</h2>
      {config.supportedLocales.map(value => (
        <a key={value.lang} class={{ active: value.lang == locale.lang }} href={getPath(pathname, value.lang)}>
          {dn(value.lang, { type: 'language' })}
        </a>
      ))}
    </>
  );
});