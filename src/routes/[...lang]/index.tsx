import { component$, useStore } from '@builder.io/qwik';
import { Link, useNavigate, type DocumentHead } from '@builder.io/qwik-city';
import { inlineTranslate } from 'qwik-speak';
export default component$(() => {

  const menu = useStore({
    isOpen: false,
  });
  const nav = useNavigate();

  const t = inlineTranslate();


  return (
    <div class="min-h-screen flex flex-col items-center  ">
      <div class="fixed flex-col items-center w-full h-full top-0 right-0 left-0 bg-[#e1e1e1] dark:bg-[#171717] z-10" style={{ display: menu.isOpen ? 'flex' : 'none' }}>
        <div class="xl:w-[700px] flex flex-col mt-[78px] space-y-16">
          <div class="flex justify-between opacity-100 items-center">
            <p>(hopefully) helping links</p>
            <div onClick$={() => menu.isOpen = !menu.isOpen} class="flex group cursor-pointer flex-col items-center justify-center space-y-0.5 w-5 h-5">
              <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
              <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
              <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
            </div>
          </div>
          <Link class="text-2xl animate-bottom_fade" href='/work'>Work</Link>
          <Link class="text-2xl animate-bottom_fade" href='/contact'>Contact</Link>
        </div>
      </div>
      <div class="xl:w-[700px] flex flex-col space-y-16">
        <div class="flex items-center justify-between mt-16">
          <div class="flex items-center justify-center  space-x-3">
            <img onClick$={() => nav("#contact")} class="w-[40px] h-[40px] relative top-1 hover:ring-[#ffffff] cursor-pointer hover:dark:ring-[#282828] ring-2 ring-[#ffffffc0] dark:ring-[#282828c0]  ring-offset-2 hover:ring-offset-3 transition-all ring-offset-[#e1e1e1]  dark:ring-offset-[#171717] rounded-full" src="https://avatars.githubusercontent.com/u/98414850?v=4" alt="avatar" width={"40"} height={"40"} />
            <div class="flex flex-col">
              <h2 class="relative top-2 font-semibold">henri</h2>
              <p class="font-medium">{t("app.work.title")} - {t("app.work.land")}</p>
            </div>
          </div>
          <div onClick$={() => menu.isOpen = !menu.isOpen} class="flex group cursor-pointer flex-col items-center justify-center space-y-0.5 w-5 h-5">
            <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
            <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
            <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
          </div>

        </div>

        <div>
          <h2>{t("app.history.title")}</h2>
          <p>{t("app.history.content")}</p>
        </div>
        <div>
          <h2>{t("app.today.title")}</h2>
          <p>{t("app.today.content")}</p>
        </div>

        <div>
          <h2>Skills</h2>
          <p>I have 3 years of experience in the webdevelopment space.</p>
        </div>

      </div>
    </div>
  );
});

export const head: DocumentHead = () => {
  const t = inlineTranslate();

  return {
    title: "henri",
    meta: [{ name: 'description', content: t('app.head.home.description@@Localized routing') }, {name: "og:image", content: "http://localhost:5173/og"}, {name: "og:description", content: "http://localhost:3000/en/home"}],
  };
};