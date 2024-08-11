import { useNavigate } from "react-router-dom";
import "./Login.css"
import AdbIcon from '@mui/icons-material/Adb';

export default function Login(){
    const navigate = useNavigate();
    return<>
        <div className="container-fluid ">
            <div className="row login-screen d-flex justify-content-center align-items-center p-xl-5 vh-100">
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
                            <label htmlFor="mail" className="pricing-highlighter">Registered Mail ID :</label>
                            <input type="email" id="mail" className="login-input p-2 mb-2" />
                            <label htmlFor="pwd" className="pricing-highlighter">Password :</label>
                            <input type="password" id="pwd" className="login-input p-2 mb-2" />
                            <button type="submit" className="my-3 p-2 login-button ">Login</button>
                            <p className="m-0 pricing-highlighter">Not a Registered User? <span className="">Sign Up to Register!</span></p>
                            <button className="my-3 p-2 login-button" onClick={()=>navigate("/signup")}>Sign Up</button>
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