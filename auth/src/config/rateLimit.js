const rateLimit = require('express-rate-limit');

const Limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 25, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  headers: true,
  statusCode: 429,
  skipSuccessfulRequests: true,
  skipFailedRequests: false,
  skip: (req, res) => {
    if (req.cookies['auth-token']) {
      return true;
    }
    return false;
  },
  keyGenerator: (req) => {
    return req.cookies['auth-token'];
  },
  handler: (req, res) => {
    res.status(429).json({
      status: 'fail',
      message:
        'Too many requests from this IP, please try again after 15 minutes',
    });
  },
  onLimitReached: (req, res) => {
    console.log('Limit Reached');
    return res.status(429).json({
      status: 'fail',
      message:
        'Too many requests from this IP, please try again after 15 minutes',
    });
  },
  onLimitExceeded: (req, res) => {
    console.log('Limit Exceeded');
    return res.status(429).json({
      status: 'fail',
      message: 'Limit exceeded from this IP, please try again after 15 minutes',
    });
  },
  skipOnError: true,
  skipOnError: (req, res) => {
    return true;
  },
  skipOnNoKey: true,
  skipOnNoKey: (req, res) => {
    return true;
  },
  store: new rateLimit.MemoryStore(),
  draft_polli_ratelimit_headers: true,
  draft_polli_ratelimit_headers: (req, res) => {
    return true;
  },
});

module.exports = {Limiter};
