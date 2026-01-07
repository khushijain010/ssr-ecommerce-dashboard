# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2026

This is a repository for an **SSR-based E-Commerce Product Management Dashboard** built using **Next.js 13 App Router**, **React**, **TypeScript**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**.

The project focuses on **server-side rendering (SSR)**, structured product management workflows, and a real-world admin dashboard experience.

---

Key Features:

- We will be using Shadcn UI for the Admin!
- Server-Side Rendering (SSR) using Next.js 13 App Router
- Our admin dashboard is going to serve as both CMS, Admin and API!
- Secure authentication using Clerk
- You will be able to control multiple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- Guided store setup workflow to avoid invalid data creation
- Logical dependency enforcement:
  - Billboard → Category → Product
- Ability to create, update, and delete **Billboards**
- Ability to create, update, and delete **Categories**
- Ability to create, update, and delete **Products**
- Products must belong to a category (data integrity enforced)
- You will be able to upload multiple images for products, and change them whenever you want!
- You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
- You will be able to control which products are "featured" so they show on the homepage!
- You will be able to see your orders, sales, etc.
- You will be able to see graphs of your revenue etc.
- Revenue and sales analytics dashboard
- Order creation
- Proper empty-state handling for new stores (no fake data)
- Server Components for data fetching
- Client Components for interactivity
- MySQL + Prisma + PlanetScale

## Project Objective (As per PS)

The objective of this project is to build a **Server-Side Rendered E-Commerce Product Management Dashboard** that:

- Demonstrates understanding of SSR using Next.js
- Provides a fully functional admin dashboard
- Ensures structured and user-friendly workflows
- Avoids broken UI states for new users
- Can be deployed and accessed publicly

## Multi-Store Architecture

Each authenticated user can manage one or more stores.  
Every store operates in isolation using dynamic routing:

/dashboard/[storeId]

All data such as products, categories, and orders are scoped to the respective store, ensuring proper separation and scalability.


## Store Setup Flow

The dashboard enforces a real-world setup sequence:

1. **Create Billboard**  
   Billboards act as promotional banners and are required before creating categories.

2. **Create Category**  
   Categories are linked to billboards and used to organize products.

3. **Add Product**  
   Products are added under categories and become visible in listings and analytics.

This flow ensures clean data relationships and avoids user confusion.

## API Layer

The admin dashboard also acts as an API provider.  
REST-style API routes are generated using Next.js Route Handlers under:

/api/[storeId]/...

These APIs serve products, categories, and billboards and can be consumed by external storefronts or services.

## Tech Stack

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- PostgreSQL
- Clerk Authentication
- Recharts (Analytics)

### Prerequisites

**Node version 18.x or higher**

### Cloning the repository

```shell
git clone https://github.com/khushijain010/ssr-ecommerce-dashboard.git
cd ssr-ecommerce-dashboard
```

### Install packages

npm install

### Setup .env file
Create a .env.local file in the root directory:

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=


### Prisma Setup
Generate Prisma client:

npx prisma generate

Push Prisma schema to database:

npx prisma db push

### Start the app

npm run dev

Open in browser:
http://localhost:3000

## Dummy Admin Credentials (For Evaluation)

Use the following credentials to access the dashboard:

Email: admin@test.com  
Password: Admin@123  

These credentials are provided only for evaluation purposes.

---

## SSR & Performance Notes

- Data fetching is performed on the server using Next.js App Router.
- Server-side rendering ensures better SEO, reliability, and data consistency.
- Critical dashboard data is rendered before hydration.
- Client-side interactivity is layered on top using Client Components.

## Dashboard & Analytics
- Dashboard displays revenue, sales, and inventory overview.
- Analytics charts are rendered only when relevant data exists.
- New stores display proper empty states instead of broken charts.

## Error Handling & Empty States

- Forms include validation to prevent incomplete submissions
- Required dependencies (Billboard → Category → Product) are enforced
- New stores display proper empty states instead of broken UI
- Invalid routes and missing data are handled gracefully


## Live Deployment

The application is deployed and publicly accessible at:

https://<your-vercel-project-link>

The deployed version supports full authentication, store setup, and product management workflows.

## Submission Notes

This repository is submitted as part of the SSR E-Commerce Product Management Dashboard project.  
All features are implemented according to the provided problem statement and submission guidelines.


