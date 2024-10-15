import React, { useState } from 'react';
// import './YourStylesheet.css'; // Add your CSS here

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    plan: '',
    addOns: [],
    billingType: 'Monthly',
  });

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 5));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const addOns = checked
        ? [...prev.addOns, value]
        : prev.addOns.filter((addon) => addon !== value);
      return { ...prev, addOns };
    });
  };

  const toggleBillingType = () => {
    setFormData((prev) => ({
      ...prev,
      billingType: prev.billingType === 'Monthly' ? 'Yearly' : 'Monthly',
    }));
  };

  return (
    <div className='container-fluid'>
    <div className="formParentWrapper" data-step={step}>
      <div className="steps">
        {[1, 2, 3, 4,5].map((num) => (
          <div className="stepInfo" key={num}>
            <div className={`step ${step === num ? 'active' : ''}`} data-step={num}>
              {num}
            </div>
            <div>
              <p className="label">STEP {num}</p>
              <p className="info">
                {num === 1
                  ? 'Business Account'
                  : num === 2
                  ? ' Domain Verification'
                  : num === 3
                  ? 'Update Name Server'
                  : 'Choose Admin Panel Template'}
              </p>
            </div>
            {num < 4 && <div className={`${step === num ? 'active' : ''}`}></div>} {/* Vertical Line */}
          </div>
        ))}
        {/* <div className={`step lastStep ${step === 5 ? 'active' : ''}`} data-step="5">
          5
        </div> */}
      </div>

      <div className="rightSectionParent">
        <div className="rightSectionWrapper">
          {/* Step 1: Business Account */}
          <div className={`formContainer ${step === 1 ? '' : 'hide'}`} data-step="1">
            <div className="mainForm">
              <p className="personal">Business Account</p>
              <p className="personalInfo">
                Please provide your name, email address, and phone number.
              </p>
              <div className="form">
                <div className="fieldParent">
                  <div className="labelErrorParent">
                    <label htmlFor="name">Name</label>
                  </div>
                  <input
                    placeholder="e.g. Stephen King"
                    type="text"
                    id="name"
                    name="name"
                    className="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="fieldParent">
                  <div className="labelErrorParent">
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <input
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    id="email"
                    name="email"
                    className="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="fieldParent">
                  <div className="labelErrorParent">
                    <label htmlFor="number">Phone Number</label>
                  </div>
                  <input
                    placeholder="e.g. +1 234 567 890"
                    type="text"
                    id="number"
                    name="number"
                    className="number"
                    value={formData.number}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Domain Verification*/}
          <div className={`formContainer ${step === 2 ? '' : 'hide'}`} data-step="2">
            <div className="mainForm">
              <p className="personal">Domain Verification</p>
              <p className="personalInfo">You have the option of monthly or yearly billing.</p>
              <div className="planParent">
                {/* Plan Selection Logic */}
                {/* Implement plan selection here */}
              </div>

              <div className="planTypeParent">
                <p className={`switchType ${formData.billingType === 'Monthly' ? 'activeType' : ''}`}>
                  Monthly
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    className="pricePlanSlider"
                    onChange={toggleBillingType}
                  />
                  <span className="slider round"></span>
                </label>
                <p className={`switchType ${formData.billingType === 'Yearly' ? 'activeType' : ''}`}>
                  Yearly
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Update Name Server*/}
          <div className={`formContainer ${step === 3 ? '' : 'hide'}`} data-step="3">
            <div className="mainForm">
              <p className="personal">Update Name Server</p>
              <p className="personalInfo">You have the option of monthly or yearly billing.</p>
              <div className="planParent">
                {/* Plan Selection Logic */}
                {/* Implement plan selection here */}
              </div>

              <div className="planTypeParent">
                <p className={`switchType ${formData.billingType === 'Monthly' ? 'activeType' : ''}`}>
                  Monthly
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    className="pricePlanSlider"
                    onChange={toggleBillingType}
                  />
                  <span className="slider round"></span>
                </label>
                <p className={`switchType ${formData.billingType === 'Yearly' ? 'activeType' : ''}`}>
                  Yearly
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="btnWrapper">
          <p className={`prev ${step === 1 ? 'hideBtn' : ''}`} onClick={prevStep}>
            Go Back
          </p>
          <button className="btn btn-primary" onClick={nextStep}>
            {step === 5 ? 'Finish' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MultiStepForm;
