import React from 'react'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function TotalConfirmed() {
    const daysVariable= useSelector(state=>state.daysVariable)

    const cases_time_series= useSelector(state=>state.cases_time_series)
    const cutoffDate=cases_time_series.length-daysVariable

    const totalconfirmed = cases_time_series.map(e=>e.totalconfirmed).slice(cutoffDate)
    const totalrecovered = cases_time_series.map(e=>e.totalrecovered).slice(cutoffDate)
    const date= cases_time_series.map(e=>e.date).slice(cutoffDate)

    var state;
    if(totalconfirmed){
        state = {
            series: [{
              name: 'Confirmed cases',
              data: totalconfirmed
            },{
                name: 'Recovered cases',
                data: totalrecovered
              }],
            options: {
              chart: {
                height: 250,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: date
              },
              title: {
                text: 'Total cases progression',
                align: 'center'
              },
            },
          };
    }


    return (
        <div>
            { totalconfirmed && <Chart className='col-12 my-5' options={state.options} series={state.series} type="area" height={250} />}
        </div>
    )
}
