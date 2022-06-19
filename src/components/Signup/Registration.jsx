import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import SignUpService from '../../services/SignUpService';
import Organization from './Organization';
import SuperAdmin from './SuperAdmin';

const steps = [{label: 'Enter Group Name', Component: Organization}, {label: 'Enter details of the Super Admin', Component: SuperAdmin}];

export default function Registration() {
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [organizationData, setOrganizationData] = useState({
    name: "",
    paymentAmount: "",
    paymentCycles: 4,
    startDate: "2022-06-19"
  });

  const [superAdminData, setSuperAdminData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const paymentCycles = [
    {
      value: 1,
      label: 'Weekly',
    },
    {
      value: 2,
      label: 'Biweekly',
    },
    {
      value: 3,
      label: 'Triweekly',
    },
    {
      value: 4,
      label: 'Monthly',
    }
  ];

  const handleChangeOrg = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setOrganizationData({...organizationData, [name]: value});
  };

  const handleChangeAdmin = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setSuperAdminData({...superAdminData, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateResponse = validAdminFields();
    if(validateResponse !== "valid"){
      alert("You must specify a value "+validateResponse);
      return;
    }
    SignUpService.register(organizationData, superAdminData);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = event => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if(activeStep === steps.length -1){
      handleSubmit(event);
    }else{
       if(validOrgFields() !== "valid"){
          alert("Please specify your Associations's name.")
          return;
       }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const validAdminFields = () => {
    const {name, email, password, confirmPassword} = superAdminData;
    const _password = password.toString();
    const _confirmPassword = confirmPassword.toString();
    if(name.trim().length === 0) return "Name";
    if(email.trim().length === 0) return "Email";
    if(_password.length === 0) return "Password";
    if(_confirmPassword.length === 0) return "Confirm Password";
    if(_password !== _confirmPassword) return "Password mismatch";
    return "valid";
  }

  
  const validOrgFields = () => {
    const {name, paymentAmount} = organizationData;
    if(name.trim().length === 0) return "Name";
    if(paymentAmount.trim().length === 0) return "Name";
    
    return "valid";
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const getViewComponent = (index) =>{
    const Component = steps[index].Component;
    const handleChangeMethod = index === 0 ? handleChangeOrg : handleChangeAdmin;
    const stateData = index === 0 ? organizationData : superAdminData;
    return <Component handleChange={handleChangeMethod} paymentCycles={index === 0 ? paymentCycles : null} stateData={stateData} />
  }

  const handleLoginView = () => {
    navigate("/login", { replace: true });
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleLoginView}>Login</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getViewComponent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
