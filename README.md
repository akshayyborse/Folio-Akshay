# Akshay Borse - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing the work and skills of Akshay Borse, a Frontend Engineer and Web Designer at Oceanmonks.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Interactive Elements**: 
  - Blobity cursor effects
  - Framer Motion animations
  - GSAP animations
  - Smooth scrolling
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Analytics**: Vercel Analytics integration
- **Speed Insights**: Performance monitoring with Vercel Speed Insights

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion
  - GSAP
  - Scroller Motion
- **Icons**: FontAwesome
- **Fonts**: Syne, Mona Sans
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights

## 📁 Project Structure

```
├── app/
│   ├── about-section/     # About section components
│   ├── animations/        # Animation utilities and components
│   ├── api/              # API routes
│   ├── blog-section/     # Blog section components
│   ├── contact-section/  # Contact section components
│   ├── footer/           # Footer component
│   ├── fonts/            # Custom font configurations
│   ├── hero-section/     # Hero section component
│   ├── navbar/           # Navigation component
│   ├── reviews-section/  # Reviews/testimonials section
│   ├── utils/            # Utility functions
│   ├── work-section/     # Work/portfolio section
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Meta tags, title, description
- `app/hero-section/Hero.tsx` - Hero content, links, profile image
- `public/profile.webp` - Your profile picture

### Styling
- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Individual component files

### Animations
- Animation utilities: `app/animations/`
- Blobity configuration: `app/utils/BlobityConfig.ts`

## 📱 Sections

1. **Hero Section** - Introduction and profile
2. **Work Section** - Portfolio projects
3. **Reviews Section** - Client testimonials
4. **About Section** - Personal information and skills
5. **Contact Section** - Contact form and information
6. **Footer** - Additional links and information

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Vercel Deployment
The project is configured for Vercel deployment with:
- `vercel.json` - Deployment configuration
- Analytics and Speed Insights integration

## 📊 Performance

- **Lighthouse Score**: Optimized for high performance
- **Core Web Vitals**: Optimized for good user experience
- **Image Optimization**: Next.js Image component with WebP format
- **Font Optimization**: Google Fonts with proper loading strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Akshay Borse**
- Frontend Engineer at Oceanmonks
- [LinkedIn](https://www.linkedin.com/in/akshay-borse-069400277/)
- [GitHub](https://github.com/akshayyborse)
- [Twitter](https://x.com/Akshayyborse)
- [Portfolio](https://www.oceanmonks.in/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform
- [FontAwesome](https://fontawesome.com/) - Icons
- [Blobity](https://blobity.dev/) - Cursor effects

---

⭐ If you found this project helpful, please give it a star!
