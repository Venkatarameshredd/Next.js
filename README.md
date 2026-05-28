# Next.js Portfolio + LMS

This repository includes a simple Next.js portfolio website with an integrated LMS section.

## Features

- Homepage with portfolio highlights
- LMS catalog with course cards
- Course detail pages with lessons and enrollment state
- Shared layout, responsive styles, and navigation

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Structure

- `app/page.tsx` - portfolio landing page with LMS preview
- `app/lms/page.tsx` - course catalog
- `app/lms/[courseId]/page.tsx` - course details
- `lib/courses.ts` - course data for the LMS
- `components/` - reusable LMS UI components

## Deploy to Vercel

This site is ready for Vercel deployment. Push the repository to GitHub and connect it in Vercel, then the default build command will be `npm run build` and the output directory is handled automatically by Next.js.
