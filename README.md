# WhatBytes Assignment

A modern e-commerce demo website built with **Next.js 15**, **Redux Toolkit**, and **Tailwind CSS**.

**Live** link:- https://whatbytes-assignment-nu.vercel.app/

## Features

- Product listing with category and price filtering
- Responsive sidebar filters
- Search bar (responsive: mobile & desktop)
- Add to cart with popup notification
- Cart page with Redux state
- Modern UI with Tailwind CSS
- Lucide icons for header and footer
- Fully responsive for all devices

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/icons/)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd whatbytes-assignment
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Folder Structure

```
/app
  /components
    Header.js
    Sidebar.js
    productList.js
    footer.js
    CartPage.js
  /cart
    page.js
  /product/[id]
    page.js
  layout.js
  page.js
/store
  cartSlice.js
  Provider.js
/public
  (product images)
```


---

**Made with ❤️ for WhatBytes Assignment**
