export function searchTermReducer(state = '', action){
    switch(action.type){
        case 'UPDATE_SEARCH_TERM':
            return action.term
        default: 
            return state
    }
}