import React from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import { connect } from 'react-redux'

const CompanyList = (props) => {
  const showCompanies = (props.searchResults || props.sortCompanies) || props.companies
  return (
    <div className='six wide column'>
      <Card.Group ui centered>          
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

const mapStateToProps = ({ companies, searchResults, sortedCompanies }) => {
  return { 
    companies: companies,
    searchResults: searchResults,
    sortCompanies: sortedCompanies
  }
}

export default connect(mapStateToProps)(CompanyList);
