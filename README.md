# Real World Gate - AI-Powered RWA Analytics Platform

A community-powered, data-driven platform offering comprehensive insights into Real World Assets.

## Features

- **AI-Powered Analytics**: Advanced machine learning algorithms analyze vast datasets
- **Comprehensive Data**: Access complete database of real-world asset information
- **Real-Time Insights**: Get instant access to market movements and opportunities
- **Full Page Scroll**: Apple-style vertical slide navigation

## Full Page Scroll Feature

This project includes a custom full-page scroll component that provides an Apple-style vertical slide navigation experience.

### How it works

The `FullPageScroll` component wraps your sections and provides:

- **Smooth scrolling** between full-screen sections
- **Keyboard navigation** (Arrow keys, Page Up/Down, Home/End)
- **Touch/swipe support** for mobile devices
- **Navigation dots** on the right side
- **Progress indicator** on the left side
- **Scroll snap** for precise section alignment

### Usage

```tsx
import FullPageScroll from "@/components/FullPageScroll";

function MyPage() {
  return (
    <FullPageScroll>
      <section id="hero" className="min-h-screen">
        {/* Hero content */}
      </section>
      
      <section id="features" className="min-h-screen">
        {/* Features content */}
      </section>
      
      <section id="about" className="min-h-screen">
        {/* About content */}
      </section>
    </FullPageScroll>
  );
}
```

### Navigation Controls

- **Mouse wheel**: Scroll up/down to navigate sections
- **Arrow keys**: Up/Down arrows to navigate
- **Page Up/Down**: Navigate between sections
- **Home/End**: Jump to first/last section
- **Touch swipe**: Swipe up/down on mobile devices
- **Navigation dots**: Click to jump to specific section

### Customization

The component includes CSS classes for styling:

```css
.fullpage-scroll {
  /* Main container styles */
}

.fullpage-scroll section {
  /* Section styles */
}

/* Navigation dots */
.fullpage-scroll .navigation-dots button {
  /* Dot button styles */
}
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Contact

- Twitter: [@RwgWorld](https://x.com/RwgWorld)
- Discord: [Join our community](https://discord.gg/9U9Uwz458x)
- Telegram: [Join our channel](https://t.me/+b0PITBKd_GczOTRl)
- Email: [team@rwg.world](mailto:team@rwg.world)
