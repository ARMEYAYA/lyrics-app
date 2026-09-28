import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSetemail(e){
        setEmail(e.target.value);
    };

    function handleSetPassword(e){
        setPassword(e.target.value);
    };

    function handleSetConfirmPassword(e){
        setConfirmPassword(e.target.value);
    };

    async function handleSignUp(e){
        e.preventDefault();

        const response = await fetch(
            'http://localhost:5000/api/signup',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    confirmPassword
                })
            })
        
        const data = await response.json()
        console.log(data);
    };


    const navigate = useNavigate();

    return(
        <div className="SignUpPage">
            <div className="SignUpContainer">
                <form className="SignUpForm" onSubmit={handleSignUp}>
                    <input className='usernameSignUp' type="text" onChange={handleSetemail}/>
                    <input className='PasswordSignUp' type="text" onChange={handleSetPassword}/>
                    <input className='ConfirmPasswordSignUp' type="text" onChange={handleSetConfirmPassword}/>
                    <button className='SignUp-btn'>Sign Up</button>
                </form>
                    <hr className='Seperator'/>
                    <button className='back-btn' onClick={() => navigate('/')}>Back</button>
            </div>
        </div>
    )
}

export default SignUp;