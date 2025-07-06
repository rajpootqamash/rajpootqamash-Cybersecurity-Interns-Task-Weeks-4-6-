# rajpootqamash-Cybersecurity-Interns-Task-Weeks-4
# 🔐 Secure API with Rate Limiting, CORS, and Helmet

## 📌 Objective
Harden a basic Node.js/Express API using security best practices:
- Prevent brute-force via rate limiting
- Control access using CORS
- Add protection headers with Helmet
- Use API key authentication
- Enforce HTTPS and CSP headers

---

## 🛠 Technologies Used
- Node.js + Express.js
- express-rate-limit
- cors
- helmet
- dotenv

---

## 🧪 How to Run

1. Clone the repo

         git clone https://github.com/yourusername/secure-api.git
         cd secure-api

2. Install dependencies
   
         npm install
   
3.Create .env file from example

          Create .env file from example
          
   Set your actual API_KEY inside .env
4. Start server
          node server.js

## API Usage

### GET /api/data

### Header Required:

         x-api-key: your_secure_api_key

### Response:

         {
            "message": "Secure data returned successfully!"
         }

## ⚠️ Issues Faced

### 1. Fail2Ban Configuration Error
     - Fail2Ban service failed due to incorrect formatting in jail.local.
     - Common mistakes included:
     - Missing [sshd] section header
     - Incorrect time format (bantime = 1h instead of bantime = 3600)
     - Fixed by restoring proper INI format and restarting the service.

### 2. Helmet CSP Blocked Frontend Scripts

    - CSP initially blocked legitimate scripts and styles.
    - Solution: Whitelisted trusted sources using helmet.contentSecurityPolicy.

### 3. API Key Middleware Blocked All Requests

- Forgot to set x-api-key header in Postman/curl.
- Resolved by reading from .env properly.

## ✅ Why This Task Was Done

  - To apply real-world API security practices in a Node.js environment.
  - Prepare the backend for production with:
  - Rate limiting
  - Authentication
  - CORS control
  - HTTPS enforcement
  - Injection prevention

## 🧾 Conclusion
    This task helped implement critical web security measures every secure API must follow. The API is now protected against:

    - Brute-force attacks
    - Unauthorized access
    - Cross-origin abuse
    - Script/style injections
    - Insecure headers or untrusted resources
    
    The result is a clean, production-ready Node.js API with a strong security posture.





