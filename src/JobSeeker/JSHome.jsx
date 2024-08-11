import AdbIcon from '@mui/icons-material/Adb';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HelpIcon from '@mui/icons-material/Help';
import "./JS.css"
import { Route, Routes, useNavigate } from 'react-router-dom';
import JBProfile from './JBProfile';
import JBResume from './JBResume';
import JBMessage from './JBMessage';
import JBHelp from './JBHelp';
import JBApplications from './JBApplications';


const pp = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis gravida nisi. Donec ac odio purus. Curabitur vitae turpis lacus. Integer et auctor ligula. Aliquam a ornare lacus, quis sollicitudin nulla. Nullam lectus nibh, lacinia ac libero vitae, congue placerat massa. Nunc ullamcorper quis eros nec pellentesque. Maecenas in libero ac erat vehicula dignissim. Suspendisse non vestibulum ipsum, sit amet tempus eros. Maecenas in eros nulla. Vestibulum et enim sagittis felis faucibus rutrum. Phasellus sit amet augue pulvinar, accumsan nibh sit amet, volutpat eros. Maecenas vel quam sed sem dignissim tempor. Curabitur lobortis, elit et iaculis imperdiet, massa enim feugiat sem, ac iaculis metus libero vel dolor.
Proin mauris mauris, egestas in hendrerit id, fringilla vel nibh. Fusce egestas nisl sit amet urna semper, vel iaculis ex sodales. Suspendisse gravida iaculis tortor cursus iaculis. Nam non nisi dolor. Etiam tincidunt neque quis imperdiet scelerisque. Vivamus consectetur leo sed eros fermentum finibus. Praesent mollis augue vitae imperdiet euismod. Etiam ac rhoncus sem, at euismod enim. Ut aliquam, odio in dictum ornare, mauris elit tempor tortor, at imperdiet leo lorem at ex. Vestibulum eleifend risus sem, pharetra consectetur ipsum vulputate vel. Integer elementum aliquam cursus. Cras at nulla quis purus ullamcorper luctus. Donec et velit efficitur, feugiat tellus nec, lacinia nibh. Donec sit amet neque eu justo lobortis iaculis eu a ligula. Curabitur lectus enim, ornare ut vestibulum nec, varius ac elit. Morbi maximus quis diam ac bibendum.
Praesent at magna vel arcu rhoncus aliquam. Aliquam cursus ex eros, eu varius dolor mattis sit amet. Praesent et tincidunt tellus, vel laoreet arcu. Nam vel dignissim nulla. Proin rutrum tempor efficitur. Cras nec risus sapien. Nulla cursus semper dolor non bibendum. Praesent vestibulum eget ante sed bibendum.
Pellentesque lacinia ornare mauris, a commodo ex consectetur eu. Aenean rutrum auctor dictum. Integer venenatis risus at consequat pretium. Duis ante orci, rhoncus et sollicitudin dignissim, ultrices tincidunt nulla. Cras ut nulla at nisi lobortis dictum non nec massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla in risus quis dolor efficitur lacinia.
Mauris sed arcu erat. Suspendisse suscipit fringilla viverra. Aliquam venenatis nulla id urna congue rutrum. Ut tincidunt ac sapien vel euismod. Cras volutpat, velit id consectetur iaculis, tellus nibh tempus elit, sed facilisis neque ligula eu turpis. Etiam sodales ligula sit amet volutpat sagittis. Suspendisse aliquet sapien libero, sed porttitor arcu convallis sit amet. Etiam congue ultricies lectus, eget finibus risus auctor vel. Phasellus volutpat felis a lectus iaculis, ut aliquet nisi auctor. Vestibulum hendrerit velit eget rhoncus facilisis. Phasellus quis mauris quis velit egestas imperdiet id eu mi.
Suspendisse elementum odio id mauris tincidunt, eu vulputate ex cursus. Nunc pretium quam vitae turpis blandit, auctor mattis tortor faucibus. Mauris feugiat placerat aliquet. Aliquam erat volutpat. Donec tempor ante ut malesuada pharetra. Donec iaculis sem vel ex rutrum cursus. Suspendisse potenti. Suspendisse at eleifend lectus, at faucibus neque. Fusce fringilla eros et viverra congue. Donec at ornare est. Donec ut sem et dui sodales consequat. Quisque commodo ultricies neque. Praesent sollicitudin dolor quis nisl laoreet, nec ornare nulla mattis. Pellentesque quis tellus fringilla velit consectetur interdum.`


const iconC = <>
  <JBICON icon={<AccountBoxIcon className='jb-icon m-2' />} name="Profile" />
  <JBICON icon={<HistoryEduIcon className='jb-icon m-2' />} name="Resume" />
  <JBICON icon={<QuestionAnswerIcon className='jb-icon m-2' />} name="Message" />
  <JBICON icon={<ListAltIcon className='jb-icon m-2' />} name="Applications" />
  <JBICON icon={<HelpIcon className='jb-icon m-2' />} name="Help" />
</>

const routes = <>
  <Routes>
    <Route element={<JBProfile />} path='Profile' />
    <Route element={<JBResume />} path='Resume' />
    <Route element={<JBMessage />} path='Message' />
    <Route element={<JBApplications />} path='Applications' />
    <Route element={<JBHelp />} path='Help' />
  </Routes>
</>

export function JSHome() {
  return (
    <>
      <div className="container-fluid job-seeker p-0 d-flex flex-column">
        <nav className='row jb-nav d-flex justify-content-between p-3 m-0'>
          <div className="d-flex justify-content-md-end justify-content-sm-center justify-content-center align-items-center">
            <AdbIcon className="mx-1 nav-logo" fontSize="large" />
            <h5 className="m-0">Hari HR Recruit App</h5>
          </div>
          <div className='profile-div d-flex align-items-center'>
            <div className='d-sm-flex d-none align-items-center jb-title'>
              <div className='circle'></div>
              <p className='m-0'><strong>Job Seeker</strong></p>
            </div>
            <button className='profile-div-button mx-2 mr-4'>
              <span role="img" className='profile-div-button-span'>
                <img className="profile-div-button-span-img" src='/hari.png' alt='profile picture of Hari Krishnan V K' />
              </span>
            </button>
          </div>
        </nav>
        <div className='row jb-body d-sm-flex d-none m-0 p-0'>
          <div className='col-12 m-0 p-0 d-flex dimmple'>
            <div className='jb-menu p-0 d-flex flex-column px-4'>
              {iconC}
            </div>
            <div className='jb-section p-3 '>
              {routes}
            </div>
          </div>
        </div>
        <div className='row d-sm-none d-flex p-0 m-0 jb-mobile'>
          <div className='col-12 d-flex flex-column jb-body-mobile m-0 p-0 justify-content-between'>
            <div className='jb-section-mobile p-sm-3 p-0 d-flex flex-grow-1 justify-content-center'>
              {routes}
            </div>
            <div className='jb-menu-mobile p-md-3 py-2 d-flex justify-content-around'>
              {iconC}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function JBICON({icon, name}){
  const navigate = useNavigate();
  return <>
    <div onClick={()=>navigate(name)} className={`${name} jbicon d-flex flex-md-row flex-column align-items-center justify-content-md-auto justify-content-center flex-grow-1 flex-shrink-1`}>
      <div className='col-lg-5 col-md-4 text-center p-sm-auto p-0'>
         {icon}
      </div>
      <p className='jb-p col-md-8 m-0 p-sm-auto p-0'>{name}</p>
    </div>
  </>
}
