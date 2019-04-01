import { combineReducers } from 'redux'
import { companiesReducer } from './companiesReducer'
import { searchResultsReducer } from "./searchResultsReducer";
import { sortedCompaniesReducer } from "./sortedCompaniesReducer";

export default combineReducers({
    companies: companiesReducer,
    searchResults: searchResultsReducer,
    sortedCompanies: sortedCompaniesReducer
})