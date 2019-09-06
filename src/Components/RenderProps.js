import React from 'react'
import CommonProps from './CommonProps';
import MyCounter from './MyCounter';

class RenderProps extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return (
                <React.Fragment>
                     <CommonProps myProps={(count,clickHandler)=> 
                                        (<MyCounter count={count} clickHandler={clickHandler}/> )
                                          }
                />
                </React.Fragment>
               
                )
    }
}

export default RenderProps