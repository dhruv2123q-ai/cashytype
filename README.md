# CashyType Platform

Expanded mobile-first Next.js website inspired by the supplied screenshots.

## Pages
- `/` — landing page
- `/register` — registration
- `/payment` — ₹99 payment UI (demo gateway placeholder)
- `/login` — login UI
- `/dashboard` — task dashboard demo

## Run
npm install
npm run dev

## Deploy
Push this folder to GitHub and import the repository into Vercel.

## Before production
Connect real authentication/database/task management and an authorized payment gateway. Payment success must be verified server-side through the provider's API/webhook/signature. Replace all sample task rates and claims with real business data.
