import React from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function CountryData() {

    const statewise= useSelector(state=>state.statewise)
    const stateNames = statewise.slice(1).map(e=>e.state).slice(0,8)
    const active= statewise.slice(1).map(e=>e.active).slice(0,8)
    const recovered= statewise.slice(1).map(e=>e.recovered).slice(0,8)
    const deaths= statewise.slice(1).map(e=>e.deaths).slice(0,8)

    var state;
    if(stateNames){
        state = {
            series: [{
              name: 'active',
              data: active
            }, {
              name: 'recovered',
              data: recovered
            }, {
              name: 'Deceased',
              data: deaths
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: 'Top 8 most impacted states',
                align:'center'
              },
              xaxis: {
                categories:stateNames
              },
              yaxis: {
                title: {
                  text: undefined
                },
              },
              fill: {
                opacity: 1
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
          };
    }
    return (
        <div>
            {stateNames && <Chart className='col-12 my-5' options={state.options} series={state.series} type="bar" height={650} />}
        </div>
    )
}
