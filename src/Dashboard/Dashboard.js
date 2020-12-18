import React, { useEffect, useState } from 'react';
import { Doughnut, Pie, Polar, } from 'react-chartjs-2';
import axios from 'axios';



function Dashboard() {
    axios.get('http://localhost:4000/budget');
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
    datasets: [
        {
            data: [30, 350, 90, 40, 50, 45, 250],
            
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#900C3F',
                '#3341FF',
                '#FF33FB'
                
               
            ],
        }
    ],
    labels: [
        'Eat Out',
        'Rent',
        'Groceries',
        'Gas',
        'Subscriptions',
        'Phone',
        'Insurance'

    ]
    

  })
}
  
  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="container">
    <div className="dash header">
       
        </div> 
        <div className="pie-chart">
                <h2>Pie Chart</h2>
                <p>
                <Pie data={chartData} options={{responsive: true}}/>
                </p>
            </div>
            <div className="bar-chart">
                <h2>Polar Area Chart</h2>
                <p>
                <Polar  data={chartData}  options={{responsive: true}}/>
                </p>
            </div>
            <div className="doughnut-chart">
                <h2>Doughnut Chart</h2>
                <p>
                <Doughnut data={chartData} options={{responsive: true}}/>
                </p>
            </div>
                
</div>


  );
}

export default Dashboard;