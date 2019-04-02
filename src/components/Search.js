import React from 'react';
import { connect } from 'react-redux';
import { addSearchResults, updateSearchTerm } from '../redux/actions';


class Search extends React.Component {

    
    handleSearchChange = (e) => {
        let searchTerm = e.target.value.toLowerCase()
        this.props.dispatch(updateSearchTerm(searchTerm))
        let searchResults = this.props.companies.filter( 
        company => company.name.toLowerCase().includes(searchTerm)
        )
        this.props.dispatch(addSearchResults(searchResults))
    };

    render(){
        return(
            <div className="ui icon input">
                <input
                    type='text'
                    placeholder='Search by company name'
                    onChange={(e) => this.handleSearchChange(e)}
                />
            </div>
        )
    }

}

const mapStateToProps = ( {companies, sortedCompanies } ) => {
    return { 
        companies: companies, 
        sortedCompanies: sortedCompanies
    }
}

export default connect(mapStateToProps)(Search)