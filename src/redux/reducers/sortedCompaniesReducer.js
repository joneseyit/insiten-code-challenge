export function sortedCompaniesReducer(state = null, action){
    switch(action.type){
        case 'SORTED_COMPANIES':
            return action.companies
        default: 
            return state
    }
}