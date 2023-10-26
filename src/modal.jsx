import React from "react";
import './modal.css'
import Sopwer from './assets/sopwer.png'

const Modal = ({ open,onClose }) => {
    if(!open) return null; 
    return (
        
        <div className="overlay" onClick={onClose}>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="sidenav">
                <div className="profile">
                    <div>
                        <a href="#"><img src={Sopwer} alt="" /></a>
                    </div>
                    <div>
                        <p className="profileName">Hello :D</p>
                        <p>Sridix Technology</p>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="man">
                        <button className="man-btn">
                            <div></div>
                            <div>Man's</div>
                            <div></div> 
                        </button>
                        <div className="man-container">
                            <a href="#"><span>Sport T-Shirt</span></a>
                            <a href="#"><span>Blazer</span></a>
                            <a href="#"><span>Jeans</span></a>
                            <a href="#"><span>T-Shirt</span></a>
                            <a href="#"><span>Shirt</span></a>
                        </div>
                    </div>
                    <div className="man">
                        <button className="women-btn">
                            <div></div>
                            <div>Women's</div>
                            <div></div> 
                        </button>
                        <div className="man-container">
                            <a href="#"><span>Kurti</span></a>
                            <a href="#"><span>Jeans</span></a>
                            <a href="#"><span>Suite</span></a>
                            <a href="#"><span>Saree</span></a>
                            <a href="#"><span>Top</span></a>
                        </div>
                    </div>
                    <div className="man">
                        <button className="kid-btn">
                            <div></div>
                            <div>Kid's</div>
                            <div></div> 
                        </button>
                        <div className="man-container">
                            <a href="#"><span>Frok</span></a>
                            <a href="#"><span>Suite</span></a>
                            <a href="#"><span>Shirt</span></a>
                        </div>
                    </div>
                    <div className="man">
                        <a href="#">
                            <button>
                                <div></div>
                                <div>Most Popular</div>
                            </button>
                        </a>
                    </div>
                    <div className="man">
                        <a href="#">
                            <button>
                                <div></div>
                                <div>Special Offer</div>
                            </button>
                        </a>
                    </div>
                    <div className="man">
                        <a href="#">
                            <button>
                                <div></div>
                                <div>Privacy Policy</div>
                            </button>
                        </a>
                    </div>
                    <div className="man">
                        <a href="#">
                            <button>
                                <div></div>
                                <div>Share App</div>
                            </button>
                        </a>
                    </div>
                </div>
        
                <div className="logout">
                    <button className="logout-button"><span>Logout</span></button>
                </div>
            </div>
        </div>
    )
}

export default Modal