# Next.js Cookie Auth

A minimal authentication demo using cookies in a Next.js 14 app.  
Users can register, login, and access a protected dashboard.  
No backend or database—user info is stored in cookies (for demo/learning only).

## Features

- Register with full name, email, and password
- Login with email and password
- Protected dashboard route (redirects if not authenticated)
- Logout functionality
- Responsive UI with Tailwind CSS
- Middleware-based route protection
- No external icon or toast libraries

## How It Works

- User info (name, email, password) is stored in cookies using [nookies](https://github.com/maticzav/nookies).
- Middleware checks cookies to allow/deny access to protected routes.
- All authentication logic is in the `hooks/use-auth.ts` file.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/auth/register` – Registration page
- `app/auth/login` – Login page
- `app/dashboard` – Protected dashboard
- `hooks/use-auth.ts` – All cookie-based auth logic
- `middleware/auth-middleware.ts` – Route protection middleware

## ⚠️ Disclaimer

This project is for demonstration and learning purposes only.  
**Never store plain passwords in cookies or use this approach in production.**

---

Made with ❤️ [@YourmixJNR](https://github.com/YourmixJNR)
