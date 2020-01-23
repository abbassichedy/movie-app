
import {ADD_TODO, REMOVE_TODO, EDITINPT_TODO, COPMLETE_TASK} from './Actiontype'

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload:text
	
})
export const removetodo=(id)=>({
type:REMOVE_TODO,
payload:id

})
export const edittodo=(newName,id)=>({
    type:EDITINPT_TODO,
    payload:{newName,id}
})
export const completetodo=(id)=>({
        type:COPMLETE_TASK,payload:id
})