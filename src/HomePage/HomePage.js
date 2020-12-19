import React from 'react';



function HomePage() {
    
  return (

    <div className="container center">

    <div className="page-area">
        <div classname="home-header" aria-label="Introduction">
            <h1>What is a Personal Budget application?</h1>
            <h2>An easier way to track what you are spending.</h2>
            <h2>Enter how much you spend each month and we will do the rest!</h2>
        </div>

        <div className="text-box" aria-label="Stay on Track">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div className="text-box" aria-label="Visualize">
            <h1>Visualize</h1>
            <p>
            This app helps visualize how much you are spending in each category.
            </p>
        </div>

        <div className="text-box" aria-label="Results">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div className="text-box" aria-label="Free">
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </div>
       
        
</div>

</div>
  );
}

export default HomePage;