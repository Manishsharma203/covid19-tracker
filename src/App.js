import React, {useEffect, useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {fetchData,fetchStatewiseData} from './redux/actions'
import Overview from './components/Overview';
import Statewise from './components/Statewise';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import PopUp from './components/PopUp';

function App(){

  // fetching data
  const dispatch= useDispatch()
  useEffect(() => {
      dispatch(fetchData())
      dispatch(fetchStatewiseData())
  },[])

  return (
    <div>
      <nav style={{background:'#FFBDAA'}}>
        <div className=' text-center' style={{fontFamily:'Bungee Inline',fontSize:'25px'}}>COVID-19 INDIA TRACKER</div>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <Link className="nav-item nav-link show active col-4 text-center" to='/' id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><div>Overview</div></Link>
          <Link className="nav-item nav-link col-4 text-center" to='/statewise' id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><div>States/UTs</div></Link>
          <Link className="nav-item nav-link col-4 text-center" to='/news' id="nav-profile-tab2" data-toggle="tab" href="#nav-profile2" role="tab" aria-controls="nav-profile2" aria-selected="false"><div>Latest Health News</div></Link>
        </div>
      </nav>
      <PopUp/>
      {/* <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Overview/></div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Statewise/></div>
      </div> */}
      <Routes/>
    </div>
  );
}
export default App
