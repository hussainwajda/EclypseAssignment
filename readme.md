# Project Documentation

⚙️ Getting Started
# Clone the repo
git clone https://github.com/hussainwajda/EclypseAssignment.git
cd eclypse/client

# Install dependencies
npm install

# Start development server
npm run dev or vite --host (for non-production)

## Overview

This project is a modern e-commerce website built with Next.js 15, featuring a sophisticated design system with smooth animations, responsive layouts, and interactive components. The application includes a complete shopping experience from product browsing to checkout.

## Tech Stack

### Core Framework

- **React + Vite** – Fast frontend dev environment
- **TypeScript** – Type-safe JavaScript
- **Nodejs** - Backend Server


### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React


### Icons & Assets

- **Lucide React** - Beautiful & consistent icon library


## Project Structure

```bash
src/
├── assets/                 # Images, videos, and fonts
├── components/
│   ├── home/               # Hero, Media Gallery, Customers, Product Grid
│   ├── checkout/           # Address, Payment, Review, Summary
│   ├── layout/             # Header, Footer, Layout wrapper
│   ├── skeleton/           # Loading UI components
│   └── PageScroll.tsx      # Utility for scroll behavior
├── hooks/                  # Custom React hooks
├── pages/                  # Page-level components (e.g. home.tsx, checkout.tsx)
├── App.tsx                 # Main App shell with routes
├── main.tsx                # App entry point
└── vite-env.d.ts           # Vite environment declarations

```

## Component Documentation

### 1. Scroll Header (`scroll-header.tsx`)

**Purpose**: A fixed navigation header that changes appearance on scroll.

**Features**:

- Fixed positioning with smooth background transitions
- Responsive design with mobile menu
- Scroll-triggered backdrop blur effect
- Shopping cart integration


**Props**: None (self-contained component)

**Dependencies**:

- `useState`, `useEffect` from React
- `ShoppingCart` from Lucide React


**Usage**:

```typescriptreact
import ScrollHeader from './scroll-header'

<ScrollHeader />
```

**Key Styling Classes**:

- `fixed top-0` - Fixed positioning
- `backdrop-blur-md` - Blur effect on scroll
- `transition-all duration-300` - Smooth transitions


---

### 2. Media Gallery (`media-gallery.tsx`)

**Purpose**: Displays mixed media content (videos and images) in a responsive grid layout.

**Features**:

- Video autoplay
- Responsive grid layout (desktop: 3 columns, mobile: adaptive)
- Hover effects and smooth transitions
- Video indicators and overlays


**Props**: None (uses internal data array)

**Dependencies**:

- `useState` from React
- `Play`, `Pause` from Lucide React


**Data Structure**:

```typescriptreact
interface MediaItem {
  id: string
  type: "video" | "image"
  src: string
  alt?: string
  poster?: string
}
```

**Usage**:

```typescriptreact
import MediaGallery from './media-gallery'

<MediaGallery />
```

---

### 3. Product Page (`product-page.tsx`)

**Purpose**: Complete product detail page with media switching and size selection.

**Features**:

- Dynamic media switching between video and images
- Size selection with visual feedback
- Add to cart and buy functionality
- Responsive thumbnail grid


**Props**: None (self-contained with internal state)

**Dependencies**:

- `useState` from React
- `Link` from Next.js
- `ChevronRight` from Lucide React


**State Management**:

```typescriptreact
const [mainMedia, setMainMedia] = useState<ProductImage>(productMedia[0])
const [selectedSize, setSelectedSize] = useState<Size | null>(null)
const [isVideoPlaying, setIsVideoPlaying] = useState(false)
```

**Usage**:

```typescriptreact
import ProductPage from './product-page'

<ProductPage />
```

---

### 4. Accordion (`accordion.tsx`)

**Purpose**: Expandable content sections with smooth animations.

**Features**:

- Multiple items can be open simultaneously
- Smooth height and opacity transitions
- Dynamic icon switching (ChevronDown ↔ Minus)
- Keyboard accessibility


**Props**: None (uses internal data array)

**Dependencies**:

- `useState` from React
- `ChevronDown`, `Minus` from Lucide React


**Data Structure**:

```typescriptreact
interface AccordionItem {
  id: string
  title: string
  content: string
}
```

**Animation Classes**:

- `transition-all duration-500 ease-in-out` - Smooth content transitions
- `max-h-0` to `max-h-96` - Height animation
- `opacity-0` to `opacity-100` - Fade effects


---

### 5. Testimonial Carousel (`testimonial-carousel.tsx`)

**Purpose**: Auto-rotating customer testimonials with profile images.

**Features**:

- Auto-rotation every 3 seconds
- Manual navigation via profile image clicks
- Smooth fade and slide transitions
- Active state indicators


**Props**:

```typescriptreact
interface TestimonialCarouselProps {
  // No external props - self-contained
}
```

**Dependencies**:

- `useState`, `useEffect`, `useCallback` from React
- `ChevronLeft` from Lucide React


**Data Structure**:

```typescriptreact
interface Testimonial {
  id: number
  quote: string
  name: string
  location: string
  image: string
}
```

**Key Features**:

- Auto-rotation with cleanup
- Transition prevention during animations
- Responsive profile image sizing


---

### 6. Footer (`footer.tsx`)

**Purpose**: Site footer with navigation, contact info, and back-to-top functionality.

**Features**:

- Responsive grid layout
- Smooth scroll-to-top functionality
- Contact information display
- Copyright and legal links


**Props**: None

**Dependencies**:

- `Link` from Next.js
- `ArrowUp` from Lucide React


**Sections**:

- Logo and branding
- Navigation links
- Contact information
- Back-to-top button


---

### 7. Preloader (`preloader.tsx`)

**Purpose**: Animated loading screen with logo split animation.

**Features**:

- Rotating red line animations
- Logo split effect using Framer Motion
- Progress indicator
- Smooth page reveal


**Props**:

```typescriptreact
interface PreloaderProps {
  onLoadingComplete: () => void
}
```

**Dependencies**:

- `useState`, `useEffect` from React
- `motion`, `AnimatePresence` from Framer Motion


**Animation Sequence**:

1. Rotating lines around logo
2. Progress counter 0-100%
3. Logo split animation
4. Page reveal


**Key Animations**:

```typescriptreact
// Rotating lines
animate={{ rotate: 360 }}
transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

// Logo split
animate={{ x: -30, rotate: -15, opacity: 0 }}
transition={{ duration: 1, ease: "easeInOut" }}
```

---

### 8. Checkout Page (`checkout-page.tsx`)

**Purpose**: Complete checkout flow with address, payment, and order summary.

**Features**:

- Multi-step checkout process
- Form validation and state management
- Payment method selection
- Order summary with pricing breakdown


**Props**: None (self-contained with internal state)

**Dependencies**:

- `useState` from React
- `motion`, `AnimatePresence` from Framer Motion
- Multiple Lucide React icons
- `Link` from Next.js


**State Management**:

```typescriptreact
type CheckoutStep = "address" | "payment" | "review"
const [currentStep, setCurrentStep] = useState<CheckoutStep>("address")
const [formData, setFormData] = useState({...})
```

**Sub-components**:

- `AddressForm` - Shipping address collection
- `PaymentForm` - Payment method selection
- `ReviewOrder` - Final order review
- `OrderSummary` - Price breakdown sidebar


## Styling System

### Tailwind Configuration

The project uses a custom Tailwind configuration with:

**Color Palette**:

- Primary: Black (`bg-black`, `text-black`)
- Secondary: White (`bg-white`, `text-white`)
- Accent: Red (`bg-red-500`, `text-red-500`)
- Grays: Various shades for backgrounds and text


**Custom Classes**:

```css
.duration-600 {
  transition-duration: 600ms;
}
```

**Responsive Breakpoints**:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px


### Animation Patterns

**Framer Motion Variants**:

```typescriptreact
// Fade in from right
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.3 }}

// Scale and fade
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5 }}
```

**CSS Transitions**:

- Standard duration: `300ms`
- Easing: `ease-in-out`
- Hover states: `transition-colors`


## Performance Optimizations

### Image Optimization

- Next.js Image component for automatic optimization
- Placeholder images with proper dimensions
- Lazy loading for off-screen content


### Code Splitting

- Component-level code splitting
- Dynamic imports where appropriate
- Tree shaking with ES modules


### Animation Performance

- Hardware acceleration with `transform` properties
- `will-change` CSS property for smooth animations
- Cleanup of intervals and timeouts


## Accessibility Features

### Keyboard Navigation

- Focus states on all interactive elements
- Tab order management
- Escape key handling for modals


### Screen Reader Support

- Semantic HTML elements
- ARIA labels and roles
- Alt text for images
- Screen reader only text with `sr-only`


### Color Contrast

- High contrast ratios
- Focus indicators
- Color-blind friendly design


## Browser Support

**Supported Browsers**:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+


**Progressive Enhancement**:

- Graceful degradation for older browsers
- Fallbacks for CSS Grid and Flexbox
- JavaScript feature detection


## Development Guidelines

### Code Style

- TypeScript strict mode enabled
- ESLint and Prettier configuration
- Consistent naming conventions
- Component composition patterns


### State Management

- React hooks for local state
- Props drilling for simple data flow
- Context API for global state (if needed)


### Error Handling

- Error boundaries for component errors
- Try-catch blocks for async operations
- User-friendly error messages


## Deployment Considerations

### Environment Variables

- `NEXT_PUBLIC_` prefix for client-side variables
- Secure API keys on server-side only
- Environment-specific configurations


### Build Optimization

- Static generation where possible
- Image optimization enabled
- Bundle analysis for size monitoring


### SEO Optimization

- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Robot.txt configuration


## Future Enhancements

### Potential Improvements

1. **State Management**: Consider Zustand or Redux Toolkit for complex state
2. **Testing**: Add Jest and React Testing Library
3. **Internationalization**: Add next-i18next for multi-language support
4. **Analytics**: Integrate Google Analytics or similar
5. **Performance**: Add service worker for caching
6. **Database**: Integrate with headless CMS or database
7. **Authentication**: Add user authentication system
8. **Payment**: Integrate real payment gateways


### Monitoring

- Error tracking with Sentry
- Performance monitoring
- User analytics
- A/B testing capabilities


---

This documentation provides a comprehensive overview of the project structure, components, and implementation details. Each component is designed to be reusable, accessible, and performant while maintaining a consistent design system throughout the application.