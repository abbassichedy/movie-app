import React, { Component } from 'react'
import './Todo.css'
import {addTodo} from '../Action/Action'
import {connect} from 'react-redux'
 class Todo extends Component {
    state = {
            newtodo:"",
      
      }
      onchange=(e)=>{
          this.setState({newtodo:e.target.value})
      }
      vide=()=>{
          this.setState({
              newtodo:""
          })
      }
    render() {
        return (
            <div  className="todo">
                <p className="text">TO     DO</p>
                <input placeholder="            text    .......       to do " value={this.state.newtodo} onChange={this.onchange} ></input>
                <button onClick={()=>{this.props.add({text:this.state.newtodo,id:Date.now(),isComplete:false});this.vide()}}> +</button>
                
            </div>
        )
    }
}const mapDispatchToProps=dispatch=>({
    add:(newtodo)=>dispatch(addTodo(newtodo))
})
 
export default connect(null,mapDispatchToProps) (Todo)


