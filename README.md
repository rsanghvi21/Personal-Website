# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js, featuring a beautiful dark theme with purple accents, smooth animations, and glassmorphism design.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0a/a855f7?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Dark Theme**: Beautiful black and purple color scheme
- **Fully Responsive**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Hover effects, form validation, and micro-interactions
- **Performance Optimized**: Fast loading with Vite build tool
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: ARIA labels and keyboard navigation support

## 🚀 Tech Stack

- **Framework**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Vercel Ready

## 📱 Sections

1. **Hero/Landing**: Eye-catching introduction with call-to-action
2. **About**: Personal information, bio, and interests
3. **Projects**: Portfolio showcase with filtering and project details
4. **Skills**: Technical skills with visual indicators
5. **Experience**: Professional timeline and education
6. **Contact**: Contact form with validation and social links

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the website

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.jsx** - Name, title, and bio
2. **src/components/About.jsx** - About section content
3. **src/components/Projects.jsx** - Your projects
4. **src/components/Skills.jsx** - Your skills and technologies
5. **src/components/Experience.jsx** - Work experience and education
6. **src/components/Contact.jsx** - Contact information

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Update these values for different purple shades
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
  },
}
```

### Fonts

Update fonts in `tailwind.config.js` and make sure to import them in `index.html`.

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service like:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🎯 Performance

This portfolio is optimized for performance:
- Lighthouse score: 90+
- Fast loading with code splitting
- Optimized images and assets
- Minimal bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern web design trends
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **If you found this portfolio template helpful, please give it a star!**

📧 **Questions?** Feel free to reach out at your.email@example.com 