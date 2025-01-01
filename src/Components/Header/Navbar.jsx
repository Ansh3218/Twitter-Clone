import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis, faHome, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 nav-container w-[25%] h-full flex items-center flex-col ml-16 max-lg:m-0">
                <div className="nav sticky top-0 h-screen overflow-y-auto scroll-hide">
                    <div className="logo flex max-md:w-40 max-md:justify-center max-[500px]:hidden">
                        <img src="/src/assets/Images/twitter.png" alt="" className="cursor-pointer w-16 ml-3  max-md:m-0" />
                    </div>
                    <nav className='set'>
                        <ul className='max-[500px]:justify-evenly max-[500px]:flex'>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faHome} /><a href="/home" className='link-hide'>Home</a></li>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faSearch} /><a href="/home" className='link-hide'>Explore</a></li>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faBell} /><a href="/home" className='link-hide'>Notifications</a></li>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faMessage} /><a href="/home" className='link-hide'>Messages</a></li>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faUserGroup} /> <a href="/home" className=' ml-[-0.5vw] link-hide'>Communities</a></li>
                            <li className='hover-effect'><img src="/src/assets/Images/x.png" className='icons w-8 invert' alt="" /><a href="/home" className='link-hide ml-[-0.5vw]'>Premium</a></li>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faUser} /><a href="/home" className='link-hide'>Profile</a></li>
                            <li className='hover-effect'><FontAwesomeIcon className='icons' icon={faEllipsis} /><a href="/home" className='link-hide'>More</a></li>
                            <button className='post-btn'>Post</button>
                        </ul>
                    </nav>
                    <div className="profile-section mb-5">
                        <img src="/src/assets/Images/profile.jpg" className='w-10 rounded-full max-[500px]:hidden' alt="" />
                        <div className="profile-name proname pl-3">
                            <h3 className='font-bold'>Ansh Chauhan</h3>
                            <h3 className='text-[#949494]'>@CaCodewith</h3>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Navbar