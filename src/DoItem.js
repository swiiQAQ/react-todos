import React from 'react';

class DoItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="doItem">
                <input className="checkboxItem" onClick={this.props.selectHandler} id={`checkbox${this.props.id}`} type="checkbox" hidden/>
                <label className="selectThis"  for={`checkbox${this.props.id}`}></label>
                <input className="doItemContent" value={this.props.value} id={this.props.id} onChange={this.props.changeItem}></input>
            </div>
        )
    }
}
export default DoItem;