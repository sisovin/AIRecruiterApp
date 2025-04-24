export const APP_NAME = "AI Recruiter App";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const VAPI_AI_API_KEY = process.env.VAPI_AI_API_KEY || "";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  JOBS: "/jobs",
  INTERVIEWS: "/interviews",
};

export const MESSAGES = {
  WELCOME: "Welcome to the AI Recruiter App!",
  LOGIN_SUCCESS: "Login successful!",
  LOGIN_FAILURE: "Login failed. Please try again.",
  SIGNUP_SUCCESS: "Signup successful! Please check your email to verify your account.",
  SIGNUP_FAILURE: "Signup failed. Please try again.",
  LOGOUT_SUCCESS: "You have been logged out.",
};

export const NOTIFICATIONS = {
  NEW_MESSAGE: "You have a new message.",
  INCOMING_CALL: "You have an incoming call.",
  SYSTEM_ALERT: "System alert.",
};
