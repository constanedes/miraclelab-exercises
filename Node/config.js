const config = {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV || 'development',
}

module.exports = config;