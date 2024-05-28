import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
    
env: {
    ELASTICPATH_CLIENT_ID: process.env.ELASTICPATH_CLIENT_ID,
        BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
},
i18n: {
    locales: ['en-US'],
        defaultLocale: 'en-US',
},
});

export default nextConfig;
