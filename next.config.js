/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/docs',
    experimental: {
        clientRouterFilter: false,
    },
}

module.exports = nextConfig
