/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		reactCompiler: true,
		turbo: {
			useSwcCss: true,
		},
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.geojson$/,
			type: 'json',
		});
		return config;
	},
};

export default nextConfig;
