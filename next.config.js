const nextConfig = {
  reactStrictMode: false,
};

const withVideos = require('next-videos');

module.exports = {
  ...withVideos(),
  ...nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos",
          outputPath: "static/videos",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
};
