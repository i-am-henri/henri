// from the posthoq docs: https://posthog.com/docs/libraries/next-js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
  api_host: process.env.NODE_ENV === 'development' ? 'https://eu.posthog.com' : '/posthog',
  // Disable in development
  loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
  }
});

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}