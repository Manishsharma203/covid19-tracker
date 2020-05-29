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
                    <div><i><small>* District-wise data is still under reconciliation</small></i></div>:
                    <div></div>)}

                    <table className='table col-10 mx-auto'>
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
                                <tr>
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
