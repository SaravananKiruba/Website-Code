import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Achievements from "./components/Achievements.tsx";
import Services from "./components/Services.tsx";
import Partners from "./components/Partners.tsx";
import Faq from "./components/Faq.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";

const App: React.FC = () => {
  return (
    <Box>
      <Header />      <Box as="main">
        <Home id="home" />
        <About id="about" />
        <Partners id="partners" />
        <Achievements id="achievements" />
        <Services id="services" />
        <Faq id="faq" />
        <Contact id="contact" />
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  );
};

export default App;
