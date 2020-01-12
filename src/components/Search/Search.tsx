import React from "react";
import { gql } from "apollo-boost";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  connectStateResults
} from "react-instantsearch-dom";

import "./Search.scss";
import { EateryItem } from "../../RootComponents/Eatery/EateryItem";

const algoliasearch = require("algoliasearch/lite");

const EATERY_QUERY = gql`
  {
    eateries {
      id
      name
      address
      foodType
    }
  }
`;

const keys = require("../../../keys.json");
const searchClient = algoliasearch(keys.id, keys.key);

const fetchDataFromDatabase = () => {
  const eateries = EATERY_QUERY;
  return eateries;
};

const records = fetchDataFromDatabase();
//   index.addObjects(records);

export const Search: React.FunctionComponent = () => {
  const Content = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? (
      <div>
        <Hits hitComponent={SearchResults} />
      </div>
    ) : (
      <div className={"noQuery"}>No Query</div>
    )
  );

  return (
    <div className="search">
      <InstantSearch indexName="eateries" searchClient={searchClient}>
        <SearchBox />
        {new Content(SearchResults)}
        <Configure hitsPerPage={20} />
      </InstantSearch>
    </div>
  );
};

export const SearchResults = (props: any) => {
  return (
    <EateryItem
      key={props.id}
      id={props.id}
      name={props.hit.name}
      address={props.hit.address}
      foodType={props.hit.foodType}
    />
  );
};

export default Search;
