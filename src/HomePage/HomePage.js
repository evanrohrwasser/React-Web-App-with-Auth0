import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';



function HomePage() {
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
    <div className="container center">

    <div className="page-area">

        <div className="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div className="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div className="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div className="text-box">
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </div>
        <div className="text-box-chart">
                <h1>Chart</h1>
                <p>
                <Pie data={chartData} options={{responsive: true}}/>
                </p>
            </div>
</div>

</div>
  );
}

export default HomePage;