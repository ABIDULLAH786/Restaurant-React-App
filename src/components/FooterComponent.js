import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Nisar Ahmed Siddiqui Road
                            <br />
                            Sukkur, Sindh
                            <br />
                            PAKISTAN
                            <br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 XXXX<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 XXXX<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:abidullah.se@gmail.com">abidullah.se@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-google" href="https://www.google.com/search?q=ABIDULLAH786"><i className="fa fa-google-plus"></i></a>
                            <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-linkedin mx-1" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-twitter" href="https://twitter.com/Abidullah_786"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-github mx-1" href="https://github.com/ABIDULLAH786/"><i className="fa fa-github"></i></a>
                            <a target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-vk" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2022 <a className='text-dark' href="https://dev.to/abidullah786" target="_blank" rel="noopener noreferrer">@ABIDULLAH786</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;