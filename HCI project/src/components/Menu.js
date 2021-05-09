import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="bootstrapMain">
                    <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav" style={{ background: '#000000' }}>
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="#">covid news</a>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item nav-link js-scroll-trigger">
                                        <a className="nav-link active js-scroll-trigger" href="/home">home</a>
                                    </li>
                                    <li className="nav-item nav-link js-scroll-trigger">
                                        <a className="nav-link js-scroll-trigger" href="/vietnam">vietnam</a>
                                    </li>
                                    <li className="nav-item nav-link js-scroll-trigger">
                                        <a className="nav-link js-scroll-trigger" href="/world">world</a>
                                    </li>
                                    <li className="nav-item nav-link js-scroll-trigger">
                                        <a className="nav-link js-scroll-trigger" href="/vaccin">vaccin</a>
                                    </li>
                                    <li className="nav-item nav-link js-scroll-trigger">
                                        <a className="nav-link js-scroll-trigger" href="/download">download</a>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn btn-primary border-dark pull-right" type="button" style={{ backgroundColor: 'red', borderRadius: '10px' }} onclick="openAndClose1()">
                                <i className="fa fa-sign-in" />
                Login
              </button>
                            <button className="btn btn-primary border-dark pull-right" type="button" style={{ backgroundColor: 'green', borderRadius: '10px' }} onclick="openAndClose2()">
                                Sign up
              </button>
                        </div>
                    </nav>
                    <div id="id01" className="modal1">
                        <form className="modal-content1 animate">
                            <div className="imgcontainer">
                                <img src="img/img_avatar.png" alt="Avatar" className="avatar" />
                            </div>
                            <div className="container1">
                                <label htmlFor="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />
                                <button>Login</button>
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: '15px' }} />
                  Remember me
                </label>
                                <a className="haveAA" href="#" style={{ color: 'dodgerblue' }} onclick="openAndClose3()">Forgot password?</a>
                                <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn" style={{ width: '100%' }}>
                                    Cancel
                </button>
                            </div>
                        </form>
                    </div>
                    <div id="id02" className="modal2">
                        <form className="modal-content2 animate">
                            <div className="container2">
                                <h1>Sign Up</h1>
                                <p>Please fill in this form to create an account.</p>
                                <hr />
                                <label htmlFor="email"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="email" required />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />
                                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: '15px' }} />
                  Remember me
                </label>
                                <a className="haveAA" href="#" style={{ color: 'dodgerblue' }} onclick="openAndClose1()">I have an account.</a>
                                <div className="clearfix">
                                    <button type="button" onclick="document.getElementById('id02').style.display='none'" className="cancelbtn">
                                        Cancel
                  </button>
                                    <button type="submit" className="signupbtn">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="id03" className="modal2">
                        <form className="modal-content2 animate">
                            <div className="container2">
                                <h1>Forgotten Password?</h1>
                                <p>
                                    Please enter your login email address to see options for regaining
                                    access to your account.
                </p>
                            </div>
                            <div className="container2">
                                <label htmlFor="uname"><b>Your login email address</b></label>
                                <input type="text" placeholder="Enter email" name="uname" required />
                                <button style={{ width: '100%' }}>Countinue</button>
                                <button type="button" onclick="document.getElementById('id03').style.display='none'" style={{ backgroundColor: '#f44336', width: '100%' }}>
                                    Cancel
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;