# AI Recruiter App

This project is an AI-powered recruiter application built with Next.js, TypeScript, and Supabase. It leverages Vapi.ai for AI-driven functionalities.

## Project Setup

1. **Initialize Next.js Project**: 
   ```bash
   npx create-next-app@latest --ts
   ```

2. **Set up Supabase**:
   - Create a new project on [Supabase](https://supabase.io/).
   - Copy the project URL and public API key.

3. **Configure Environment Variables**:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     VAPI_AI_API_KEY=your-vapi-ai-api-key
     ```

4. **Install Dependencies**:
   ```bash
   npm install @supabase/supabase-js
   npm install axios
   npm install zustand
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

## Usage Instructions

1. **Authentication**:
   - Users can sign up and log in using their email and password.
   - Authentication is managed using Supabase.

2. **AI-Powered Features**:
   - The app provides AI-driven interview prompts and sentiment analysis using Vapi.ai.

3. **State Management**:
   - The app uses Zustand for state management.

## Deployment Steps

1. **Configure Production Environment Variables**:
   - Ensure that the `.env.local` file contains the correct production values.

2. **Build the Application**:
   ```bash
   npm run build
   ```

3. **Start the Production Server**:
   ```bash
   npm start
   ```

4. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel.
   - Set up the environment variables on Vercel.
   - Deploy the application.
