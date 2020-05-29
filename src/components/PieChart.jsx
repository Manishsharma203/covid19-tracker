import React from 'react'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

function PieChart() {
    const statewise= useSelector(state=>state.statewise)
    const total=statewise[0]
    // console.log(total)
    var state;
    if(total){
        state = {
            series: [Number(total.active), Number(total.recovered), Number(total.deaths)],
            options: {
              chart: {
                width: 500,
                type: 'pie',
              },
              colors: ['#2768FD', '#75E644', '#EF2525'],
              labels: ['Active cases : '+total.active , 'Recovered cases : '+Number(total.recovered), 'Deceased cases : '+Number(total.deaths)],
              responsive: [{
                breakpoint: 576,
                options: {
                  chart: {
                    width: 400
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }],
              fill: {
                type: 'gradient',
              }
            },
          
          
          };
    }
    return(
    <div className='my-5 d-flex flex-column justify-content-center'>
        {total && <div><small className='text-monospace'>*Last updated : {total.lastupdatedtime}</small></div>}
        {state && <Chart className='col-sm-4 mx-sm-auto' options={state.options} series={state.series} type="pie" width={500}/>}
    </div>
    )
}
export default PieChart