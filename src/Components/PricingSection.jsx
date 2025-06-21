import React, { useState } from 'react';
import './PricingSection.css';

export default function PricingSection() {
  const [plan, setPlan] = useState('monthly');

  return (
    <div className="pricing-container">
      <p className="pricing-subtitle">PRICING PLAN</p>
      <h2 className="pricing-title">Choose your pricing policy</h2>
      <div className="toggle-buttons">
        <button className={plan === 'monthly' ? 'active' : ''} onClick={() => setPlan('monthly')}>Monthly Plan</button>
        <button className={plan === 'annual' ? 'active' : ''} onClick={() => setPlan('annual')}>Annual Plan</button>
      </div>

      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="card">
          <h3>Free Plan</h3>
          <p>For Small teams or office</p>
          <ul>
            <li>✅ Ultimate access to all course, exercises and assessments</li>
            <li>✅ Free acess for all kind of exercise corrections with downloads.</li>
            <li>✅ Total assessment corrections with free download access system</li>
            <li>❌ Unlimited download of courses on the mobile app contents</li>
            <li>❌ Download and print courses and exercises in PDF</li>
          </ul>
          <button className="btn btn-outline">Start free trail</button>
        </div>

        {/* Premium Plan */}
        <div className="card premium">
          <span className="badge">Recommended</span>
          <h3>Premium</h3>
          <p>For startup enterprise</p>
          <h2 className="price">49.99/mo</h2>
          <ul>
            <li>✅ Ultimate access to all course, exercises and assessments</li>
            <li>✅ Free acess for all kind of exercise corrections with downloads.</li>
            <li>✅ Total assessment corrections with free download access system</li>
            <li>✅ Unlimited download of courses on the mobile app contents</li>
            <li>✅ Download and print courses and exercises in PDF</li>
          </ul>
          <button className="btn btn-filled">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}
