import { component$, useStore } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { inlineTranslate } from 'qwik-speak';
export default component$(() => {

    const menu = useStore({
        isOpen: false,
    });
    const t = inlineTranslate();


    return (
        <div class="min-h-screen flex flex-col items-center  ">
            <div class="fixed flex-col items-center w-full h-full top-0 right-0 left-0 bg-[#e1e1e1] dark:bg-[#171717] z-10" style={{ display: menu.isOpen ? 'flex' : 'none' }}>
                <div class="lg:w-[700px] flex flex-col mt-[78px] space-y-16">
                    <div class="flex justify-between opacity-100 items-center">
                        <p>(hopefully) helping links</p>
                        <div onClick$={() => menu.isOpen = !menu.isOpen} class="flex group cursor-pointer flex-col items-center justify-center space-y-0.5 w-5 h-5">
                            <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            <div class="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                        </div>
                    </div>
                    <Link class="text-2xl animate-bottom_fade" href='/en/work'>Work</Link>
                    <Link class="text-2xl animate-bottom_fade" href='/contact'>Contact</Link>
                </div>
            </div>
            <div class="lg:w-[700px] flex flex-col space-y-16">
                <div class="flex items-center justify-between mt-16">
                    <div class="flex items-center justify-center  space-x-3">
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

                {/* The main content on this page */}
                <Link href='https://cookie.henri.gg' class="flex" target='_blank'>
                    <img class="rounded-xl" src="../../public/cookie-clicker.png" width={200} height={200} />
                    <div class="ml-2">
                        <h2>
                            Cookie Clicker
                        </h2>
                        <p>{t("work.cookie-clicker")}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
});

export const head: DocumentHead = () => {
    const t = inlineTranslate();

    return {
        title: "henri",
        meta: [{ name: 'description', content: t('app.head.home.description@@Localized routing') }, { name: "og:image", content: "http://localhost:5173/og" }, { name: "og:description", content: "http://localhost:3000/en/home" }],
    };
};