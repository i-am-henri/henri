// from the posthoq docs: https://posthog.com/docs/libraries/next-js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
  api_host: '/posthog',
});

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}