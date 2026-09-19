import { useState } from 'react'
import './LoginPage.css'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e){ 
        setPassword(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()

        console.log("SUBMIT TRIGGERED");

        const response = await fetch(
            'http://localhost:5000/api/login',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        )

        const data = await response.json()

        console.log(data)
    }
    return(
        <div className="LoginPage">
            <div className='login-container'>
                <form className="LoginForm" onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' className="username" onChange={handleEmail}/>
                <input type="text" placeholder='Password' className="password" onChange={handlePassword}/>
                <button className="Login-btn" type='submit'>Log In</button>
                <a href="" className="ForgotPassword" >Forgot password?</a>
                <hr className='Seperator'/>
            </form>
                <button className="CreateNewAccount-btn">Create new account</button>
            </div>
        </div>
    )
}

export default LoginPage