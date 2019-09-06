import React from 'react'

class MyCounter extends React.Component{
    render(){
        return(
         <React.Fragment>
            <button onClick={this.props.clickHandler}>IncreaseCount {this.props.count} times</button>
        </React.Fragment>
        )
    }
}

export default MyCounter;