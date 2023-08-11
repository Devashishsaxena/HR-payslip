import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Employee from './components/employee/Employee';
import ForgotPassword from './components/ForgotPassword ';
import Login from './components/Login';
import ProfileInfo from './components/ProfileInfo';
import ResetPassword from './components/ResetPassword';
import SubAdmin from "./components/subadmin/SubAdmin";
import Profile from './components/profile/Profile';
import Card from './components/Card';
import ProfileEmployee from './components/profile/ProfileEmployee';
import Inbox from './components/Inbox/Inbox';
import CustomMail from './components/custom-mail/CustomMail';
import EventsComponent from './components/events/EventsComponent';
import WebContents from './components/web-contents/WebContents';
import HrConfiguartion from './components/hr-configuration/HrConfiguartion';
import HrPolicy from './components/hr-policy/HrPolicy';
import Sidebar from './components/dashboard/Sidebar';
import PrivateRoutes from './utils/PrivateRoutes';
import NotFound from './components/404NotFound/NotFound';
import { useEffect, useState } from 'react';


const App = () => {
  const [role, setRole] = useState(null)
  useEffect(() => {
    // console.log(role);
    let auth = localStorage.getItem('role')
    auth === 'employee' ? setRole('employee') : auth === 'super_admin' ? setRole('super_admin') : setRole(null)
  }, [])

  return (
    <div >
      {/* {JSON.stringify(role)} */}
      <Router basename={'/hradmin'}>
        {
          role === null &&
          <Routes>
            <Route exact path='/' element={<Login auth={(roles) => { setRole(roles) }} />} />
            <Route exact path='/login' element={<Navigate to={'/'} />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        }
        {
          role === 'employee' &&
          <Sidebar>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/employees' element={< Employee />} />
                <Route exact path='/events' element={< EventsComponent />} />
                <Route exact path='/forgot-password' element={< ForgotPassword />} />
                <Route exact path='/reset-password' element={<ResetPassword />} />
                <Route exact path='/card' element={<Card />} />
                <Route exact path='/profileinfo' element={<ProfileInfo />} />
                <Route exact path='/sub-admin' element={<SubAdmin />} />
                <Route exact path='/inbox' element={<Inbox />} />
                <Route exact path='/web-contents' element={<WebContents />} />
                <Route exact path='/custom-mail' element={<CustomMail />} />
                <Route exact path='/hr-policy' element={<HrPolicy />} />
                <Route exact path='/hr-configuration' element={<HrConfiguartion />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/profile/:id' element={<Profile />} /> 
                <Route exact path='/profileemployeee' element={<ProfileEmployee />} />
                <Route path='*' element={<Navigate to={'/dashboard'} />} />
              </Route>
            </Routes>
          </Sidebar>
        }
        {/* <Route path='*' element={<NotFound />} /> */}

      </Router>
    </div>
  );
}

export default App;
