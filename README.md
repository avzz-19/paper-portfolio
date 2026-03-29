# The Daily Prophet — Avi Shah's Portfolio

A Harry Potter-themed developer portfolio styled as *The Daily Prophet* newspaper. Built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- **Daily Prophet theme** — parchment colours, fraktur masthead, newspaper typography, column rules, and ornamental dividers
- **Moving photographs** — WebGL-powered image distortion (OGL flowmap) with sepia-to-colour hover reveal
- **Horizontal filmstrip** — auto-scrolling certificate gallery with sprocket holes and lightbox
- **Owl Post contact form** — EmailJS-powered form with "Dispatch Owl" sending
- **Single-page scroll** — all sections (Home, Work, About, Contact) on one page with IntersectionObserver-based active nav
- **Breaking news ticker** — scrolling marquee on the cover page
- **Responsive** — adapts gracefully from mobile to desktop

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + custom CSS design system |
| UI Components | shadcn-ui / Radix UI |
| WebGL | OGL (flowmap image distortion) |
| Email | EmailJS (`@emailjs/browser`) |
| Fonts | UnifrakturMaguntia, Playfair Display, Gideon Roman |

## Getting Started

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file in the root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx        # Sticky navbar with scroll-spy
│   ├── Footer.tsx            # Newspaper colophon footer
│   ├── CertificateBoard.tsx  # Auto-scrolling filmstrip gallery
│   └── flowmap/              # OGL WebGL flowmap distortion
├── pages/
│   ├── Home.tsx              # Front page cover
│   ├── Work.tsx              # Career chronicle
│   ├── About.tsx             # Education, skills, hobbies
│   └── Contact.tsx           # Owl Post form
└── index.css                 # Design system — all custom classes
```
