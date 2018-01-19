import React from 'react';
import InputDos from './InputDos.js';
import DoItem from './DoItem';
import CalcPlate from './calcPlate.js';

class TodosPlate extends React.Component{
    constructor(props){
        super(props);
        this.state ={value:'',doItem:'',checkedCount:0};
        this.items = [];
        this.inputHandler = this.inputHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.creatItem = this.creatItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.renderCalculator = this.renderCalculator.bind(this);
        this.selectAllHandler = this.selectAllHandler.bind(this);
        this.clearItem = this.clearItem.bind(this);
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
            return <DoItem selectHandler={this.renderCalculator} key={index} id={index} value={item} changeItem={this.changeItem}/>
        })
        this.setState({doItem:doItem,value:''});
    }
    renderCalculator(){
        let selectBtn = document.getElementsByClassName("checkboxItem");
        let selectAllBtn = document.getElementsByClassName("selectAllBtn");
        selectAllBtn[0].checked = false;
        this.setState({checkedCount: 0});
        for(let i=0;i<selectBtn.length;i++){
            if(selectBtn[i].checked){
                this.setState((prevState,props)=>{
                    return {checkedCount: prevState.checkedCount + 1}
                });
            }
        }
    }
    selectAllHandler(){
        let selectAllBtn = document.getElementsByClassName("selectAllBtn");
        let selectBtn = document.getElementsByClassName("checkboxItem");
        for(let i=0;i<selectBtn.length;i++){
            if(selectAllBtn[0].checked){
                selectBtn[i].checked = true;
                this.setState({checkedCount: i+1});
            }
            else{
                selectBtn[i].checked = false;
                this.setState({checkedCount: 0});
            }
        }
    }
    clearItem(){
        let selectBtn = document.getElementsByClassName("checkboxItem");
        let spliceArr=[];
        for(let i=0;i<selectBtn.length;i++){
            if(selectBtn[i].checked){
                spliceArr.push(i);
                // this.items.splice(i,1);
                selectBtn[i].checked = false;
            }
        }
        this.spliceFunc(this.items,spliceArr);
        this.setState({checkedCount:0});
        // debugger;
        this.renderDoItem();
    }
    //splice后再splice需要将位置往前移
    spliceFunc(obj,spliceArr){
        for(let i=0;i<spliceArr.length;i++){
            obj.splice(spliceArr[i]-i,1);
        }
    }
    render(){
        let isCalcPlate;
        let count;
        if(this.items[0]){
            count = this.items.length-this.state.checkedCount;
            isCalcPlate=(
                <CalcPlate clearItem={this.clearItem} count={count}/>
            )
        }
        return(
            <div className="plateBox">
                <div className="todosPlate">
                    <div className="dotosTop">
                        <InputDos value={this.state.value} inputHandler={this.inputHandler} keyUpHandler={this.keyUpHandler} selectAllHandler={this.selectAllHandler}/>
                        <div>{this.state.doItem}</div>                                           
                    </div>
                    {isCalcPlate}
                </div>
            </div>
        )
    }
}
export default TodosPlate;