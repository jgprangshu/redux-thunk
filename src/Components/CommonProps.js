import React from 'react'

class CommonProps extends React.Component{
    constructor(){
        super()
        this.state ={
            count:0
        }
    }

    clickHandler = ()=>{
        this.setState((prevState)=>({
                count : prevState.count + 1
        })
        )
    }


    render() {
        const {count} = this.state
        return(
            <React.Fragment>
            <div>
                {this.props.myProps(count,this.clickHandler)}
            </div>
            </React.Fragment>
        )
        
    }
}

export default CommonProps