/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/umami",
                destination: "https://cloud.umami.is/script.js",
            },
        ];
    },
};

export default withNextIntl(nextConfig)
