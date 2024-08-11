import { Link } from "react-router-dom";
import "./Login.css"
import AdbIcon from '@mui/icons-material/Adb';

export default function Register(){
    return<>
        <div className="container-fluid">
            <div className="row  login-screen d-flex justify-content-center align-items-center p-xl-5 vh-100">
                <div className="row p-3 w-100 login-row d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div className='d-md-none mb-md-3 mb-2 d-flex justify-content-md-end justify-content-sm-center justify-content-center align-items-center'>
                        <AdbIcon className='mx-1 nav-logo' fontSize='large' />
                        <h5 className='m-0'>Hari HR Recruit App</h5>
                    </div>
                    <div className="p-3 col-md-6 d-flex align-items-center flex-column login-form">
                        <div className='mb-md-3 mb-2 d-md-flex d-none justify-content-md-end justify-content-sm-center justify-content-center align-items-center'>
                            <AdbIcon className='mx-1 nav-logo' fontSize='large' />
                            <h5 className='m-0'>Hari HR Recruit App</h5>
                        </div>
                        <form method="post" action="#" className="d-flex flex-column w-100 form">
                            <div className="row d-flex">
                                <div className="col-lg-6 col-12 d-flex flex-column">
                                    <label htmlFor="first-name" className="pricing-highlighter">First Name :</label>
                                    <input type="text" id="first-name" className="login-first-name p-2 mb-2" />
                                </div>
                                <div className="col-lg-6 col-12 d-flex flex-column">
                                    <label htmlFor="last-name" className="pricing-highlighter">Last Name :</label>
                                    <input type="text" id="last-name" className="login-last-name p-2 mb-2" />
                                </div>
                            </div>
                            <label htmlFor="mail" className="pricing-highlighter">Your Mail Address :</label>
                            <input type="email" id="mail" className="login-input p-2 mb-2" />
                            <label htmlFor="pwd" className="pricing-highlighter">Password :</label>
                            <input type="password" id="pwd" className="login-input p-2 mb-2" />
                            <div className="register-role col-12 d-flex py-2 p-0">
                                <p className="pricing-highlighter m-0 mr-2 d-sm-block d-none">I am a : </p>
                                <div className="d-flex align-items-center mx-2 reg-radio">
                                    <label htmlFor="register-emp" className="pricing-highlighter login-radio m-0">Employer</label>
                                    <input type="radio" name="radio" id="register-emp" className="p-2 mx-2 input-radio" value="employer" />
                                </div>
                                <div className="d-flex align-items-center mx-3 reg-radio">
                                    <label htmlFor="register-jb" className="pricing-highlighter m-0 login-radio">Job Seeker</label>
                                    <input type="radio" name="radio" id="register-jb" className="p-2 mx-2 input-radio" value="jobseeker" />
                                </div>
                            </div>
                            <Link className="mt-2 pricing-highlighter" to="#">Terms and Conditions</Link>
                            <button type="submit" className="my-3 p-2 login-button ">Register</button>
                        </form>
                    </div>
                    <div className="login-div-image col-md-6 py-xl-4 d-flex align-items-center justify-content-center">
                        <picture>
                            <source media="(max-width: 1400px) and (min-width : 1200px)" srcSet="loginHrMd.jpg" />
                            <source media="(max-width: 1199px) and (min-width : 992px)" srcSet="loginHrSm.jpg" />
                            <img src="loginHr.jpg" alt="Attracting Job Seekers" className="login-image" />
                        </picture>
                    </div>

                </div>
            </div>
        </div>
    </>
}