import { createStore } from 'redux'
import Todoreduceur from '../Reduceur/Reduceur.js'


export const store=createStore(Todoreduceur, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)