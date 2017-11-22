import React from 'react';

class InputDos extends React.Component{
    constructor(props){
        super(props);
        this.inputItem = this.inputItem.bind(this);
    }
    inputItem(e){
        this.props.inputHandler(e);
    }
    render(){
        return(
            <div className="inputDos">
                <input onClick={this.props.selectAllHandler} type="checkbox" className="selectAllBtn" id="selectAllCheckBox" hidden/>
                <label className="selectAll" for="selectAllCheckBox"></label>
                <input value={this.props.value} type="text" onKeyUp={this.props.keyUpHandler} onChange={this.inputItem} placeholder="What needs to be done"></input>
            </div>
        )
    }
}
export default InputDos;