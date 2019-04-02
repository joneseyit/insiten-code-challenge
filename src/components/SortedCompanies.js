import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortedCompanies, toggleSortedList } from '../redux/actions'


class SortedCompanies extends Component {

    sortCompanies = () => {
        if(this.props.showSortedList === true) {
            this.props.dispatch(sortedCompanies(null))
            this.props.dispatch(toggleSortedList(true))
        } else {
            this.props.dispatch(toggleSortedList(false))
            let companies = ((this.props.searchTerm !==  '') && this.props.searchResults) || this.props.companies
            let updatedCompanies = companies.slice().sort( 
              (a, b) => b.financialPerformanceScore - a.financialPerformanceScore   
              )
            this.props.dispatch(sortedCompanies(updatedCompanies))
        }
      }

    render() {
        return (
            <div>
                <Button 
                onClick ={this.sortCompanies} 
                >
                    Sort by Highest Financial Performance
                </Button>
            </div>
        )
    }
}

const mapStateToProps = ({ companies, searchResults, showSortedList, searchTerm }) => {
    return { 
        companies: companies,
        searchTerm: searchTerm,
        searchResults: searchResults,
        showSortedList: showSortedList
    }
}


export default connect(mapStateToProps)(SortedCompanies)