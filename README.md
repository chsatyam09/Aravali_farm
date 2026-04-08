# Saamreya - Elegant Interior Design Website

A beautiful Next.js website featuring an elegant slideshow homepage with navigation, inspired by luxury interior design aesthetics.

## Features

- **Responsive Navigation Bar**: Clean white navigation with elegant hover effects
- **Auto-Playing Slideshow**: Background images transition every 5 seconds
- **Elegant Typography**: Using Playfair Display for luxury branding
- **Modern Design**: Tailwind CSS for responsive and beautiful styling
- **Logo Integration**: Custom logo design based on the provided Saamreya branding

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Install additional required packages:
```bash
npm install tailwindcss postcss autoprefixer
npm install @next/font
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx` - Main homepage component
- `components/Navigation.tsx` - Navigation bar component
- `components/Slideshow.tsx` - Auto-playing slideshow component
- `app/globals.css` - Global styles and custom CSS
- `tailwind.config.js` - Tailwind CSS configuration

## Customization

- Replace placeholder images in `components/Slideshow.tsx` with your own images
- Modify navigation items in `components/Navigation.tsx`
- Adjust colors and styling in `tailwind.config.js` and `globals.css`

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display, Inter)
