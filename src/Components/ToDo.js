import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component{

  constructor(){
    super();
    this.state = {
      tasks : [{task:'Check Mails',id:1},{task:'Read Article', id:2}],
      currTask: ''
    }
  }

  handleChange =(e) =>{
    //console.log(e.target.value);
    this.setState({
      currTask:e.target.value
    }
    )
  }

  handleSubmit = ()=>{
    if(this.state.currTask!=='')
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length}],
      currTask: ''
    })
    else
    {
      window.alert("Can't add empty task to the list");
    }
  }

  handleDelete = (id) => {
    let arr = this.state.tasks.filter((taskObj)=>{
      return taskObj.id!=id
    })

    this.setState({
      tasks:arr
    })
  }
    
  
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange}/>
        <button className="button" onClick={this.handleSubmit}>Add to List</button>
        <ul>
        {
          this.state.tasks.map((taskObj)=>(
            <li key="taskObj.id">
              <p>{taskObj.task}</p>
              <button className="dlt" onClick={()=> this.handleDelete(taskObj.id)}><img src="https://image.pngaaa.com/737/896737-middle.png"/></button>
            </li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default ToDo;