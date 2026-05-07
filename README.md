# Ashwin's Portfolio - React + Vite + Tailwind

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ⚡️ Lightning-fast development with Vite
- ⚛️ React 18 with hooks
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ✨ Smooth animations with ScrollReveal
- 🎯 Smooth scrolling navigation
- 💼 Portfolio showcase
- 📬 Contact form integration with Formspree
- 🎭 Typed.js text animation

## 📦 Installation

1. **Clone or navigate to the project directory**
```bash
cd portfolio-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── assets/          # Images and resume PDF
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'bg-primary': '#1f242d',
  'bg-secondary': '#323946',
  'text-primary': '#fff',
  'accent': '#0ef',
}
```

### Content
- **Personal Info**: Edit components in `src/components/`
- **Images**: Place in `public/assets/`
- **Resume**: Place PDF in `public/assets/`
- **Social Links**: Update in `src/components/Home.jsx`

### Contact Form
The form uses Formspree. Update the action URL in `src/components/Contact.jsx`:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="post">
```

## 📝 Key Improvements from Original

1. **Component-based architecture** - Easier to maintain and scale
2. **Modern React hooks** - useState, useEffect, useRef
3. **Tailwind CSS** - Faster styling and smaller bundle size
4. **Better performance** - Vite's lightning-fast HMR
5. **Smooth scrolling** - react-scroll library
6. **Clean code structure** - Organized and reusable components

## 🛠️ Technologies Used

- React 18
- Vite
- Tailwind CSS
- ScrollReveal
- Typed.js
- react-scroll
- Font Awesome

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This app can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

For Vercel:
```bash
npm install -g vercel
vercel
```

## 📄 License

Copyright © 2024 by Ashwin | All Rights Reserved.

## 👤 Author

**Ashwin**
- LinkedIn: [ashwin-v-455b75245](https://www.linkedin.com/in/ashwin-vilson-455b75245/)
- GitHub: [Ashwin-V17](https://github.com/Ashwin-V17)