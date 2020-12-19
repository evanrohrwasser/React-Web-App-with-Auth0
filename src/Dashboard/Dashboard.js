import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Pie, } from 'react-chartjs-2';




function Dashboard() {
    
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
        <div className="pie-chart" aria-label="pie chart">
                <h2>Pie Chart</h2>
                <p>
                <Pie data={chartData} options={{responsive: true}}/>
                </p>
            </div>
            <div className="bar-chart" aria-label="Bar Chart">
                <h2>Bar Chart</h2>
                <p>
                <Bar  data={chartData}  options={{responsive: true}}/>
                </p>
            </div>
            <div className="doughnut-chart" aria-label="Doughnut Chart">
                <h2>Doughnut Chart</h2>
                <p>
                <Doughnut data={chartData} options={{responsive: true}}/>
                </p>
            </div>
                
</div>


  );
}

export default Dashboard;