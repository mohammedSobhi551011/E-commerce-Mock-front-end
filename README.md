# E-Commerce Platform

A modern e-commerce frontend built with 
React, TypeScript, and Vite, featuring a 
responsive home page with product displays, 
shopping cart functionality, and user 
authentication.

## Features

- **Product Showcase**: Display products with images, descriptions, and pricing
- **Interactive Carousels**: Featured products and collections with smooth animations
- **Shopping Cart**: Add/remove products with quantity controls
- **Wishlist**: Save favorite products for later
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean interface built with Tailwind CSS and Material Tailwind
- **State Management**: Redux Toolkit for global state management
- **Authentication**: User login/registration flow (in development)

## Technologies

- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- Material Tailwind
- Redux Toolkit
- React Router 6
- React Icons
- Axios

## Project Structure

```
├── src/
│ ├── pages/ # Page components
│ │ └── Home.tsx # Main home page
│ ├── components/ # Reusable UI components
│ │ ├── main/ # Core components
│ │ └── variances/ # Component variations
│ ├── classes/ # Business logic classes
│ │ ├── ProductClass.ts # Product management
│ │ ├── CarouselClass.ts # Carousel logic
│ │ └── BlogPostClass.ts # Blog content
│ ├── features/ # Feature implementations
│ │ ├── cart/ # Shopping cart
│ │ ├── favorite/ # Wishlist
│ │ └── product/ # Product display
│ ├── store.ts # Redux store
│ └── types.ts # Type definitions
├── public/images/ # Product and collection imagesproject-root/
├── src/
│   ├── pages/                # Page components
│   │   └── Home.tsx          # Main home page
│   ├── components/           # Reusable UI components
│   │   ├── main/             # Core components
│   │   └── variances/        # Component variations
│   ├── classes/              # Business logic classes
│   │   ├── ProductClass.ts   # Product management
│   │   ├── CarouselClass.ts  # Carousel logic
│   │   └── BlogPostClass.ts  # Blog content
│   ├── features/             # Feature implementations
│   │   ├── cart/             # Shopping cart
│   │   ├── favorite/         # Wishlist
│   │   └── product/          # Product display
│   ├── store.ts              # Redux store
│   └── types.ts              # Type definitions
├── public/
│   └── images/               # Product and collection images
```

## Getting Started

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Available Scripts

- dev : Start development server
- build : Create optimized production build
- lint : Run ESLint for code quality checks
- preview : Preview production build locally

## Key Components

- `Home` : Main page with all sections
- `ProductClass` : Handles product data
- `CarouselClass` : Manages carousel content

## Dependencies

See complete list in `package.json`

## License

MIT License
