import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortedCompanies } from '../redux/actions'


class SortedCompanies extends Component {
    state = {
        showSortedCo: false
    }

    sortCompanies = () => {
        if(this.state.showSortedCo === true) {
            this.props.dispatch(sortedCompanies(null))
            this.setState({ showSortedCo: !this.state.showSortedCo })
        } else {
            this.setState({ showSortedCo: !this.state.showSortedCo })
            let companies = this.props.companies
            let updatedCompanies = companies.slice().sort( 
              (a, b) => b.financialPerformanceScore - a.financialPerformanceScore   
              )
            this.props.dispatch(sortedCompanies(updatedCompanies))
        }
      }

    render() {
        return (
            <div>
                <Button onClick ={this.sortCompanies} >Sort by Highest Financial Performance</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ companies, searchResults }) => {
    return { 
        companies: companies,
        searchResults: searchResults
    }
}


export default connect(mapStateToProps)(SortedCompanies)