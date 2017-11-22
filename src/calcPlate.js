import React from 'react';

class ClacPlate extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="calcPlate">
                <span className="leftCount">{this.props.count} items left</span>
                <span onClick={this.props.clearItem} className="clearBtn">clear completed</span>
            </div>
        )
    }
}
export default ClacPlate;