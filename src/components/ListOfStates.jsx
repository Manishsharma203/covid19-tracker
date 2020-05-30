import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ListOfStates() {
    var statewise= useSelector(state=>state.statewise)
    statewise=statewise.slice(1)
    return (
        <div className='mx-auto my-5 col-12 col-md-10'>
        <div className='d-flex flex-wrap justify-content-center'>
            {statewise && statewise.map(e=>
                <Link to={`/statedetails/${e.state}`} key={e.statecode} className='col-5 m-2 d-flex justify-content-between rounded btn btn-outline-success'>
                    <div className='col-10'>
                        {e.state}
                        <b className='text-danger'>{e.state==="State Unassigned" ? ' *' :''}</b>
                    </div>
                    <div className='text-right'><span className="iconify" data-icon="mdi:arrow-right-bold-box" data-inline="false" style={{fontSize:'20px'}}></span></div>
                </Link>
            )}
        </div>
        </div>
    )
}
