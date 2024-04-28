import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: "henri",
  meta: [
    {
      name: "description",
      content: "Hey, my name is henri, I'm 14 years old and a mostly active in the frontend space. I like to build things like my own email provider.",
    },
  ],
};
