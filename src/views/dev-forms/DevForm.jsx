import React, { useState } from 'react';
import { BusinessAccountForm } from './BusinessAccountForm';
import { DomainVerificationForm } from './DomainVerificationForm';
import { UpdateNameserver } from './UpdateNameserver';
import logo from '../../assets/images/auth/logo.png';
import { AdminPanelTemplate } from './AdminPanelTemplate';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    plan: '',
    addOns: [],
    billingType: 'Monthly'
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
      const addOns = checked ? [...prev.addOns, value] : prev.addOns.filter((addon) => addon !== value);
      return { ...prev, addOns };
    });
  };

  const toggleBillingType = () => {
    setFormData((prev) => ({
      ...prev,
      billingType: prev.billingType === 'Monthly' ? 'Yearly' : 'Monthly'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 5) {
      // Final submission logic
      console.log('Form submitted:', formData);
    } else {
      nextStep();
    }
  };

  return (
    <div className="main-wrapper">
      <div className="formParentWrapper" data-step={step}>
        <div className="steps">
          <div className="sidebar-logo">
            <img className="logo" src={logo} alt="Logo" />
          </div>
          {[1, 2, 3, 4, 5].map((num) => (
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
                      ? 'Domain Verification'
                      : num === 3
                        ? 'Update Name Server'
                        : num === 4
                          ? 'Choose Admin Panel Template'
                          : 'Choose Front Theme'}
                </p>
              </div>
              {num < 4 && <div className={`${step === num ? 'active' : ''}`}></div>}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rightSectionParent">
          <div className="rightSectionWrapper">
            <div className={`formContainer ${step === 1 ? '' : 'hide'}`} data-step="1">
              <BusinessAccountForm onChange={handleInputChange} formData={formData} />
            </div>

            <div className={`formContainer ${step === 2 ? '' : 'hide'}`} data-step="2">
              <DomainVerificationForm onChange={handleInputChange} formData={formData} />
            </div>

            <div className={`formContainer ${step === 3 ? '' : 'hide'}`} data-step="3">
              <UpdateNameserver onChange={handleInputChange} formData={formData} />
            </div>

            <div className={`formContainer ${step === 4 ? '' : 'hide'}`} data-step="4">
              <AdminPanelTemplate onChange={handleInputChange} formData={formData} />
            </div>
          </div>

          <div className="btnWrapper mt-3">
            <p className={`prev ${step === 1 ? 'hideBtn' : ''}`} onClick={prevStep}>
              <a href="#">
                <i className="fas fa-arrow-left"></i> Go Back
              </a>
            </p>
            <button type={step === 5 ? 'submit' : 'button'} className="btn btn-primary" onClick={step < 5 ? nextStep : undefined}>
              {step === 5 ? 'Finish' : 'Next Step'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
