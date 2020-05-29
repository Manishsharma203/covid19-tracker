import React from 'react'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function DailyConfirmed() {
    const daysVariable= useSelector(state=>state.daysVariable)

    const cases_time_series= useSelector(state=>state.cases_time_series)
    const cutoffDate=cases_time_series.length-daysVariable
    const dailyConfirmed = cases_time_series.map(e=>e.dailyconfirmed).slice(cutoffDate)
    const date= cases_time_series.map(e=>e.date).slice(cutoffDate)

    var state;
    if(dailyConfirmed){
        state = {   
            series: [{
                name: "Daily Confirmed cases",
                data: dailyConfirmed
            }],
            options: {
              chart: {
                height: 250,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: true
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Confirmed cases per day',
                align: 'center'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.8
                },
              },
              xaxis: {
                categories: date,
              }
            },
          };
    }


    return (
        <div>
            { dailyConfirmed && <Chart className='col-12 my-5' options={state.options} series={state.series} type="line" height={350} />}
        </div>
    )
}
