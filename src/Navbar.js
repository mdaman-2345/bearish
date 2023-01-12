import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function Navbar() {
    return (
        <>
            <h4 className="navbar2 headin">MY WORK</h4>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar2">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Feed
                                </a>
                                <ul className="dropdown-menu siz">
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs,</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />Your chosen number of paragraphs will instantly appear.</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />We created the Random Paragraph Generator </a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs, you've come.</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Unreed Mail
                                </a>
                                <ul className="dropdown-menu siz">
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs,</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />Your chosen number of paragraphs will instantly appear.</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />We created the Random Paragraph Generator </a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs, you've come.</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Upcoming Calls
                                </a>
                                <ul className="dropdown-menu siz">
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs,</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />Your chosen number of paragraphs will instantly appear.</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />We created the Random Paragraph Generator </a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs, you've come.</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    To do
                                </a>
                                <ul className="dropdown-menu siz">
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs,</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />Your chosen number of paragraphs will instantly appear.</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />We created the Random Paragraph Generator </a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"><ControlPointIcon />If you're looking for random paragraphs, you've come.</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;