import './src/env.mjs';
/** @type {import('next').NextConfig} */
const nextConfig = {		
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'liveblocks.io',
				port: ''
			}
		]
	},
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	) => {
		config.externals.push({
			"utf-8-validate": "commonjs utf-8-validate",
			"bufferutil": "commonjs bufferutil",
			canvas: "commonjs canvas",			
		});

		return config;
	},	
	typescript: {
		ignoreBuildErrors: true,
	},	
};

export default nextConfig;
