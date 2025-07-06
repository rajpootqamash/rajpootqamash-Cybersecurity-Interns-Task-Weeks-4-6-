const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, try again later.'
});
app.use(limiter);

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173'], // change to your frontend
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Helmet Security Headers
app.use(helmet());

// Content Security Policy (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trustedscripts.example.com"],
      styleSrc: ["'self'", "https://trustedstyles.example.com"]
    }
  })
);

// HSTS - Force HTTPS
app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  })
);

// API Key Middleware
app.use((req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey === process.env.API_KEY) next();
  else res.status(403).json({ error: 'Unauthorized' });
});

// API Route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Secure data returned successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
