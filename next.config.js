/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['@amcharts/amcharts5'])

module.exports = withTM(nextConfig)
