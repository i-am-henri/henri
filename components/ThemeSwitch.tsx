'use client';

import { Moon, Sun } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

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
  const glbDocument: GlobalDocument = document
  return (
    <div onClick={() => {
      if (!glbDocument.startViewTransition) switchTheme();
      glbDocument!.startViewTransition!(switchTheme);
    }} className='rounded-full border p-2 cursor-pointer'>
      {resolvedTheme == "dark" ? <Moon /> : <Sun />}
    </div>
  );
}
