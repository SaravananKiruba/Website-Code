import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Achievements from "./components/Achievements.tsx";
import Services from "./components/Services.tsx";
import Partners from "./components/Partners.tsx";
import DocumentsRequired from "./components/DocumentsRequired.tsx";
import BookACall from "./components/BookACall.tsx";
import Faq from "./components/Faq.tsx";
import ReferAFriend from "./components/ReferAFriend.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import InsuranceChatbot from "./components/InsuranceChatbot.tsx";

const App: React.FC = () => {
  return (
    <Box>
      <Header />      <Box as="main">
        <Home id="home" />
        <About id="about" />
        <DocumentsRequired id="documents" />
        <Partners id="partners" />
        <Achievements id="achievements" />
        <Services id="services" />
        <BookACall id="book-a-call" />
        <Faq id="faq" />
        <ReferAFriend id="refer" />
        <Testimonials id="reviews" />
        <Contact id="contact" />
      </Box>
      <Footer />
      <WhatsAppButton />
      <InsuranceChatbot />
    </Box>
  );
};

export default App;
