export function showSortedListReducer(state = false, action){
    switch(action.type){
        case "SHOW_SORTED_LIST":
            let newState = !state
            return newState
        default:
            return state
    }
}