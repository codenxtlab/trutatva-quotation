# CodeNXT Professional Quotation Website

A pixel-perfect, professional quotation website built for CodeNXT brand that can be hosted on GitHub Pages. This website allows clients to view detailed service packages through a simple link, eliminating the need for traditional document sharing.

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/quotation)

## 📋 Features

- **Professional Design**: Clean, modern interface following CodeNXT brand guidelines
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Interactive Packages**: Three service tiers with detailed feature comparisons
- **Additional Services**: Optional add-ons and maintenance packages
- **Professional Presentation**: Complete terms, timeline, and pricing transparency
- **GitHub Pages Ready**: Static files optimized for GitHub Pages hosting
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🎨 Brand Guidelines

### Colors
- **Primary Blue**: #1E40AF (Professional primary)
- **Accent Blue**: #3B82F6 (Secondary actions)
- **Light Blue**: #EFF6FF (Backgrounds)
- **Dark Blue**: #1E3A8A (Text/Headers)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📁 Project Structure

```
quotation-website/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet with CSS variables
│   └── responsive.css      # Responsive design rules
├── js/
│   └── main.js            # Interactive functionality
├── images/
│   ├── logo.svg           # CodeNXT logo
│   └── favicon.svg        # Favicon
└── README.md              # This file
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript**: Vanilla JS for interactions and animations
- **SVG**: Scalable vector graphics for logos and icons

## 📦 Service Packages

### 1. Starter Package - $2,999
- Responsive Website (5 pages)
- Mobile-First Design
- Contact Form Integration
- SEO Optimization
- Google Analytics Setup
- 30 Days Support
- **Timeline**: 2-3 weeks

### 2. Professional Package - $5,999 (Recommended)
- Responsive Website (10 pages)
- Custom CMS Integration
- E-commerce Functionality
- Advanced SEO & Analytics
- Blog System
- Newsletter Integration
- Social Media Integration
- 60 Days Support
- **Timeline**: 4-6 weeks

### 3. Enterprise Package - $12,999
- Custom Web Application
- Advanced Dashboard
- User Management System
- API Development
- Third-party Integrations
- Performance Optimization
- Security Implementation
- 90 Days Support
- **Timeline**: 8-12 weeks

## 🔧 Additional Services

- **Maintenance Package**: $299/month
- **Priority Support**: $199/month
- **Custom Design**: $1,499
- **Performance Boost**: $899

## 🚀 Deployment Instructions

### GitHub Pages Setup

1. **Create Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/client-quotation-[client-name].git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/ (root)" folder
   - Click Save

3. **Access Your Site**:
   - Your site will be available at: `https://your-username.github.io/client-quotation-[client-name]`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## ⚙ Customization Guide

### 1. Update Client Information
Edit the client details in `index.html`:
```html
<span class="value">[Client Company Name]</span>
<span class="value">[Project Title]</span>
```

### 2. Modify Package Pricing
Update pricing in the package cards:
```html
<span class="amount">2,999</span>
```

### 3. Change Contact Information
Update contact details in the footer:
```html
<p>Email: hello@codenxt.com</p>
<p>Phone: +1 (555) 123-4567</p>
```

### 4. Brand Customization
Modify CSS variables in `styles.css`:
```css
:root {
  --primary-blue: #1E40AF;
  --accent-blue: #3B82F6;
  /* ... other variables */
}
```

## 🎯 Interactive Features

- **Package Selection**: Click to select packages with visual feedback
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Contact Modal**: Interactive contact form (demo mode)
- **Additional Services**: Toggle selection for add-on services
- **Mobile Optimizations**: Touch-friendly interactions
- **Accessibility**: Keyboard navigation and screen reader support

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px
- **Large Screens**: 1600px and above (ultra-wide support)

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized page titles and descriptions
- Fast loading performance
- Mobile-first responsive design

## ♿ Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- High contrast ratios
- Focus indicators
- Skip navigation links

## 🎨 Print Styles

The website includes print-optimized styles for generating PDF quotations:
- Clean, professional layout
- Optimized typography
- Hidden interactive elements
- Proper page breaks

## 📊 Performance Optimizations

- CSS and JavaScript minification ready
- Optimized images and SVG graphics
- Lazy loading for images
- Efficient CSS Grid and Flexbox layouts
- Minimal external dependencies

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is created for CodeNXT and is proprietary. Unauthorized copying or distribution is prohibited.

## 🤝 Support

For technical support or customization requests:
- Email: hello@codenxt.com
- Phone: +1 (555) 123-4567

---

**CodeNXT** - Transforming Ideas into Digital Reality
