
A modern, responsive portfolio website built with React.js and Tailwind CSS showcasing my skills, experience, and projects as a MERN Stack Developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Animated sections, smooth scrolling navigation
- **Contact Form**: Functional contact form that opens email client
- **Download Resume**: Direct download link for resume
- **SEO Optimized**: Proper meta tags and descriptions
- **Performance**: Fast loading with optimized assets

## 🛠️ Technologies Used

- **Frontend**: React.js 19.1.1
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: Lucide React
- **Animations**: Custom scroll animations
- **Build Tool**: Create React App

## 📋 Sections

1. **Hero Section**: Introduction with contact information
2. **About**: Professional summary and background
3. **Experience**: Detailed work experience at Sofmen Technologies
4. **Skills**: Technical skills organized by category
5. **Projects**: Showcase of key projects with tech stacks
6. **Education**: Academic background and qualifications
7. **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nimish-ghatiya/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimateOnScroll.js    # Scroll animation component
│   ├── ProjectCard.js        # Project display component
│   └── SkillCategory.js      # Skills display component
├── App.js                    # Main application component
├── App.css                   # Application styles
├── index.js                  # Application entry point
└── index.css                 # Global styles

public/
├── index.html               # HTML template
├── favicon.ico              # Website icon
├── manifest.json            # PWA manifest
└── NimishGhatiyaFullStack.pdf  # Resume file
```

## 🎨 Customization

### Personal Information

Update the following in `src/App.js`:

- **Contact Information**: Update email, phone, location
- **Social Links**: Update LinkedIn, GitHub URLs
- **Experience**: Modify work experience details
- **Projects**: Add/remove projects with proper links
- **Education**: Update educational background
- **Skills**: Modify technical skills and categories

### Styling

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the cyan color scheme in className attributes
- **Layout**: Adjust spacing, padding, and margins
- **Typography**: Change font sizes and weights
- **Animations**: Modify transition durations and effects

### Adding New Sections

1. Add the section to the `navLinks` array
2. Create the section JSX with proper ID
3. Add the section reference to `sections.current`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: nimishghatiya12@gmail.com
- **LinkedIn**: [Nimish Ghatiya](https://www.linkedin.com/in/nimish-ghatiya-54a42821b)
- **GitHub**: [nimish-ghatiya](https://github.com/nimish-ghatiya)

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Styling framework by [Tailwind CSS](https://tailwindcss.com/)
- Built with [Create React App](https://create-react-app.dev/) 