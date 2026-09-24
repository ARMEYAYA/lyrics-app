import { useNavigate } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
    
    const navigate = useNavigate();

    return(
        <div className="SignUpPage">
            <div className="SignUpContainer">
                <form className="SignUpForm">
                    <input className='usernameSignUp' type="text" />
                    <input className='PasswordSignUp' type="text" />
                    <input className='ConfirmPasswordSignUp' type="text" />
                    <button className='SignUp-btn'>Sign Up</button>
                </form>
                    <hr className='Seperator'/>
                    <button className='back-btn' onClick={() => navigate('/')}>Back</button>
            </div>
        </div>
    )
}

export default SignUp;