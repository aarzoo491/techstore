import React, { useState } from 'react';
import '../styles/Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    amount: ''
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
    if (formData.email && formData.amount) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          email: '',
          amount: ''
        });
      }, 3000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="checkout">
      <section className="checkout-hero">
        <h1>Secure Checkout</h1>
        <p>Complete your purchase safely and securely</p>
      </section>

      <section className="checkout-container">
        <div className="checkout-form-wrapper">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Payment Successful!</h2>
              <p>Thank you for your purchase</p>
              <p className="success-details">
                A confirmation email has been sent to <strong>{formData.email}</strong>
              </p>
              <p className="amount-paid">Amount Paid: <strong>${formData.amount}</strong></p>
            </div>
          ) : (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Payment Details</h2>

              <div className="form-section">
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
                  <label htmlFor="amount">Purchase Amount ($) *</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="99.99"
                    step="0.01"
                    min="0"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Complete Purchase
              </button>

              <p className="security-note">
                🔒 Your payment information is secure and encrypted
              </p>
            </form>
          )}
        </div>

        {/* Security Features */}
        <div className="security-features">
          <h3>Why Shop With Us?</h3>
          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <h4>SSL Encrypted</h4>
            <p>All transactions are 256-bit encrypted</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <h4>Verified Secure</h4>
            <p>Certified by trusted payment processors</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <h4>Fraud Protection</h4>
            <p>Advanced fraud detection systems</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <h4>Mobile Safe</h4>
            <p>Safe shopping on all devices</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
