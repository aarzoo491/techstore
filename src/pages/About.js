import React from 'react';
import '../styles/About.css';

function About() {
  const team = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Chief Product Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop'
    },
  ];

  const milestones = [
    { year: '2020', event: 'TechStore Founded' },
    { year: '2021', event: '10,000+ Happy Customers' },
    { year: '2022', event: 'Expanded Product Range' },
    { year: '2023', event: 'International Shipping' },
    { year: '2024', event: '50,000+ Customers Worldwide' },
    { year: '2025', event: 'New Product Lines Added' },
  ];

  return (
    <div className="about">
      {/* About Hero */}
      <section className="about-hero">
        <h1>About TechStore</h1>
        <p>Your trusted source for premium tech products</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            TechStore was founded in 2020 with a simple mission: to provide customers with the best tech products at the most competitive prices. We believe that everyone deserves access to quality technology without breaking the bank.
          </p>
          <p>
            Our commitment to excellence has made us one of the fastest-growing tech retailers in the industry. We carefully curate every product in our catalog to ensure quality, reliability, and value. Whether you're a casual tech enthusiast or a professional, we have everything you need.
          </p>
          <p>
            With a dedicated team of experts, we continuously update our inventory with the latest and greatest tech products on the market. Our customer service is always ready to help you find the perfect solution.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop"
            alt="About TechStore"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <div className="value-card">
          <span className="value-icon">🎯</span>
          <h3>Our Mission</h3>
          <p>To make premium technology accessible to everyone through competitive pricing and exceptional service.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">✨</span>
          <h3>Quality First</h3>
          <p>We only sell products from trusted brands that meet our strict quality standards.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">🤝</span>
          <h3>Customer Focus</h3>
          <p>Your satisfaction is our priority. We're here 24/7 to support your journey.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">🌍</span>
          <h3>Global Reach</h3>
          <p>We ship worldwide, bringing quality tech products to customers everywhere.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">💡</span>
          <h3>Innovation</h3>
          <p>We constantly innovate to bring you the latest tech solutions and services.</p>
        </div>
        <div className="value-card">
          <span className="value-icon">🔒</span>
          <h3>Trust & Security</h3>
          <p>Your data and transactions are protected with industry-leading security measures.</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>{milestone.year}</h4>
                <p>{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p className="team-intro">Our diverse team of experts is dedicated to bringing you the best tech experience.</p>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose TechStore?</h2>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon">💰</span>
            <h4>Best Prices Guaranteed</h4>
            <p>We match or beat any competitor's price. Get the best deals on premium products.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">🚀</span>
            <h4>Fast & Reliable Shipping</h4>
            <p>Your orders are shipped quickly and safely. Free shipping on orders over $50.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">↩️</span>
            <h4>Easy Returns</h4>
            <p>30-day return policy on all products. No questions asked returns for your peace of mind.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">💳</span>
            <h4>Secure Checkout</h4>
            <p>Industry-leading encryption and security protocols protect your payment information.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">🎁</span>
            <h4>Exclusive Deals</h4>
            <p>Members get access to exclusive discounts and early access to new products.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">📞</span>
            <h4>Expert Support</h4>
            <p>Our tech experts are available 24/7 to answer questions and provide assistance.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <h3>50K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h3>1000+</h3>
          <p>Products</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Satisfaction</p>
        </div>
        <div className="stat">
          <h3>5 Star</h3>
          <p>Rating</p>
        </div>
      </section>
    </div>
  );
}

export default About;
