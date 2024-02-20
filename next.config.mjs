/** @type {import('next').NextConfig} */
const nextConfig = {

	output: "export",
	
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
	
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	  ) => {
		config.externals.push({
			"utf-8-validate": "commonjs utf-8-validate",
			"bufferutil": "commonjs bufferutil",
			canvas: 'commonjs canvas' 
		})
		return config
	  },
	
	  experimental: {
		appDir: true,
	  },

	
};

export default nextConfig;
