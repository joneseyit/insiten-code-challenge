import React from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import { connect } from 'react-redux'


// const showCompanies = ( ( props.searchTerm !== ''  && props.searchResults ) || props.sortCompanies) || props.companies


const CompanyList = (props) => {
  let showCompanies;
  if(props.searchTerm !== '' && props.showSortedList) {
    showCompanies = props.sortedCompanies
  } else if(props.searchTerm !== ''){
    showCompanies = props.searchResults
  } else if(props.showSortedList){
    showCompanies = props.sortedCompanies
  } else {
    showCompanies = props.companies
  }
  return (
    <div>
      <Card.Group ui centered itemsPerRow={6}>          
        {showCompanies.map(company => (
          <CompanyCard
            key = {company.id}
            company={company}
            handleEditClick={props.handleEditClick}
          />
        ))}
      </Card.Group>  
    </div>
  );
}

const mapStateToProps = ({ companies, searchResults, sortedCompanies, searchTerm, showSortedList }) => {
  return { 
    companies: companies,
    searchResults: searchResults,
    sortedCompanies: sortedCompanies,
    searchTerm: searchTerm,
    showSortedList: showSortedList
  }
}

export default connect(mapStateToProps)(CompanyList);
