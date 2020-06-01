import React from 'react'
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

export default function StateDetails(props) {
    // console.log('props : ',props)
    const districtwise = useSelector(state => state.districtwise)
    const districtdetails = districtwise.find(e => e.state === props.match.params.state)
    // var unknownDistrictFlag = districtwise.find(e=>e.state===props.match.params.state).districtData.find(e=>e.district==="Unknown")
    // console.log(unknownDistrictFlag)

    const statewise = useSelector(state => state.statewise)
    const statedetails = statewise.find(e => e.state === props.match.params.state)
    // console.log('districtwise',districtwise)
    console.log('statedetails', statedetails)
    return (
        <div className='my-5'>
            {statedetails &&
                <div className='text-center'>
                    <div className='h1 my-4'>{statedetails.state}</div>

                    <div className='col-5 col-md-4 mx-auto my-3'>
                        <div className='rounded my-1' style={{background:' #99b3ff',color:'#002db3'}}>Total Cases: {statedetails.confirmed}</div>
                        <div className='rounded my-1' style={{background:' #ffff80',color:'#666600'}}>Active : {statedetails.active}</div>
                        <div className='rounded my-1' style={{background:' #99ff99',color:'#006600'}}>Recovered : {statedetails.recovered}</div>
                        <div className='rounded my-1' style={{background:' #ff9980',color:'#e62e00'}}>Deceased : {statedetails.deaths}</div>
                    </div>
                    <div className='col-sm-4 col-6 mx-auto rounded' style={{background:'#B6BAC3'}}>
                        <div>{ReactHtmlParser(statedetails.statenotes) }</div>
                    </div>
                    <div><small className='text-monospace'>*Last updated : {statedetails.lastupdatedtime}</small></div>
                    <div></div>
                </div>

            }
            <br></br>
            {districtdetails &&
                <div>
                    {districtdetails.districtData.map(e=>e.district==="Unknown"?
                    <div key={e.district}><i><small>* District-wise data is still under reconciliation</small></i></div>:
                    <div key={e.district}></div>)}

                    <table className='table mx-auto' style={{width:'60%'}}>
                        <thead className='bg-secondary text-white'>
                            <tr>
                                <th>District</th>
                                <th>Active</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deceased</th>
                            </tr>
                        </thead>
                        <tbody>
                            {districtdetails.districtData.map(e =>
                                <tr key={e.district}>
                                    <td>{e.district}</td>
                                    <td>{e.active}</td>
                                    <td>{e.confirmed}</td>
                                    <td>{e.recovered}</td>
                                    <td>{e.deceased}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
