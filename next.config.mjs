
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/umami",
                destination: "https://cloud.umami.is/script.js",
            },
        ];
    },
    distDir: "out"
};

export default withNextIntl(nextConfig)
