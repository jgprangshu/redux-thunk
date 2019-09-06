import React from 'react';


function TodoListItem(props) {
    return (
        <div className="todo-items">
            <input type="checkbox" checked={props.item.checked}
            onChange= {()=> props.handleChanged(props.item.id)} />
          <p>{props.item.text}</p>
        </div>
    );
}

export default TodoListItem 