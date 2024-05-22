/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    ...(process?.env?.NODE_ENV === 'production' && {
        async rewrites() {
            return [
                // Posthog
                {
                    source: '/posthog/:path*',
                    destination: 'https://eu.posthog.com/:path*'
                },
                {
                    source: '/posthog/:path*/',
                    destination: 'https://eu.posthog.com/:path*/'
                }
            ]
        },
        async headers() {
            async function getMyIp() {
                // const x = await fetch('https://api.ipify.org')
                const x = await fetch('https://api.my-ip.io/ip')
                return await x.text()
            }
            const ip = await getMyIp()
            return [
                {
                    source: '/posthog/:path*',
                    headers: [
                        { key: 'X-Forwarded-Proto', value: 'https' },
                        { key: 'X-Forwarded-Host', value: 'https://www.useflytrap.com' },
                        { key: 'X-Forwarded-For', value: ip }
                    ]
                },
                {
                    source: '/posthog/:path*/',
                    headers: [
                        { key: 'X-Forwarded-Proto', value: 'https' },
                        { key: 'X-Forwarded-Host', value: 'https://www.useflytrap.com' },
                        { key: 'X-Forwarded-For', value: ip }
                    ]
                }
            ]
        }
    }),
    distDir: 'out',
    skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig)
