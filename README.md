# LIC Insurance Agent Website

A fully responsive, mobile-friendly website for an LIC Insurance Agent built with React and Chakra UI.

## Features

- 📱 Fully responsive design that works on all devices
- 🎨 Custom branding with LIC's green color palette
- 👨‍💼 Professional sections for agent's services and experience
- 📞 Multiple contact options including click-to-call phone numbers
- 💬 Floating WhatsApp button for instant communication
- 📋 Detailed insurance service information
- 🗂️ FAQ section with collapsible answers
- 📝 Contact form with validation

## Project Structure

```
src/
  ├── components/
  │   ├── Header.tsx       # Sticky navigation with mobile drawer
  │   ├── Hero.tsx         # Home section with agent intro and service cards
  │   ├── About.tsx        # Agent bio and experience
  │   ├── Services.tsx     # Detailed insurance services information
  │   ├── Faq.tsx          # Collapsible FAQ sections
  │   ├── Contact.tsx      # Contact form and information
  │   ├── Footer.tsx       # Website footer with quick links
  │   └── WhatsAppButton.tsx # Floating WhatsApp button
  ├── App.tsx              # Main component that includes all sections
  ├── index.tsx            # Entry point with ChakraProvider
  └── theme.ts             # Custom Chakra UI theme with brand colors
```

## Branding Colors

The website uses a custom green color palette:
- Primary colors: ["#0b7e7f", "#13947d", "#1ba37d", "#20ae7c", "#35bc88"]

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Build for production:
   ```
   npm run build
   ```


The website displays the following agent contact numbers:
- 98434 30099
- 90477 97975
- 82486 33617

## Insurance Services

The website showcases the following insurance services:
- Life Insurance (LIC)
- Health Insurance (Star Health)
- Car Insurance
- Bike Insurance
- Travel Insurance
- Building Insurance

## Technologies Used

- React
- TypeScript
- Chakra UI
- React Icons