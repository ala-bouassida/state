import { Component } from "react";
import"./App.css";
import Add from './component/Add';

class App extends Component {
  state = {
    todo: [
     { 
      id: Math.random(),
      task: "learn state",
      isDone: false 
    },
    { 
      id: Math.random(),
      task: "learn hooks",
      isDone: false 
    },
    { 
      id: Math.random(),
      task: "learn redux",
      isDone: false 
    },
    ],
  };
  handleDelete = (id) =>{
    this.setState({todo: this.state.todo.filter((el)=>el.id !=id)})
  };
  handleCompleted =(id) =>{
    this.setState({
      todo: this.state.todo.map((el)=>
    el.id === id ? { ...el, isDone: !el.isDone}: el
      ),
    });
  };
  render (){
  console.log(this.state.todo);
   
  return(
  <div style={{textAlign:"center"}}>
    

    {this.state.todo.map((el) =>(
  <div id="div">
    <p>{el.id}</p>
    <h3 id={el.isDone? "completed": "nothing"}>{el.task}</h3>
    <button onClick={()=>this.handleCompleted(el.id)}>isDone</button>
    <button onClick={()=>this.handleDelete(el.id)}>delete</button>
  </div>
  ))}
  </div>
  )
  };
};

export default App;
