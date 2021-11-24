
import './App.css';
import Error from './components/MyErrorBoundary';
import React,{Suspense} from 'react'
import Pagenation1 from './components/Pagenation';
//import SocialLogin from './components/SocialLogin';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
const  SocialLogin=React.lazy(()=>import('./components/SocialLogin'));
//import Searching from './components/Search';
//import { Suspense } from 'react';
function App() {
  return (
    <div className="App">
      {/* <Searching/> */}
      <Error>
      <Suspense fallback={<div>Loading</div>}>
        
        <SocialLogin/>
      </Suspense>
      </Error>
      {/* <Router>
        <Routes>
          <Route path="/"  element={<SocialLogin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/pagination"element={<Pagenation1/>}/>
        </Routes>
      
      </Router> */}
    
    </div>
  );
}

export default App;
