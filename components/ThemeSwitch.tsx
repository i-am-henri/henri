'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  function switchTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }
  interface ViewTransition {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
  }

  interface GlobalDocument extends Document {
    startViewTransition?(setupPromise: () => Promise<void> | void): ViewTransition;
  }
  let glbDocument: GlobalDocument;
  useEffect(() => {
    glbDocument = document
  })
  return (
    <div onClick={() => {
      if (!glbDocument.startViewTransition) switchTheme();
      glbDocument!.startViewTransition!(switchTheme);
    }} className='rounded-full dark:border-[#ffffffc0] p-2 cursor-pointer'>
      {resolvedTheme == "dark" ? <Moon className={"h-4 w-4"} /> : <Sun className='h-4 w-4' />}
    </div>
  );
}
