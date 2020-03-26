export default {
    define: {
    'process.env': {
      ENV: process.env.ENV || 'dev',
    }
  },
}