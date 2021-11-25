
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch , Route} from 'react-router-dom';
import Home from './component/Home/Home/Home';
import Notfound from './component/Notfound/Notfound';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Login from './component/Login/Login';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import AddService from './component/AddService/AddService';
import SeeDetails from './component/Home/OurTourPackage/TourDetails/SeeDetails/SeeDetails';
import ManagePackage from './component/ManagePackage/ManagePackage';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
       <Header></Header>
          <Switch>
             <Route exact path="/">
                  <Home></Home>
             </Route>
             <Route exact path="/home">
                  <Home></Home>
             </Route>
             <Route path="/login">
               <Login></Login>
             </Route>
            <PrivateRouter path="/addService">
               <AddService></AddService>
            </PrivateRouter>
            <PrivateRouter path="/managePackage">
               <ManagePackage></ManagePackage>
            </PrivateRouter>
            <PrivateRouter path="/seeDetails/:id">
              <SeeDetails></SeeDetails>
            </PrivateRouter>
             <PrivateRouter path="*">
               <Notfound></Notfound>
             </PrivateRouter>
          </Switch>
        <Footer></Footer>
       </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
