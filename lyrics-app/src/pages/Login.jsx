import './login.css'

function Login(){
    return(
        <div className="LoginPage">
            <form className="LoginForm">
                <input type="text" placeholder="Username" className="userName"/>
                <input type="password" placeholder="Password" className='password'/>

                <button type="submit" className='Login-btn'>Log In</button>

                <a href="" className='forgotPassword'>Forgotten Password?</a>

                <button type="button" className='SignUp-btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default Login