
// import TodoListItem from './TodoList'
// import todoData from './todoData'

// // function App() {
// //   const todoItems = todoData.map(item=> <TodoListItem item = {item}/>)

// //   return (
// //     <div class="todo-list-item">
// //       {todoItems}
// //     </div>

// //   );
// // }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//         todos : todoData
//     }
//     this.handleChanged = this.handleChanged.bind(this)
//   }

//   handleChanged(id){
//     // console.log("changed",id)
//     // this.setState(prevState =>{
//     //    const updatedTodos = prevState.todos.map( todo => {
//     //       if(todo.id === id){
//     //         todo.checked = !todo.checked
//     //       }
//     //       return todo
//     //     })
//     //     return {
//     //       todos : updatedTodos
//     //     }
//     // })

//     const updatedTodos = this.setState(this.state.todos.map(item=>{
//         if(item.id === id)
//           item.checked = !item.checked
//           return item
//     } ))
//     return {
//       todos : updatedTodos
//     }
//   }

//   render() {
//     const todoItems = this.state.todos.map(item=> <TodoListItem key= {item.id} item = {item} 
//                                                 handleChanged = {this.handleChanged}/>)
//     return (
//       <div className="todo-list-item">
//         {todoItems}
//       </div>

//     );
//   }

// }

// export default App;



/* REDUX-THUNK */

import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {loadUsers} from './Actions/actions'

class App extends React.Component {


  render() {
    console.log(this.props)

    if (this.props.loading) {
      return <div>Loading</div>
  }
  if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
  }

    return (
      <div className="App">
        <button onClick={this.props.loadUsers}>Get Data</button>
        <p>{this.props.data.name}</p>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
  error: state.error
})


const mapDispatchToProps = {
  loadUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(App);



// const mapStateToProps = (state) => {
//   return {
//     data : state.data
//   }
    
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getDetails: (response) => dispatch({ type: 'GET_USER_DATA_SUCCESS', payload: response }),
//     errorHandle: (err) =>dispatch({ type: 'GET_CURRENT_USER_FAILURE', payload: err }),
//     changeHandler :() =>dispatch({type:'CHANGE_HANDLE'})
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(App)










