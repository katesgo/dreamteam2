import './src/env.mjs';
/** @type {import('next').NextConfig} */
const nextConfig = {	
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
		) => {
		config.externals.push({
			"utf-8-validate": "commonjs utf-8-validate",
			"bufferutil": "commonjs bufferutil",
			canvas: "commonjs canvas",			
		})
		config.resolve.alias.canvas = false;
		return config;
	},	
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'liveblocks.io',
				port: ''
			}
		]
	},
	typescript: {
		ignoreBuildErrors: true,
	},	
};

export default nextConfig;
