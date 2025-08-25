# 420 Nation Design System

## Design Philosophy

### Steve Jobs-Inspired Minimalism
*"Design is not just what it looks like and feels like. Design is how it works."* - Steve Jobs

Our design system embodies the Apple design philosophy of the early 2000s - clean, functional, and intuitive interfaces that focus on user experience over visual complexity.

### Core Principles

1. **Simplicity Over Complexity**
   - Strip away unnecessary elements
   - Focus on essential functionality
   - Use whitespace strategically

2. **Function Over Form**
   - Every element serves a purpose
   - Design decisions based on user needs
   - Performance-first approach

3. **Consistency & Predictability**
   - Uniform patterns across the platform
   - Consistent interaction models
   - Predictable user journeys

4. **Accessibility & Inclusion**
   - WCAG 2.1 AA compliance
   - Color contrast ratios >4.5:1
   - Keyboard navigation support
   - Screen reader compatibility

---

## Visual Identity

### Brand Colors

#### Primary Palette
```scss
// Green - Cannabis/Nature
$primary-50:  #f0fdf4;   // Very light green
$primary-100: #dcfce7;   // Light green
$primary-500: #22c55e;   // Primary green
$primary-600: #16a34a;   // Dark green
$primary-900: #14532d;   // Very dark green

// Neutral - Sophistication
$neutral-50:  #fafafa;   // Background
$neutral-100: #f5f5f5;   // Light gray
$neutral-200: #e5e5e5;   // Border gray
$neutral-500: #737373;   // Text gray
$neutral-800: #262626;   // Dark text
$neutral-900: #171717;   // Darkest
```

#### Secondary Palette
```scss
// Purple - Wellness/Spirituality  
$purple-500: #8b5cf6;    // Primary purple
$purple-600: #7c3aed;    // Dark purple

// Orange - Energy/Warmth
$orange-500: #f97316;    // Primary orange
$orange-600: #ea580c;    // Dark orange

// Blue - Trust/Professional
$blue-500:  #3b82f6;     // Primary blue
$blue-600:  #2563eb;     // Dark blue
```

#### Semantic Colors
```scss
// Status Colors
$success:  #22c55e;      // Success green
$warning:  #f59e0b;      // Warning amber
$error:    #ef4444;      // Error red
$info:     #3b82f6;      // Info blue
```

### Typography

#### Font Stack
```scss
// Primary Font - Inter (Modern, Clean)
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

// Secondary Font - SF Pro Display (Apple-inspired)
$font-secondary: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;

// Monospace - JetBrains Mono (Code/Data)
$font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;
```

#### Type Scale
```scss
// Headings
$text-5xl:  3.75rem;     // 60px - Hero headings
$text-4xl:  2.25rem;     // 36px - Page headings  
$text-3xl:  1.875rem;    // 30px - Section headings
$text-2xl:  1.5rem;      // 24px - Card headings
$text-xl:   1.25rem;     // 20px - Subheadings

// Body Text
$text-base: 1rem;        // 16px - Body text
$text-sm:   0.875rem;    // 14px - Small text
$text-xs:   0.75rem;     // 12px - Captions
```

#### Font Weights
```scss
$font-light:     300;    // Light text
$font-regular:   400;    // Regular text
$font-medium:    500;    // Medium emphasis
$font-semibold:  600;    // Strong emphasis
$font-bold:      700;    // Bold headings
```

### Spacing System

#### Spacing Scale (8px base unit)
```scss
$space-1:   0.25rem;     // 4px
$space-2:   0.5rem;      // 8px
$space-3:   0.75rem;     // 12px
$space-4:   1rem;        // 16px
$space-5:   1.25rem;     // 20px
$space-6:   1.5rem;      // 24px
$space-8:   2rem;        // 32px
$space-10:  2.5rem;      // 40px
$space-12:  3rem;        // 48px
$space-16:  4rem;        // 64px
$space-20:  5rem;        // 80px
$space-24:  6rem;        // 96px
```

### Layout System

#### Grid System
```scss
// Container Sizes
$container-sm:  640px;   // Mobile
$container-md:  768px;   // Tablet
$container-lg:  1024px;  // Desktop
$container-xl:  1280px;  // Large desktop
$container-2xl: 1536px;  // Extra large

// Breakpoints
$breakpoint-sm:  640px;
$breakpoint-md:  768px;
$breakpoint-lg:  1024px;
$breakpoint-xl:  1280px;
$breakpoint-2xl: 1536px;
```

#### Layout Patterns
```scss
// Page Layouts
.page-container {
  max-width: $container-xl;
  margin: 0 auto;
  padding: 0 $space-4;
}

.section-spacing {
  padding: $space-16 0;
}

.card-spacing {
  padding: $space-6;
}
```

---

## Component Library

### Atomic Design Structure

```
Atoms/
├── Button/
├── Input/
├── Typography/
├── Icon/
└── Badge/

Molecules/
├── SearchBox/
├── ProductCard/
├── UserProfile/
├── NavigationItem/
└── FormField/

Organisms/
├── Header/
├── ProductGrid/
├── StoreCard/
├── CommentSection/
└── CheckoutForm/

Templates/
├── LandingPage/
├── StorePage/
├── UserDashboard/
├── ProductListing/
└── BlogPost/
```

### Core Components

#### Buttons
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  children: ReactNode
}

// Usage Examples
<Button variant="primary" size="lg">Get Started</Button>
<Button variant="outline" size="md" icon={<Search />}>Search</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

#### Button Styles
```scss
.btn {
  @apply inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;

  // Sizes
  &.btn-sm { @apply px-3 py-1.5 text-sm; }
  &.btn-md { @apply px-4 py-2 text-base; }
  &.btn-lg { @apply px-6 py-3 text-lg; }
  &.btn-xl { @apply px-8 py-4 text-xl; }

  // Variants
  &.btn-primary {
    @apply bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500;
  }
  
  &.btn-secondary {
    @apply bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500;
  }
  
  &.btn-outline {
    @apply border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500;
  }
}
```

#### Input Fields
```typescript
interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel'
  label: string
  placeholder?: string
  required?: boolean
  error?: string
  disabled?: boolean
  icon?: ReactNode
}

// Usage
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  required
  error={errors.email}
/>
```

#### Cards
```typescript
interface CardProps {
  variant: 'default' | 'elevated' | 'outlined'
  padding: 'sm' | 'md' | 'lg'
  children: ReactNode
}

// Store Card Example
<Card variant="elevated" padding="lg">
  <StoreImage src={store.image} alt={store.name} />
  <CardContent>
    <h3>{store.name}</h3>
    <p>{store.description}</p>
    <Badge variant="success">{store.rating}</Badge>
  </CardContent>
</Card>
```

---

## User Interface Patterns

### Navigation

#### Primary Navigation
```typescript
const Navigation = () => (
  <nav className="bg-white border-b border-neutral-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <Logo />
        <NavItems />
        <UserMenu />
      </div>
    </div>
  </nav>
)
```

#### Mobile Navigation
- Hamburger menu with slide-out drawer
- Bottom tab navigation for primary actions
- Gesture-based navigation (swipe, pull-to-refresh)

### Content Layouts

#### Landing Page Hero
```scss
.hero {
  background: linear-gradient(135deg, $primary-50 0%, $neutral-50 100%);
  padding: $space-20 0;
  text-align: center;
  
  h1 {
    font-size: $text-5xl;
    font-weight: $font-bold;
    color: $neutral-900;
    margin-bottom: $space-6;
  }
  
  p {
    font-size: $text-xl;
    color: $neutral-600;
    max-width: 600px;
    margin: 0 auto $space-8;
  }
}
```

#### Product Grid
```typescript
const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)
```

### Interactive Elements

#### Hover States
```scss
.interactive {
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
}
```

#### Loading States
```typescript
const LoadingSpinner = ({ size = 'md' }) => (
  <div className={`animate-spin rounded-full border-2 border-primary-200 border-t-primary-500 ${sizeClasses[size]}`} />
)

const LoadingSkeleton = ({ className }) => (
  <div className={`animate-pulse bg-neutral-200 rounded ${className}`} />
)
```

---

## Mobile-First Design

### Responsive Breakpoints
```scss
// Mobile First Approach
.component {
  // Mobile styles (default)
  padding: $space-4;
  font-size: $text-base;
  
  // Tablet and up
  @media (min-width: $breakpoint-md) {
    padding: $space-6;
    font-size: $text-lg;
  }
  
  // Desktop and up
  @media (min-width: $breakpoint-lg) {
    padding: $space-8;
    font-size: $text-xl;
  }
}
```

### Touch-Friendly Design
- Minimum touch target: 44px × 44px
- Adequate spacing between interactive elements
- Swipe gestures for navigation
- Pull-to-refresh functionality

### Progressive Web App (PWA)
- App-like experience on mobile
- Offline functionality for core features
- Push notifications
- Home screen installation

---

## Accessibility Guidelines

### Color & Contrast
- **WCAG AA**: Minimum 4.5:1 contrast ratio for normal text
- **WCAG AAA**: 7:1 contrast ratio for enhanced accessibility
- Color-blind friendly palette
- Never rely on color alone for information

### Keyboard Navigation
```scss
.focus-visible {
  outline: 2px solid $primary-500;
  outline-offset: 2px;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: $neutral-900;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
  
  &:focus {
    top: 6px;
  }
}
```

### Screen Reader Support
```typescript
// Semantic HTML and ARIA labels
const SearchBox = () => (
  <div role="search">
    <label htmlFor="search" className="sr-only">
      Search stores and products
    </label>
    <input
      id="search"
      type="search"
      placeholder="Search..."
      aria-describedby="search-help"
    />
    <div id="search-help" className="sr-only">
      Search for dispensaries and cannabis products in your area
    </div>
  </div>
)
```

---

## Cannabis-Specific Design Considerations

### Age Verification UI
```typescript
const AgeVerificationModal = () => (
  <Modal size="md" className="age-verification">
    <div className="text-center p-8">
      <Icon name="warning" size="xl" className="text-orange-500 mb-4" />
      <h2>Age Verification Required</h2>
      <p>You must be 21 or older to access this site.</p>
      <div className="mt-6 space-x-4">
        <Button variant="primary">I am 21 or older</Button>
        <Button variant="outline">I am under 21</Button>
      </div>
    </div>
  </Modal>
)
```

### Compliance Warnings
```scss
.compliance-warning {
  background: $warning-50;
  border: 1px solid $warning-200;
  border-radius: 8px;
  padding: $space-4;
  margin: $space-4 0;
  
  .warning-icon {
    color: $warning-500;
  }
  
  .warning-text {
    color: $warning-800;
    font-weight: $font-medium;
  }
}
```

### Discreet Design Elements
- Subtle cannabis leaf icons
- Professional color scheme
- Medical/wellness imagery over recreational
- Clean, trustworthy appearance

---

## Animation & Micro-Interactions

### Transition Guidelines
```scss
// Standard Transitions
$transition-fast:   0.15s ease-out;
$transition-base:   0.2s ease-out;
$transition-slow:   0.3s ease-out;

// Page Transitions
.page-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all $transition-base;
}
```

### Loading Animations
```typescript
const LoadingDots = () => (
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce delay-75" />
    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce delay-150" />
  </div>
)
```

### Success States
```scss
.success-checkmark {
  animation: checkmark 0.6s ease-in-out;
  
  @keyframes checkmark {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
}
```

---

## Performance Guidelines

### Image Optimization
```typescript
// Next.js Image component usage
<Image
  src="/store-image.jpg"
  alt="Dispensary storefront"
  width={400}
  height={300}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  priority={isAboveFold}
/>
```

### Code Splitting
```typescript
// Lazy load non-critical components
const StoreMap = lazy(() => import('./StoreMap'))
const ProductReviews = lazy(() => import('./ProductReviews'))

// Usage with Suspense
<Suspense fallback={<LoadingSkeleton />}>
  <StoreMap />
</Suspense>
```

### CSS Optimization
- Utility-first CSS with Tailwind
- Purge unused styles in production
- Critical CSS inlining
- CSS compression and minification

---

## Dark Mode Support

### Color Tokens
```scss
:root {
  // Light mode (default)
  --color-background: #{$neutral-50};
  --color-surface: white;
  --color-text: #{$neutral-900};
  
  [data-theme="dark"] {
    // Dark mode overrides
    --color-background: #{$neutral-900};
    --color-surface: #{$neutral-800};
    --color-text: #{$neutral-100};
  }
}
```

### Component Adaptation
```typescript
const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }
  
  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  )
}
```

---

## Implementation Guidelines

### Design Tokens
```javascript
// tokens.js - Design system tokens
export const tokens = {
  colors: {
    primary: {
      50: '#f0fdf4',
      500: '#22c55e',
      900: '#14532d',
    },
    neutral: {
      50: '#fafafa',
      500: '#737373',
      900: '#171717',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    }
  }
}
```

### Component Documentation
```typescript
/**
 * Primary button component for main actions
 * 
 * @param variant - Visual style variant
 * @param size - Button size
 * @param disabled - Disabled state
 * @param loading - Loading state with spinner
 * @param children - Button content
 * 
 * @example
 * <Button variant="primary" size="lg" loading={isSubmitting}>
 *   Submit Order
 * </Button>
 */
export const Button = ({ variant = 'primary', size = 'md', ...props }) => {
  // Implementation
}
```

### Testing Strategy
```typescript
// Accessibility Testing
describe('Button Component', () => {
  it('has proper ARIA attributes', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
  })
  
  it('meets contrast requirements', () => {
    render(<Button variant="primary">Click me</Button>)
    // Test contrast ratio
  })
})
```

---

## Maintenance & Evolution

### Design System Versioning
- **Major**: Breaking changes to component APIs
- **Minor**: New components or non-breaking enhancements
- **Patch**: Bug fixes and minor improvements

### Design Review Process
1. **Proposal**: New component or pattern proposal
2. **Design**: Visual design and interaction specification
3. **Development**: Component implementation
4. **Testing**: Accessibility and usability testing
5. **Documentation**: Usage guidelines and examples
6. **Release**: Version bump and changelog

### Feedback & Iteration
- Regular design system surveys
- Component usage analytics
- Developer experience feedback
- User testing insights
- Accessibility audits

---

## Conclusion

This design system establishes a solid foundation for the 420 Nation platform, embodying Steve Jobs' design philosophy while meeting modern web standards for accessibility, performance, and user experience. The system should evolve based on user feedback and emerging design trends while maintaining consistency and simplicity.

---

**Document Version:** 1.0  
**Last Updated:** 2025-08-23  
**Next Review:** 2025-09-23  
**Owner:** Design Team  
**Stakeholders:** Product, Engineering, UX Research