import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container fluid style={{padding: '60px'}} className="contact-section">
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact