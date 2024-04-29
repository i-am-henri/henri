/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    distDir: 'out',
};

export default withNextIntl(nextConfig)
