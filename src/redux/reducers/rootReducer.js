import { combineReducers } from 'redux'
import { companiesReducer } from './companiesReducer'
import { searchResultsReducer } from "./searchResultsReducer";
import { sortedCompaniesReducer } from "./sortedCompaniesReducer";
import { searchTermReducer } from './searchTermReducer'
import { showSortedListReducer } from './showSortedListReducer'

export default combineReducers({
    companies: companiesReducer,
    searchResults: searchResultsReducer,
    sortedCompanies: sortedCompaniesReducer,
    searchTerm: searchTermReducer,
    showSortedList: showSortedListReducer
})