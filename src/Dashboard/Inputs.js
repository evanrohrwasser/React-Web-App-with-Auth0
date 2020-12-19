import React, {Component} from 'react';

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.changeItem = this.changeItem.bind(this);
      

        this.state ={
            item: '',
            amount:''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeItem(e) {
        
        this.setState({
            item: e.target.value
        });
    }

    changeAmount(e) {
        this.setState({
            amount:e.target.value
        });
    }

    submit(e) {
            const expense = {
                item: this.state.item,
                amount: this.state.amount,
            }

            console.log(expense)

            window.location = 'https://er-4166-fp.netlify.app/dashboard'
    }

    render (){
        return (

            <div className="container" >
                 <h1>Welcome to your Personal Budget Dashboard!</h1>
                 <h2>This is where you will be able to enter your personal data about your spending habits</h2>
                <h1>Enter your expense here</h1>
                <form>
                    <div className="form">
                        <label for="Item">Item: </label>
                        <input type="text"
                        required
                        aria-label="Input for Item"
                        id="Item"
                        className="form-edit"
                        placeholder= "Enter an Item"
                        value={this.state.item}
                        onChange={this.changeItem}
                        />
                    </div>
                    <div className="form">
                        <label for ="Amount">Amount: </label>
                        <input type="text"
                        required
                        aria-label="Input for dollar amount"
                        id="Amount"
                        className="form-edit"
                        placeholder= "Enter the dollar amount"
                        value={this.state.amount}
                        onChange={this.changeAmount}
                        />
                    </div>
                    <div className="form">
                        <input type="submit" aria-label="Submit or create expense button " value="Create expense" className="btn"></input>

                    </div>
                </form>
            </div>
        )
    }

}