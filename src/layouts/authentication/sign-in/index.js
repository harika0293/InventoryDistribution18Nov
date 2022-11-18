import { useState } from "react";
import { Link } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Alert } from "@mui/material";
import { useUserAuth } from '../../context/user-auth';


function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [number,setNumber] = useState("");
  const [error,setError] = useState("");
  // const {setUpRecaptha} = useUserAuth();
  const getOtp = (e) =>{
    e.preventDefault();
     {/* 
    setError("");
  if(number === "" || number === undefined) 
    return setError("please enter a valid phone number");
    try{
      const response = await setUpRecaptcha(number);
      console.log(response)
    }catch (err){
      setError(err.message)
    }*/}
    console.log(number)
  }
  return (
    <CoverLayout
      image={curved9}
    >
    {error && <Alert variant="danger">{error}</Alert>}
      <SoftBox component="form" role="form" onSubmit={getOtp}>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phone Number
            </SoftTypography>
          </SoftBox>
         <SoftBox >
         <PhoneInput
         required
         defaultCountry="IN"
         value={number}
         onChange={setNumber}
         placeholder="9975357855"
         />
         </SoftBox>
         <SoftBox mt={4}>
         <div id="recaptcha-container"></div>
         </SoftBox>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
        <SoftTypography  component={Link}
        to="/authentication/otp-verification">
        <SoftButton
        type="submit"
         fullWidth style={{backgroundColor:"#0B2F8A",color:"white",boxShadow:"0px 8px 24px -2px rgba(11, 47, 138, 0.6)",borderRadius:"16px"}}>
          Request OTP
          </SoftButton>
        </SoftTypography>
          
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              style={{color:'#0B2F8A'}}
              fontWeight="medium"
            >
              Register
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
