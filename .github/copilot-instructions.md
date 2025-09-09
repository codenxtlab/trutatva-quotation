# Copilot Instructions for CodeNXT Quotation Website

## Project Overview
This is a professional quotation website for CodeNXT brand, built as a static site for GitHub Pages hosting. The site replaces traditional PDF quotations with an interactive, branded web experience that clients can access via URL.

## Architecture & Technology Stack
- **Pure Web Technologies**: HTML5, CSS3, Vanilla JavaScript only (no frameworks)
- **CSS Architecture**: CSS variables for theming, CSS Grid/Flexbox for layouts
- **Component Structure**: Modular sections (header, packages, services, terms, CTA, footer)
- **Responsive Strategy**: Mobile-first design with breakpoints at 480px, 768px, 1024px, 1200px

## Brand Guidelines (Critical)
The CodeNXT brand identity is strictly defined:
```css
--primary-blue: #1E40AF    /* Main brand color */
--accent-blue: #3B82F6     /* Interactive elements */
--light-blue: #EFF6FF      /* Backgrounds */
--dark-blue: #1E3A8A       /* Text/headers */
```
Typography: Inter font family with weights 300-700. Always maintain these exact color values and professional styling.

## Key Development Patterns

### CSS Organization
- All colors use CSS variables from `:root` in `styles.css`
- Responsive styles are separated in `responsive.css`
- Component-based CSS with `.component-name` structure
- Consistent spacing using `--spacing-*` variables

### JavaScript Structure
- Main functionality in `main.js` with initialization pattern
- Modular functions: `initPackageSelection()`, `initSmoothScrolling()`, etc.
- Event delegation for dynamic elements
- Intersection Observer for scroll animations

### Package Card Pattern
Each package follows this structure:
```html
<div class="package-card [recommended]">
  <div class="package-header">...</div>
  <div class="package-price">...</div>
  <div class="package-features">...</div>
  <div class="package-tech">...</div>
  <div class="package-timeline">...</div>
  <button class="package-btn">...</button>
</div>
```

## Critical Workflows

### Content Updates
- Client info: Update `[Client Company Name]` and `[Project Title]` in `index.html`
- Pricing: Modify `.amount` values and package features
- Contact details: Update footer and modal contact information

### GitHub Pages Deployment
```bash
git add .
git commit -m "Update quotation content"
git push origin main
```
Site auto-deploys to `https://username.github.io/repository-name`

### Brand Customization
When adapting for different clients, only modify:
- Client-specific content in HTML
- Contact information
- Package pricing/features
- Never change CodeNXT brand colors or core styling

## Interactive Features
- **Package Selection**: Visual feedback with `.selected` class and temporary button state changes
- **Contact Modal**: Triggered by CTA buttons, includes form validation
- **Service Selection**: Toggle `.selected` class on `.service-item` elements
- **Smooth Scrolling**: Programmatic navigation between sections

## Performance Requirements
- Images must be optimized (SVG preferred for logos/icons)
- CSS/JS should remain unminified for easy editing
- Intersection Observer for scroll animations to improve performance
- Print styles included for PDF generation

## Mobile-First Approach
All new features must be designed mobile-first with these considerations:
- Touch-friendly button sizes (min 48px)
- Readable text without zoom
- Simplified layouts for narrow screens
- Collapsible sections for complex content

## Accessibility Standards
- Semantic HTML structure required
- Keyboard navigation for all interactive elements
- ARIA labels for screen readers
- Color contrast ratios meet WCAG AA standards
- Focus indicators on all interactive elements

## File Naming Conventions
- Use kebab-case for CSS classes: `.package-card`, `.cta-button`
- Use camelCase for JavaScript functions: `initPackageSelection()`
- Use descriptive file names: `responsive.css`, `main.js`

## Common Modifications
When updating quotations:
1. Client details in header section
2. Package pricing in `.package-price .amount`
3. Timeline values in `.timeline-value`
4. Contact information in footer
5. Quote reference number and validity date

Never modify the core CodeNXT branding, color scheme, or fundamental layout structure.
