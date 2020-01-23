import React, { Component } from 'react'
import {connect} from "react-redux"
import {removetodo, edittodo,completetodo} from '../Action/Action'
class General extends Component {
    state={
        isEditing:false,
        taskField:""
    }
    handleClick=()=>{
        this.setState({isEditing:!this.state.isEditing})
    }
    handleChange =(e)=> {
        this.setState({ taskField: e.target.value });
      };


    render() {
        return (
            <div>
                {this.props.items.map((el,i)=>
                <div >
                <p style={textDecorationel.isComplete?"line-through":"none"} className={this.state.isEditing&&'displayInput'}>{el.text}</p>
                
                <input style={{display:this.state.isEditing?'inline':'none'}} value={this.state.taskField} onChange={this.handleChange}></input>    
                 <button onClick={()=>this.props.complete(el.id)}>{el.isComplete?"undo":"Complete"}</button>
               <button onClick={()=>this.props.remove(el.id)}>X</button>
               <button onClick={()=>{this.props.editinput(this.state.taskField,el.id);this.handleClick()}}>EDIT</button>
                </div>
                )
                }
                
            </div>
        )
    }
}
const mapStateToProps=state=>({
    items:state
})
const mapDispatchToProps=dispatch=>({
    remove:(id)=>dispatch(removetodo(id)),
    complete:(id)=>dispatch(completetodo(id)),
    editinput:(newName,id)=>dispatch(edittodo(newName,id))

})
 
export default connect(mapStateToProps,mapDispatchToProps) (General)