import './App.css';
import Home from "./components/Home/Home"
import Weather from "./components/OthersPage/Weather"
import Login from "./components/Login/Login"
 
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";


import { UserProvider } from "./components/UserContext/UserContext";
import { V_UserProvider } from "./components/UserContext/V_UserContext";
import { SellerProvider } from "./components/UserContext/SellerContext";
import { V_SellerProvider } from "./components/UserContext/V_SellerContext";
import { SpecialistProvider } from "./components/UserContext/SpecialistContext";
import {V_SpecialistProvider} from './components/UserContext/V_SpecialistContext';
import {AdminProfileProvider} from './components/UserContext/AdminProfileContext';
import {TransictionProvider} from './components/UserContext/TransictionContext';
import {ProductlistProvider} from './components/UserContext/ProductlistContext';
import {PostProvider} from './components/UserContext/PostContext';
import {FeedbackProvider} from './components/UserContext/FeedbackContext';
import {MassageProvider} from './components/UserContext/MassageContext';

import Navbar from './components/Navbar/Navbar';

import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Delete from "./components/Delete/Delete"
import Userlist from './components/Userlist/Userlist';

// --------------------verified user--------------
import V_Read from './components/Read/V_Read';
import V_Create from './components/Create/V_Create';
import V_Edit from './components/Edit/V_Edit';
import V_Delete from "./components/Delete/V_Delete"
import V_Userlist from './components/Userlist/V_Userlist';

import Sellerlist from './components/Userlist/Sellerlist';
import SellerCreate from './components/Create/SellerCreate';
import SellerRead from './components/Read/SellerRead';
import SellerDelete from "./components/Delete/SellerDelete.js"
import SellerEdit from './components/Edit/SellerEdit';

// --------------------verified  Seller--------------
import V_Sellerlist from './components/Userlist/V_Sellerlist';
import V_SellerCreate from './components/Create/V_SellerCreate';
import V_SellerRead from './components/Read/V_SellerRead';
import V_SellerDelete from "./components/Delete/V_SellerDelete.js"
import V_SellerEdit from './components/Edit/V_SellerEdit';

import Specialist from './components/Userlist/Specialist';
import SpecialistCreate from './components/Create/SpecialistCreate';
import SpecialistRead from './components/Read/SpecialistRead';
import SpecialistDelete from "./components/Delete/SpecialistDelete.js"
import SpecialistEdit from './components/Edit/SpecialistEdit';


import V_Specialist from './components/Userlist/V_Specialist';
import V_SpecialistCreate from './components/Create/V_SpecialistCreate';
import V_SpecialistRead from './components/Read/V_SpecialistRead';
import V_SpecialistDelete from "./components/Delete/V_SpecialistDelete"
import V_SpecialistEdit from './components/Edit/V_SpecialistEdit';


 // profile-----------------------------------------------------------------
import AdminProfile from './components/Userlist/AdminProfile';
import AdminProfileEdit from './components/Edit/AdminProfileEdit';
import AdminProfileRead from './components/Read/AdminProfileRead';
 

//transiction-----------------------------------------------------------------
import Transictionlist from './components/Userlist/Transictionlist';

//feedback-----------------------------------------------------------------
import Feedbacklist from './components/Userlist/Feedbacklist';

//massage----------------------------------------------------------------

import Massagelist from './components/Userlist/Massagelist';
import MassageCreate from './components/Create/MassageCreate';


//productlist-----------------------------------------------------------------
import Productlist from './components/Userlist/Productlist';
import ProductlistDelete from "./components/Delete/ProductlistDelete"


//post----------------------------------------------
import Postlist from './components/Userlist/Postlist';
import PostCreate from './components/Create/PostCreate';
import PostRead from './components/Read/PostRead';
import PostDelete from "./components/Delete/PostDelete.js"
import PostEdit from './components/Edit/PostEdit';

 
function App() {
  return (
    <div className="App">
       
       <UserProvider> 
       <SellerProvider>  
       <SpecialistProvider>  
       <V_UserProvider> 
       <V_SellerProvider> 
        <V_SpecialistProvider> 
        <AdminProfileProvider> 
        <TransictionProvider> 
        <ProductlistProvider>
        <PostProvider>
        <FeedbackProvider>
        <MassageProvider>
      <Router>
         
      
       
        <Switch>

        <Route exact path="/" component={Login} />
      <div>
        <Navbar />
         
        

           {/* ---------userlist-------- -------------------------------------------*/}
        <Route path="/userlist">
               <Userlist/>
          </Route>
        <Route path="/create">
              <Create/>
          </Route>
          <Route path="/edit/:id">
             <Edit/>
          </Route>
        <Route path="/read/:id">
             <Read/>
          </Route>
        <Route path="/delete/:id">
             <Delete/>
          </Route>


  {/* ---------Verified     userlist-------- -------------------------------------------*/}
  <Route path="/V_userlist">
               <V_Userlist/>
          </Route>
        <Route path="/V_create">
              <V_Create/>
          </Route>
          <Route path="/V_edit/:id">
             <V_Edit/>
          </Route>
        <Route path="/V_read/:id">
             <V_Read/>
          </Route>
        <Route path="/V_delete/:id">
             <V_Delete/>
          </Route>


           {/* ---------sellerlist-------- -------------------------------------------*/}
            
        <Route path="/sellerlist">
               <Sellerlist/>
          </Route>

          <Route path="/sellercreate">
              <SellerCreate/>
          </Route>
          <Route path="/selleredit/:id">
             <SellerEdit/>
          </Route>
        <Route path="/sellerread/:id">
             <SellerRead/>
          </Route>
        <Route path="/sellerdelete/:id">
             <SellerDelete/>
          </Route>

             {/* ---------Verified sellerlist-------- -------------------------------------------*/}
            
        <Route path="/V_sellerlist">
               <V_Sellerlist/>
          </Route>

          <Route path="/V_sellercreate">
              <V_SellerCreate/>
          </Route>
          <Route path="/V_selleredit/:id">
             <V_SellerEdit/>
          </Route>
        <Route path="/V_sellerread/:id">
             <V_SellerRead/>
          </Route>
        <Route path="/V_sellerdelete/:id">
             <V_SellerDelete/>
          </Route>
         

            {/* ---------specialist-------- -------------------------------------------*/}
        <Route path="/specialist">
               <Specialist/>
          </Route>

          <Route path="/specialistcreate">
              <SpecialistCreate/>
          </Route>
          <Route path="/specialistedit/:id">
             <SpecialistEdit/>
          </Route>
        <Route path="/specialistread/:id">
             <SpecialistRead/>
          </Route>
        <Route path="/specialistdelete/:id">
             <SpecialistDelete/>
          </Route>
 {/* ---------vvvvvvvvvvvvvvvvvvv specialist-------- -------------------------------------------*/}
          <Route path="/V_specialist">
               <V_Specialist/>
          </Route>
          <Route path="/V_specialistcreate">
              <V_SpecialistCreate/>
          </Route>
          <Route path="/V_specialistedit/:id">
             <V_SpecialistEdit/>
          </Route>
        <Route path="/V_specialistread/:id">
             <V_SpecialistRead/>
          </Route>
        <Route path="/V_specialistdelete/:id">
             <V_SpecialistDelete/>
          </Route>


{/* --------- Admin profile-------- -------------------------------------------*/}
<Route path="/profile">
               <AdminProfile/>
          </Route>
          
          <Route path="/profileedit/:id">
             <AdminProfileEdit/>
          </Route>
        <Route path="/profileread/:id">
             <AdminProfileRead/>
          </Route>


           {/* --------- post--------------------------------------------------*/}
           <Route path="/postlist">
               <Postlist/>
          </Route>
          <Route path="/postcreate">
              <PostCreate/>
          </Route>
          <Route path="/postedit/:id">
             <PostEdit/>
          </Route>
        <Route path="/postread/:id">
             <PostRead/>
          </Route>
        <Route path="/postdelete/:id">
             <PostDelete/>
          </Route>

          {/* --------- Transiction-------- -------------------------------------------*/}
<Route path="/transiction">
               <Transictionlist/> 
          </Route>

          {/* --------- Feedback-------- -------------------------------------------*/}
<Route path="/feedback">
               <Feedbacklist/> 
          </Route>


           {/* --------- Massage-------- -------------------------------------------*/}
<Route path="/massage">
               <Massagelist/> 
          </Route>
          <Route path="/massagecreate">
               <MassageCreate/> 
          </Route>




          {/* --------- productlist-------- -------------------------------------------*/}
<Route path="/productlist">
               <Productlist/>
          </Route>
          
          <Route path="/productdelete/:id">
             <ProductlistDelete/>
          </Route>
          
           
           {/* --------- weather-------- -------------------------------------------*/}
      <Route path="/weather">
               <Weather/>
          </Route>
         


           

          <Route path="/home">
             <Home/>
          </Route>
           </div>

        </Switch>
         
      </Router>
      </MassageProvider>
      </FeedbackProvider>
      </PostProvider>
</ProductlistProvider>
      </TransictionProvider>
      </AdminProfileProvider>
      </V_SpecialistProvider>
       </V_SellerProvider> 
      </V_UserProvider> 
      </SpecialistProvider>  
      </SellerProvider>
      </UserProvider>
    </div>
  );
}

export default App;
