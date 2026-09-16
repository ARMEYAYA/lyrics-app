import './login.css'

function Login(){
    return(
        <div className="LoginPage">
            <form className="LoginForm">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <button type="submit">Log In</button>

                <a href="">Forgotten Password?</a>

                <button type="button">Sign Up</button>
            </form>
        </div>
    )
}

export default Login