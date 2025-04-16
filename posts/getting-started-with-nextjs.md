---
title: 'Getting Started with NextJS'
date: '2025-04-05'
image: getting-started-nextjs.png
excerpt: NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR, routing, image optimization, and more.
isFeatured: true
---

# Getting Started with NextJS 🚀

NextJS is a **framework for ReactJS**.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

## Why would we then need NextJS?

Because **NextJS makes building React apps easier** - especially apps that need server-side rendering (SSR), static site generation (SSG), API routes, and performance optimizations.

React on its own only deals with UI. Things like routing, data fetching, SEO, and performance need to be handled separately. That’s where NextJS shines.

In this article, we'll dive into the core concepts and features NextJS has to offer:

- ✅ File-based Routing
- ⚡ Built-in Page Pre-rendering
- 📡 Rich Data Fetching Capabilities
- 🖼️ Image Optimization
- 🧠 Server-Side Rendering & Static Site Generation
- 🌐 API Routes
- 📦 Built-in CSS & Sass Support
- 🔥 Fullstack Capabilities

---

## 📁 File-based Routing

One of the most amazing features of NextJS is that **pages are created by simply adding React components to the `pages/` folder**.

```bash
/pages
  index.js        --> www.yoursite.com
  about.js        --> www.yoursite.com/about
  blog/
    [slug].js     --> www.yoursite.com/blog/my-post
```

No need for `react-router-dom`. You create routes by creating files. Dynamic routes are created with brackets: `[slug].js`.

![Create routes via your file + folder structure](nextjs-file-based-routing.png)

---

## ⚙️ Pre-rendering: SSR and SSG

NextJS supports **two forms of pre-rendering**:

1. **Static Generation (SSG)** - pages are pre-rendered at build time.
2. **Server-side Rendering (SSR)** - pages are generated at request time.

You can choose on a per-page basis:

```js
// SSG
export async function getStaticProps() {
  return { props: { data: "static" } }
}

// SSR
export async function getServerSideProps(context) {
  return { props: { data: "dynamic" } }
}
```

This gives you complete control over performance and freshness.

---

## 🌐 Built-in API Routes

NextJS allows you to create backend APIs without setting up an entire server.

Just add a JS file to `/pages/api/` and you have an endpoint!

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the API!' })
}
```

---

## 🖼️ Image Optimization

NextJS comes with an `<Image />` component that supports **lazy loading**, **blur placeholders**, **automatic resizing**, and **WebP format**.

```jsx
import Image from 'next/image'

<Image src="/me.png" alt="Me" width={500} height={500} />
```

---

## 🧠 SEO & Head Tag Management

NextJS supports SEO out of the box with `next/head`:

```jsx
import Head from 'next/head'

<Head>
  <title>My Awesome Page</title>
  <meta name="description" content="This is a cool page" />
</Head>
```

---

## 💅 Styling Options

NextJS supports:

- CSS Modules
- Sass
- Tailwind CSS
- Styled-components
- PostCSS

You can choose whatever works best for your stack.

---

## 🏁 Conclusion

NextJS is the go-to framework for building production-grade, fullstack React apps. It provides everything you need out of the box and helps you focus on building features rather than wiring things together.

Whether you're building a blog, a portfolio, a dashboard, or a SaaS platform, NextJS has got your back.

👉 Ready to start? Run:

```bash
npx create-next-app@latest
```

And just like that, you're off to the races!

---