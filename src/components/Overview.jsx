import React from 'react'
import styles from './overview.module.css'
import { useSelector, useDispatch } from 'react-redux'
import PieChart from './PieChart'
import DailyConfirmed from './DailyConfirmed'
import TotalConfirmed from './TotalConfirmed'
import CountryData from './CountryData'
import {changeDays} from '../redux/actions'

function Overview(){
    const dispatch= useDispatch()

    const statewise= useSelector(state=>state.statewise)
    const total=statewise[0]

    const tested= useSelector(state=>state.tested)
    const totalTested=tested[tested.length-1]

    const isLoading= useSelector(state=>state.isLoading)

    // console.log('total',total)
    return(
        <>
        {!isLoading?
        <div className={styles}>
        <div className='my-sm-5 my-3 d-flex justify-content-center'>
            <div className={`mx-sm-4 d-flex flex-column justify-content-center align-items-center rounded ${styles.totalCases}`} >
                <div>Total Cases</div>
                {total && <div>{total.confirmed}</div>}
            </div>
            <div className={`mx-sm-4 d-flex flex-column justify-content-center align-items-center rounded ${styles.totalSamples}`} >
                <div>Total Samples Tested</div>
                {totalTested && <div>{totalTested.totalsamplestested}</div>}
            </div>
        </div>

        <PieChart classname={styles.pie}/>
        <div className='d-flex my-4 col-md-6 align-items-center'>
                <div className='col-md-3 col-5'>Select time period</div>
                <select className='custom-select bg-secondary text-white' onChange={(e)=>dispatch(changeDays(Number(e.target.value)))}>
                    <option value='7'>Last 7 days</option>
                    <option value='10'>Last 10 days</option>
                    <option value='30'>Last 30 days</option>
                    <option value='100'>Last 100 days</option>
                </select>
            </div>
        <TotalConfirmed />
        <DailyConfirmed />
        <CountryData />
    </div>:
    <h1 className='m-5'>LOADING....</h1>
    }
        </>
    )
}

export default Overview