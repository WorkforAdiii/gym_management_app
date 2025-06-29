# Gym Management System Frontend

This is the React frontend for the Gym Management System built with Vite and Tailwind CSS.

## Getting Started

### 1. Install Dependencies

```
npm install
```

### 2. Configure Backend API URL

The frontend uses [axios](https://axios-http.com/) for API requests. By default, it is set to `http://localhost:5000` in `src/main.jsx`:

```
axios.defaults.baseURL = "http://localhost:5000";
```

If your backend runs on a different URL or port, update this value accordingly.

### 3. Start the Development Server

```
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### 4. Backend Requirement

The backend (Node.js/Express/MongoDB) must be running and accessible at the base URL specified above for the app to function correctly.

## Features
- User authentication (login/register/forgot password)
- Member management
- Membership plans
- Dashboard and stats
- Responsive UI with Tailwind CSS

## Project Structure
- `src/Comp/` - Reusable components
- `src/Pages/` - Main pages/routes

## Customization
- Update API endpoints or add new features as needed.

---

For backend setup, see the backend README or documentation.
