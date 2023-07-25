import React from 'react'
import '../App.css'
export default function Footer() {
    return (
        <footer className="page-footer footerColor">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">About is Bek Shop </h5>
                        <p className="grey-text text-lighten-4">
                            In our online store, you can order any products you want
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">What can you do with us</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Brend</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Bek shop uzbekistan
                    <a className="grey-text text-lighten-4 right" href="#!">Bek Shop</a>
                </div>
            </div>
        </footer>
    ) 
}
