const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: !isProd
  },
  webpack(config) {
    if (isProd) {
      config.mode = 'production';
      config.optimization.minimize = true
    }
    return config
  }
}

module.exports = nextConfig
