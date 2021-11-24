import React,{useState} from 'react'
import SocialButton from "./SocialButton"; 
//import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
export default function SocialLogin(props) {
    let [email, setEmail] = useState(0);
    let [uname, setUname] = useState(0);
   // const navigate=useNavigate()
    const handleSocialLogin = (user) => {
        console.log(user);
        setEmail(user._profile.email);
        setUname(user._profile.name);
      // navigate('/dashboard')
      };
      
      const handleSocialLoginFailure = (err) => {
        console.error(err);
       
      };
    return (
        <Container fluid style={{backgroundColor:"lightblue",height:800}}>
            <h2 className="pt-4">Social login</h2>
            <SocialButton
      provider="facebook"
      appId="1050755129046065"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
      variant="danger"
      style={{marginTop:100}}
    >
      Login with Facebook
    </SocialButton>
    <SocialButton
      provider="google"
      appId="1061401315399-d3jlfpd3c4phv7so9a5aqabcen8qp2ge.apps.googleusercontent.com"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
      variant="primary"
      style={{marginTop:100}}
    >
      Login with Gmail
    </SocialButton>
    {uname!=0 && <h2>Name: {uname}</h2>}
    {email!=0 && <h2>Email: {email}</h2>}
        </Container>
    )
}
