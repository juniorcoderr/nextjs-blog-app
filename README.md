# 📝 Next.js Markdown Blog Application

A **high-performance, Markdown-powered blog platform** built using the latest version of **Next.js**. This project combines static site generation, dynamic content rendering, and seamless integration with MongoDB to create a modern developer-friendly blogging solution.

---

## 🔍 Overview

This project is designed for developers and content creators who want a clean, efficient, and scalable blog system. Blog posts are written in simple Markdown format, allowing you to separate content from code. Each post includes support for metadata (via frontmatter), custom styling, and syntax-highlighted code blocks.

The application is built with **performance and SEO in mind**, and it's optimized to be deployed statically using Next.js export.

---

## ✨ Features

✅ **Markdown Blog Posts**  
Write posts using `.md` files with frontmatter metadata (title, date, image, excerpt).

✅ **Static Site Generation (SSG)**  
Fast page loads and SEO benefits using `getStaticProps` and `getStaticPaths`.

✅ **Code Syntax Highlighting**  
Render beautiful, readable code snippets using `react-syntax-highlighter`.

✅ **Dynamic Routing for Posts**  
Each post automatically gets its own route like `/posts/your-post-slug`.

✅ **MongoDB Integration** *(Optional)*  
Connect to MongoDB to store post metadata, track views, or add features like comments.

✅ **Reusable Components**  
Modular design with reusable components (e.g., `PostItem`, `Layout`, `HeroSection`).

✅ **Clean UI**  
Minimalist blog layout with scoped styles using CSS Modules.

✅ **Deploy-Ready**  
Easily deploy on platforms like **Vercel**, **Netlify**, or **Render**.

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **Next.js 15** | React framework for server-side rendering & static site generation |
| **React 18** | Frontend UI rendering |
| **Markdown** | Blog content |
| **gray-matter** | Parses frontmatter metadata in Markdown files |
| **react-markdown** | Renders Markdown as HTML |
| **react-syntax-highlighter** | Displays styled code blocks |
| **MongoDB** | Optional backend integration for dynamic features |

---

## 📁 Project Structure

```
nextjs-blog-project/
├── components/         # Reusable UI components
├── lib/                # Utility functions (e.g., for fetching posts)
├── pages/              # Next.js pages and routes
│   └── posts/          # Dynamic post routes
├── posts/              # Markdown blog post files
├── public/             # Static assets
├── styles/             # CSS Modules for styling
├── .env.local          # Environment variables (MongoDB URI etc.)
├── package.json        # Project metadata and dependencies
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/juniorcoderr/nextjs-blog-app.git
cd nextjs-blog-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and visit:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔗 MongoDB Integration (Optional)

If you wish to use MongoDB (e.g., for storing blog post analytics or managing user comments), follow these steps:

1. Create a MongoDB cluster (e.g., via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
2. Copy your connection URI.
3. Create a `.env.local` file in the root and add:
   ```
   MONGODB_URI=your-mongodb-connection-string
   ```

Use the `lib` folder to connect and interact with your MongoDB collections.

---

## 🚀 Deployment

This project is production-ready and easy to deploy.  
You can host it on:

- [Vercel](https://vercel.com) – *Recommended for Next.js apps*
- [Netlify](https://netlify.com)
- [Render](https://render.com)
- [GitHub Pages](with `next export`)
  
### To Deploy on Vercel:

1. Push the code to GitHub.
2. Go to [vercel.com](https://vercel.com), import your repo.
3. Set up environment variables (if any).
4. Click **Deploy** – done!

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!  
Feel free to open an issue or submit a pull request.

---

## 📄 License

Feel free to use it for personal or commercial projects.
