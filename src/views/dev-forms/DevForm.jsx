import React, { useState } from 'react';
import { BusinessAccountForm } from './BusinessAccountForm';
import { DomainVerificationForm } from './DomainVerificationForm';
import { UpdateNameserver } from './UpdateNameserver';
import logo from '../../assets/images/auth/logo.png';

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
        <div className='sidebar-logo'>
        <img className='logo' src={logo} />
        </div>
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
            
            <BusinessAccountForm/>
           
          </div>

          {/* Step 2: Domain Verification*/}
          <div className={`formContainer ${step === 2 ? '' : 'hide'}`} data-step="2">
           
        <DomainVerificationForm/>
          </div>

          {/* Step 3: Update Name Server*/}
          <div className={`formContainer ${step === 3 ? '' : 'hide'}`} data-step="3">
          
          <UpdateNameserver/>
          </div>
        </div>

        <div className="btnWrapper mt-3">
          <p className={`prev ${step === 1 ? 'hideBtn' : ''}`} onClick={prevStep}>
          <a href="#"><i class="fas fa-arrow-left"></i> Go Back</a>
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
