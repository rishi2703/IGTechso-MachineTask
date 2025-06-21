import React from 'react';
import './StepSection.css'

const steps = [
  {
    number: '01',
    title: 'Set disbursement Instructions',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    number: '02',
    title: 'Assembly retrieves funds from your account',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    number: '03',
    title: 'Assembly initiates disbursement',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    number: '04',
    title: 'Customer receives funds payment',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  }
];

export default function StepsSection() {
  return (
    <div className="steps-container">
      <p className="steps-subtitle">WHAT’S THE FUNCTION</p>
      <h2 className="steps-title">Let’s see how it works</h2>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-box">
            <div className="step-circle">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
