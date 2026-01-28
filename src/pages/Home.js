import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'USB-C Cable',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Phone Stand',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop'
    },
  ];

  const moreProducts = [
    {
      id: 5,
      name: 'Portable SSD',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Mechanical Keyboard',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1587829191301-72ec2350bf97?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'USB Hub',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop'
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'Tech Enthusiast',
      text: 'TechStore has the best prices I\'ve found. Fast shipping and excellent customer service!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Developer',
      text: 'Great quality products and very competitive pricing. Highly recommended for all your tech needs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Creative Designer',
      text: 'Love shopping at TechStore! The website is easy to use and they have everything I need.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Business Owner',
      text: 'Reliable supplier for all my office tech needs. The customer support team is extremely helpful!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Zhang',
      role: 'Student',
      text: 'Best prices for students! They offer great discounts and the quality is amazing.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      id: 6,
      name: 'David Johnson',
      role: 'Tech Blogger',
      text: 'Reviewed many tech stores. TechStore stands out for quality, pricing, and service!',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop',
      rating: 5
    },
  ];

  const faqs = [
    {
      id: 1,
      question: 'What is TechStore?',
      answer: 'TechStore is a leading online retailer specializing in premium tech products at competitive prices. We offer a wide range of electronics, accessories, and gadgets from trusted brands.'
    },
    {
      id: 2,
      question: 'How fast is shipping?',
      answer: 'We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Orders over $50 qualify for free standard shipping.'
    },
    {
      id: 3,
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on all products. Items must be in original condition with all accessories included for a full refund.'
    },
    {
      id: 4,
      question: 'Do you offer warranty?',
      answer: 'Yes! All products come with manufacturer\'s warranty. Extended warranty options are also available for select items.'
    },
  ];

  const successStories = [
    {
      id: 1,
      title: 'Saved 40% on Office Setup',
      description: 'John found the perfect bundle for his home office and saved $500 compared to other retailers.',
      icon: '💼',
      savings: '$500'
    },
    {
      id: 2,
      title: 'Quick Delivery for Project',
      description: 'Received urgent tech supplies in 2 days. Critical for her design project deadline.',
      icon: '⚡',
      savings: '2 Days'
    },
    {
      id: 3,
      title: 'Perfect for Gaming Setup',
      description: 'Built complete gaming setup with affordable peripherals without compromise on quality.',
      icon: '🎮',
      savings: 'Best Quality'
    },
    {
      id: 4,
      title: 'Business Bulk Purchase',
      description: 'Company saved thousands on bulk order with dedicated account support.',
      icon: '🏢',
      savings: '$5K+'
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Browse Products',
      description: 'Explore our wide range of quality tech products across all categories.',
      icon: '🔍'
    },
    {
      step: 2,
      title: 'Add to Cart',
      description: 'Select your favorite items and add them to your shopping cart.',
      icon: '🛒'
    },
    {
      step: 3,
      title: 'Secure Checkout',
      description: 'Complete your purchase with our secure, encrypted payment system.',
      icon: '🔐'
    },
    {
      step: 4,
      title: 'Fast Shipping',
      description: 'Get your products delivered quickly to your doorstep.',
      icon: '📦'
    },
    {
      step: 5,
      title: 'Customer Support',
      description: 'Our team is always available if you need any assistance.',
      icon: '💬'
    },
    {
      step: 6,
      title: 'Enjoy & Share',
      description: 'Enjoy your purchase and share your experience with us!',
      icon: '😊'
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Price Guarantee',
      description: 'We match or beat any competitor\'s price. If you find a better deal, we\'ll match it.',
      icon: '💰'
    },
    {
      id: 2,
      title: 'Expert Selection',
      description: 'Our team hand-picks every product to ensure quality and reliability.',
      icon: '✨'
    },
    {
      id: 3,
      title: 'Fast Shipping',
      description: 'Free shipping on orders over $50. Express options available.',
      icon: '🚀'
    },
    {
      id: 4,
      title: 'Easy Returns',
      description: '30-day hassle-free returns. No questions asked refund policy.',
      icon: '↩️'
    },
    {
      id: 5,
      title: '24/7 Support',
      description: 'Our customer service team is always ready to help you out.',
      icon: '🎧'
    },
    {
      id: 6,
      title: 'Authentic Products',
      description: '100% genuine products directly from authorized manufacturers.',
      icon: '✔️'
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TechStore</h1>
          <p>Discover amazing tech products at unbeatable prices</p>
          <Link to="/checkout" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <span className="feature-icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature">
          <span className="feature-icon">💰</span>
          <h3>Best Prices</h3>
          <p>Guaranteed lowest prices</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🛡️</span>
          <h3>Secure Payment</h3>
          <p>100% safe transactions</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⭐</span>
          <h3>24/7 Support</h3>
          <p>Always here to help</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="who-content">
          <div className="who-text">
            <h2>Who We Are</h2>
            <p>
              TechStore is your one-stop destination for premium technology products. Founded in 2020, we've grown to become one of the most trusted online tech retailers, serving over 50,000 happy customers worldwide.
            </p>
            <p>
              Our mission is simple: to make cutting-edge technology accessible to everyone at unbeatable prices. We carefully curate every product in our catalog, working directly with manufacturers to ensure quality and affordability.
            </p>
            <p>
              Whether you're a tech enthusiast, professional, or casual user, we have the right products and expertise to meet your needs.
            </p>
            <Link to="/about" className="learn-more-btn">
              Learn More About Us →
            </Link>
          </div>
          <div className="who-image">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" 
              alt="TechStore Team"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <span className="category-icon">🎧</span>
            <h3>Audio</h3>
            <p>Headphones, Speakers & More</p>
          </div>
          <div className="category-card">
            <span className="category-icon">⌨️</span>
            <h3>Accessories</h3>
            <p>Cables, Hubs & Stands</p>
          </div>
          <div className="category-card">
            <span className="category-icon">💻</span>
            <h3>Computing</h3>
            <p>Storage & Input Devices</p>
          </div>
          <div className="category-card">
            <span className="category-icon">⌚</span>
            <h3>Wearables</h3>
            <p>Smart Watches & Bands</p>
          </div>
        </div>
      </section>

      {/* More Products Section */}
      <section className="more-products-section">
        <h2>New Arrivals</h2>
        <div className="products-grid">
          {moreProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <p className="testimonials-subtitle">Join thousands of satisfied customers</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                  <div className="stars">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="trust-badges">
        <h2>Trusted by Thousands</h2>
        <div className="badges-grid">
          <div className="badge">
            <span className="badge-icon">✓</span>
            <h4>100% Authentic</h4>
            <p>All products are 100% genuine</p>
          </div>
          <div className="badge">
            <span className="badge-icon">🔒</span>
            <h4>Secure Shopping</h4>
            <p>SSL encrypted transactions</p>
          </div>
          <div className="badge">
            <span className="badge-icon">📦</span>
            <h4>Fast Delivery</h4>
            <p>Quick & reliable shipping</p>
          </div>
          <div className="badge">
            <span className="badge-icon">💯</span>
            <h4>Satisfaction Guaranteed</h4>
            <p>30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="how-subtitle">Simple steps to get your tech products delivered</p>
        <div className="how-grid">
          {howItWorks.map((item) => (
            <div key={item.step} className="how-card">
              <div className="how-number">{item.step}</div>
              <span className="how-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <h2>Success Stories from Our Customers</h2>
        <p className="success-subtitle">Real results from real customers like you</p>
        <div className="success-grid">
          {successStories.map((story) => (
            <div key={story.id} className="success-card">
              <span className="success-icon">{story.icon}</span>
              <h4>{story.title}</h4>
              <p>{story.description}</p>
              <div className="success-metric">{story.savings}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Extended Section */}
      <section className="why-choose-extended">
        <h2>Why Choose TechStore?</h2>
        <div className="why-grid">
          {whyChooseUs.map((reason) => (
            <div key={reason.id} className="why-item">
              <span className="why-item-icon">{reason.icon}</span>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Results Section */}
      <section className="real-results">
        <h2>By The Numbers</h2>
        <div className="results-grid">
          <div className="result-card">
            <h3>50,000+</h3>
            <p>Satisfied Customers</p>
            <span className="result-detail">Growing every day</span>
          </div>
          <div className="result-card">
            <h3>$2M+</h3>
            <p>Total Savings</p>
            <span className="result-detail">For our customers</span>
          </div>
          <div className="result-card">
            <h3>1,000+</h3>
            <p>Premium Products</p>
            <span className="result-detail">Carefully curated</span>
          </div>
          <div className="result-card">
            <h3>4.9★</h3>
            <p>Average Rating</p>
            <span className="result-detail">Out of 5 stars</span>
          </div>
        </div>
      </section>

      {/* Customer Benefits Section */}
      <section className="customer-benefits">
        <h2>What You Get When You Shop With Us</h2>
        <div className="benefits-container">
          <div className="benefit-group">
            <h3>💳 Flexible Payment</h3>
            <ul className="benefit-list">
              <li>✓ Multiple payment methods</li>
              <li>✓ Installment options available</li>
              <li>✓ Secure & encrypted checkout</li>
              <li>✓ Money-back guarantee</li>
            </ul>
          </div>
          <div className="benefit-group">
            <h3>📦 Smart Shipping</h3>
            <ul className="benefit-list">
              <li>✓ Free shipping on $50+ orders</li>
              <li>✓ Express delivery options</li>
              <li>✓ Real-time tracking</li>
              <li>✓ Insured shipments</li>
            </ul>
          </div>
          <div className="benefit-group">
            <h3>🛡️ Complete Protection</h3>
            <ul className="benefit-list">
              <li>✓ Manufacturer warranty included</li>
              <li>✓ Extended warranty options</li>
              <li>✓ 30-day return policy</li>
              <li>✓ Damage protection</li>
            </ul>
          </div>
          <div className="benefit-group">
            <h3>👥 Expert Support</h3>
            <ul className="benefit-list">
              <li>✓ 24/7 customer support</li>
              <li>✓ Expert product recommendations</li>
              <li>✓ Live chat assistance</li>
              <li>✓ Fast problem resolution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="featured-brands">
        <h2>Trusted Brands We Carry</h2>
        <p className="brands-subtitle">Premium products from the world's leading manufacturers</p>
        <div className="brands-grid">
          <div className="brand-logo">🎧 Sony</div>
          <div className="brand-logo">💻 Apple</div>
          <div className="brand-logo">🔌 Samsung</div>
          <div className="brand-logo">⌨️ Logitech</div>
          <div className="brand-logo">🖱️ Corsair</div>
          <div className="brand-logo">🎮 Razer</div>
          <div className="brand-logo">📱 OnePlus</div>
          <div className="brand-logo">🔋 Anker</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-home-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-accordion">
              <button 
                className={`faq-question ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">{activeTab === index ? '−' : '+'}</span>
              </button>
              {activeTab === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest deals and exclusive offers straight to your inbox!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email..." />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>50K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Products Available</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Satisfaction Guaranteed</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
