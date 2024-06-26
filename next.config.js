import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.EnvironmentPlugin({
        FILE_PATH_SEPARATOR: path.sep, // Set the file path separator based on the current operating system
      })
    );

    return config;
  },
};

export default nextConfig;
