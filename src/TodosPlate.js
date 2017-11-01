import React from 'react';
import InputDos from './InputDos.js';
import DoItem from './DoItem';

class TodosPlate extends React.Component{
    constructor(props){
        super(props);
        this.state ={value:'',doItem:''};
        this.items = [];
        this.inputHandler = this.inputHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.creatItem = this.creatItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }
    inputHandler(e){
        this.setState({value:e.target.value});
    }
    keyUpHandler(e){
        e.keyCode === 13 && this.creatItem();
    }
    creatItem(){
        this.items.push(this.state.value);
        this.renderDoItem();
    }
    changeItem(e){
        this.items[e.target.id] = e.target.value;
        this.renderDoItem();
    }
    renderDoItem(){
        let doItem = this.items.map((item,index)=>{
            return <DoItem key={index} id={index} value={item} changeItem={this.changeItem}/>
        })
        this.setState({doItem:doItem,value:''});
    }
    render(){
        
        return(
            <div className="plateBox">
                <div className="todosPlate">
                    <InputDos value={this.state.value} inputHandler={this.inputHandler} keyUpHandler={this.keyUpHandler}/>
                    <div>{this.state.doItem}</div>
                </div>
            </div>
            
        )
    }
}
export default TodosPlate;