# Waitlist App

This is a Next.js application with a MongoDB backend, designed to collect emails for a waitlist.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running locally (or a MongoDB Atlas connection string)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Variables:
   The project comes with a `.env.local` file pre-configured for a local MongoDB instance:
   ```
   MONGODB_URI=mongodb://localhost:27017/waitlist-app
   ```
   If you are using MongoDB Atlas, replace this value with your connection string.

## Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern Dark UI with Glassmorphism
- MongoDB Integration (Mongoose)
- API Route for Waitlist submission
- Duplicate email handling
- Responsive design

## Project Structure

- `src/app/page.tsx`: Main landing page
- `src/app/api/waitlist/route.ts`: Backend API for handling submissions
- `src/lib/mongodb.ts`: Database connection utility
- `src/models/Waitlist.ts`: Mongoose schema for the waitlist collection
- `src/components/WaitlistForm.tsx`: Client-side form component
