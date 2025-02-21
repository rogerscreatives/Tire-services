# Tire Services Website

A modern, responsive tire services website built with Next.js 13, TypeScript, and Tailwind CSS. This website provides information about tire services, repairs, and maintenance.

## 🚀 Live Demo

Visit the live website: [Tire Services](https://tire-services.pages.dev/)

## ✨ Features

- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark Mode Support
- ⚡ Fast Page Loading with Next.js
- 🖼️ Optimized Image Loading
- 🎯 SEO Optimized
- 📊 Progress Bar Navigation
- 💫 Smooth Animations

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**:
  - [Radix UI](https://www.radix-ui.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 📦 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── about/          # About Page
│   ├── contact/        # Contact Page
│   ├── services/       # Services Page
│   └── layout.tsx      # Root Layout
├── components/         # Reusable Components
├── containers/         # Page Sections
├── lib/               # Utilities & Configurations
└── styles/            # Global Styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.1 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rogerscreatives/Tire-services.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To create a production build:

```bash
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

### Next.js Configuration

The project uses custom Next.js configuration in `next.config.js`:

- Static site export
- Image optimization
- Remote pattern allowlist
- Trailing slash configuration

## 📝 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Quality

The project uses:

- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- lint-staged for staged files linting

## 🌐 Deployment

The website is deployed on Cloudflare Pages with the following configuration:

- **Build Command**: `npm ci && npm run build`
- **Output Directory**: `out`
- **Environment Variables**:
  - `NODE_VERSION`: 18.17.1
  - `NODE_ENV`: production
  - `CI`: true
  - `NEXT_TELEMETRY_DISABLED`: 1

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- RT Tire and Brakes

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Cloudflare for hosting and deployment
- All open-source contributors

---

Made with ❤️ by RT Tire and Brakes
