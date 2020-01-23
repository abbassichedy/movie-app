import {ADD_TODO, REMOVE_TODO, EDITINPT_TODO, COPMLETE_TASK} from '../Action/Actiontype'
const tab=[]
const Todoreduceur = (state = tab, action) => {
	switch (action.type) {
		case ADD_TODO:
            return state.concat(action.payload)
            case REMOVE_TODO:
                return state.filter((el,i)=>(el.id!==action.payload))
                case COPMLETE_TASK:
                     return state.map((el,i)=>el.id===action.payload?{...el,isComplete:!el.isComplete}:el)
                        case EDITINPT_TODO:
                            return state.map(el => el.id === action.payload.id? {...el,text:action.payload.newName}:el);





                    default:
			return state
	}
}

export default Todoreduceur