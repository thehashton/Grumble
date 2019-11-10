import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import { gql } from "apollo-boost";
const algoliasearch = require("algoliasearch/lite");
import {
  InstantSearch,
  Hits,
  Highlight,
  SearchBox,
  Configure,
  connectStateResults
} from "react-instantsearch-dom";

import { client } from "../..";
import "./Search.scss";

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

const searchClient = algoliasearch(
  "EALR2V1LWB",
  "c57937790492fbff9353e34c083da0da"
);

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
      <div>No query</div>
    )
  );

  return (
    <div className="search">
      <InstantSearch indexName="eateries" searchClient={searchClient}>
        <SearchBox />
        {new Content(SearchResults)}
        <Configure hitsPerPage={20} />
      </InstantSearch>

      <ApolloProvider client={client}>
        <Query query={EATERY_QUERY}>
          {({ loading, data }: any) => {
            if (loading) return "Loading...";
            const { eateries } = data;

            return eateries.map((eatery: any) => (
              <>{/* <p>{eatery.name}</p> */}</>
            ));
          }}
        </Query>
      </ApolloProvider>
    </div>
  );
};

export const SearchResults = (props: any) => {
  return (
    <article className="search-item">
      <p>
        <Highlight key={props.id} attribute="name" hit={props.hit} />
      </p>
      <p>
        <Highlight key={props.id} attribute="foodType" hit={props.hit} />
      </p>
    </article>
  );
};

export default Search;
