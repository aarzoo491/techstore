import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="contact">
      {/* Contact Hero */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </section>

      {/* Contact Container */}
      <section className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">✓</div>
              <h2>Message Sent Successfully!</h2>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>Address</h4>
              <p>123 Tech Street<br />San Francisco, CA 94105<br />United States</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567<br />Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>support@techstore.com<br />sales@techstore.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How long does shipping take?</h4>
            <p>Standard shipping typically takes 5-7 business days. We also offer express shipping for faster delivery.</p>
          </div>
          <div className="faq-item">
            <h4>What's your return policy?</h4>
            <p>We offer a 30-day return policy on all products. Items must be in original condition with all accessories.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer technical support?</h4>
            <p>Yes! Our technical support team is available 24/7 to help you with any product-related questions.</p>
          </div>
          <div className="faq-item">
            <h4>Can I track my order?</h4>
            <p>Absolutely! You'll receive a tracking number via email as soon as your order ships.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
