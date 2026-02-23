import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    amount: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success / error

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.amount) {
      setMessage("Please fill in all fields");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage('');
    setMessageType('');

    try {
      const response = await axios.post(
        "/.netlify/functions/pay-now",
        {
          email: formData.email,
          amount: formData.amount
        }
      );

      setMessage(response.data?.message || "Payment submitted successfully!");
      setMessageType("success");

      // Save data to show in success section
      setSubmittedData({
        email: formData.email,
        amount: formData.amount
      });

      // Reset form
      setFormData({ email: "", amount: "" });

    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
      setMessageType("error");

    } finally {
      setLoading(false);
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

          {/* SUCCESS SCREEN */}
          {messageType === "success" && submittedData ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Payment Successful!</h2>
              <p>Thank you for your purchase</p>
              <p className="success-details">
                A confirmation email has been sent to <strong>{submittedData.email}</strong>
              </p>
              <p className="amount-paid">Amount Paid: <strong>${submittedData.amount}</strong></p>
            </div>
          ) : (
            /* FORM */
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

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Processing..." : "Complete Purchase"}
              </button>

              {message && (
                <p className={`form-msg ${messageType}`}>
                  {message}
                </p>
              )}

              <p className="security-note">
                🔒 Your payment information is secure and encrypted
              </p>
            </form>
          )}
        </div>

        {/* SECURITY FEATURES */}
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
