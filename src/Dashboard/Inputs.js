import React, {Component} from 'react';

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        console.log("this is the constructor")

        this.onChange = this.onChange.bind(this);
        this.submitBtn = this.submitBtn.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.changeItem = this.changeItem.bind(this);
      

        this.state ={
            item: '',
            amount:''
        }
    }

    onChange(e) {
        console.log("onChange function")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeItem(e) {
        console.log("changeItem function")
        this.setState({
            item: e.target.value
        });
    }

    changeAmount(e) {
        this.setState({
            amount:e.target.value
        });
    }

    submitBtn(e) {
        console.log("submitBtn function")
            const expense = {
                item: this.state.item,
                amount: this.state.amount,
            }

            console.log(expense)

            window.location = '/'
    }

    render (){
        return (

            <div className="container" >
                 <h1>Welcome to your Personal Budget Dashboard!</h1>
                 <h2>This is where you will be able to enter your personal data about your spending habits</h2>
                <h1>Enter your expense here</h1>
                <form submitBtn={this.submitBtn}>
                    <div className="form">
                        <label>Item: </label>
                        <input type="text"
                        required
                        className="form-edit"
                        placeholder= "Enter an Item"
                        value={this.state.item}
                        onChange={this.changeItem}
                        />
                    </div>
                    <div className="form">
                        <label>Amount: </label>
                        <input type="text"
                        required
                        className="form-edit"
                        placeholder= "Enter the dollar amount"
                        value={this.state.amount}
                        onChange={this.changeAmount}
                        />
                    </div>
                    <div className="form">
                        <input type="submit" value="Create expense" className="btn"></input>

                    </div>
                </form>
            </div>
        )
    }

}