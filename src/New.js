import React from 'react'
// import Condition from './Condition'

class New extends React.Component {

    /* LifeCycle Method Practice --->

    // constructor() {
    //     super();
    //     this.state = {
    //         isLoading: true
    //     }
    // }

    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.setState({
    //             isLoading : false 
    //         })
    //     },1500)
    // }

    // render(){
    //     return(
    //         this.state.isLoading ? <h1>Loading...</h1> : <Condition />
    //     )
    // }

*/


    /* Conditional Rendering 

        constructor(){
            super()
            this.state ={
                isLoggedIn : false
            }
            this.handlerChanged = this.handlerChanged.bind(this)
            
        }

        handlerChanged(){
            this.setState({
                // return{
                    isLoggedIn : !this.state.isLoggedIn
                // }
                  
                
            })
            console.log("working")
        }

        render(){
            let buttonText = this.state.isLoggedIn ? "logged in" : "LoggedOut" 
            return(
                <div> 
                    <button onClick = {this.handlerChanged} >{buttonText}</button>
                    
                </div>
               
            )
            
        } */


    /* API Call 

    constructor(){
        super()
        this.state = {
            displayData : {}
        }
    }

    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                displayData : data 
            })
        })
    }

    render(){
        console.log(this.state.displayData.films)
       return(
           <table>
               <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
               </thead>

               <tbody>
                    <tr>
                        <td>{this.state.displayData.name}</td>
                    </tr>
               </tbody>
           </table>
           
       )
    } */


    /* Forms Handling 

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.valueChange = this.valueChange.bind(this)
    }
    

    // valueChange(event){
    //     this.setState({
    //         [event.target.name] : event.target.value 
    //         // firstName : event.target.value ,
    //         // lastName : event.target.value 
    //     })
    // }

    valueChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value 
        })
    }

    render() {
        return (
            <div>
            <form>
                <input type="textbox"
                    value = {this.state.firstName}
                    name="firstName"
                    placeholder="First Name" onChange={this.valueChange}>
                </input> <br />

                <input type="textbox"
                    value = {this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"onChange={this.valueChange}>
                </input><br />

                <button>Submit </button>

                
            </form>

            <h1>{this.state.firstName} {this.state.lastName}</h1> 
            </div>
        )
    } */




    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age:"",
            
            isVegan : true,
            isLacto : false,
            isKosher : false,
           
            location : "US",
            gender: "female"
        }
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(event) {
            const {name,value,type,checked} = event.target
            type=== "checkbox"? this.setState({
                [name]: checked}):this.setState({[name]: value})
            
    }

    

    render() {
        return (
            <div className="container">
                <form>
                    <input type="textbox"
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handlerChange}>
                    </input>
                    <br/>

                    <input type="textbox"
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handlerChange}>
                    </input>
                    <br/>

                    <input type="number"
                        name="age"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handlerChange}>
                    </input>
                    <br/>

                   <label>
                    <input type="checkbox"
                        name="isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handlerChange}>
                      </input> 
                      Veg
                      </label>

                   <label>
                        <input type="checkbox"
                            name="isKosher" 
                            checked={this.state.isKosher}
                            onChange={this.handlerChange}>
                        </input> 
                     Kosher
                   </label>


                    <label>
                        <input type="checkbox"
                            name="isLacto"
                            checked={this.state.isLacto}
                            onChange={this.handlerChange}>
                        </input> 
                      Lactose Free
                    </label>
                    <br/>

                    <select
                        name="location"
                        value={this.state.location}
                        onChange={this.handlerChange}>
                            
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="INDIA">INDIA</option>
                    </select>
                    <br/>

                    <label>
                        <input type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender==="male"}
                            onChange={this.handlerChange}>
                        </input> 
                      Male
                    </label>
                    <br/>

                    <label>
                        <input type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender==="female"}
                            onChange={this.handlerChange}>
                        </input> 
                      Female
                    </label>

  

                </form>
                {this.state.firstName} {this.state.lastName}<br/>
                <p>Vegan : {this.state.isVegan? "yes":"no"}</p>
                <p>Lactose : {this.state.isLacto? "yes":"no"}</p>
                <p>Kosher : {this.state.isKosher? "yes":"no"}</p>
            </div>
            
        )
      
    }




}



export default New;
