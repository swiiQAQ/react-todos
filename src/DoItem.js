import React from 'react';

class DoItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="doItem">
                <input value={this.props.value} id={this.props.id} onChange={this.props.changeItem}></input>
            </div>
        )
    }
}
export default DoItem;