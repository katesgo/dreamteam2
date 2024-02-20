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
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	  ) => {
		config.externals.push({ canvas: 'commonjs canvas' })
		return config
	  },


};

module.exports = nextConfig
