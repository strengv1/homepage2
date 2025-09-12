module.exports = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config: { optimization: { minimize: boolean; }; }, { dev }: any) => {
    if (dev) {
      config.optimization.minimize = false;
    }
    return config;
  }}