module.exports = {
  webpack: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
    configure: {
      experiments: {
          topLevelAwait: true
      }
    }
  }
}