import './NavBar.css'

import profile from '../assets/profile.png'

function NavBar (){
    return(
    <div className='navContainer'>
        <p className='webTitle'>LIRIKA</p>
        <img src={profile} alt="" className='profileImage'/>
    </div>
    )
}

export default NavBar