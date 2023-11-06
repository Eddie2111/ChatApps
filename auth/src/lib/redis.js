const redis = require('ioredis')

let redisClient = null

function createRedisClient () {
  if (!redisClient) {
    redisClient = new redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      retryStrategy: (times) => {
        // Reconnect after 2 seconds, then increase the delay exponentially
        return Math.min(times * 2000, 30000) // Max delay 30 seconds
      }
    })

    redisClient.on('connect', () => {
      console.log('Redis client connected')
    })

    redisClient.on('error', (error) => {
      console.error(error)
    })
  }

  return redisClient
}

module.exports = {
  getRedisClient: createRedisClient
}
