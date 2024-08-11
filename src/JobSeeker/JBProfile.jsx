import { useNavigate } from "react-router-dom"


export default function JBProfile(){
    const navigate = useNavigate();

    return<>
        <div className="jbprofile-all h-100 d-flex align-items-center flex-column justify-content-center">
        <div className="jbprofile-pic m-2">
                <label htmlFor="btn-profile">
                    <input type="file" id="btn-profile" style={{ display: 'none' }} />
                    <img src="/hari.png" alt="profile-pic" />
                </label>
                <button style={{ border: 'none', background: 'none', padding: 0 }}>
                    <img src="/hari.png" alt="profile-pic" style={{ visibility: 'hidden', position: 'absolute' }} />
                </button>
            </div>
            <div className="jbprofile-details container-fluid mt-5 text-center">
                <div className="row p-2 d-flex flex-sm-row flex-column align-items-center">
                    <p className="col-sm-4 col-12 p-0">Name</p>
                    <p className="col-2 d-sm-flex d-none p-0">-</p>
                    <p className="col-sm-6 col-12 p-0 pricing-highlighter">Hari Krishnan V K</p>
                </div> 
                <div className="row p-2 d-flex flex-sm-row flex-column align-items-center">
                    <p className="col-sm-4 col-12 p-0">Mobile Number</p>
                    <p className="col-2 p-0 d-sm-flex d-none p-0">-</p>
                    <p className="col-sm-6 col-12 p-0 pricing-highlighter">9655280060</p>
                </div>
                <div className="row p-2 d-flex flex-sm-row flex-column align-items-center">
                    <p className="col-sm-4 col-12 p-0">Mail Address</p>
                    <p className="col-2 p-0 d-sm-flex d-none p-0">-</p>
                    <p className="col-sm-6 col-12 p-0 pricing-highlighter">harikrishnanvk0531@gmail.com</p>
                </div>
                <div className="row p-2 d-flex flex-sm-row flex-column align-items-center">
                    <p className="col-sm-4 col-12 p-0">Status</p>
                    <p className="col-2 p-0 d-sm-flex d-none p-0">-</p>
                    <p className="col-sm-6 col-12 p-0 pricing-highlighter">Verfied Job Seeker</p>
                </div>
            </div>
        </div>
    </>
}