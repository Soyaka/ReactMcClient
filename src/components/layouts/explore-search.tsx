import React, { useState, useEffect } from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
} from "@elastic/react-search-ui";
import type { SearchContextState, SearchResult } from "@elastic/search-ui";
import { BaseContainerProps } from "@elastic/react-search-ui-views";
import { ResultViewProps } from "@elastic/react-search-ui-views";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import ExploreBodyView from "../views/explore-body-view";
import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  getConfig,
  getFacetFields
} from "@/config/config-helper";

interface Config {
  hostIdentifier?: string;
  searchKey?: string;
  endpointBase?: string;
  engineName?: string;
  titleField?: string;
  urlField?: string;
  thumbnailField?: string;
  facets?: string[];
  sortFields?: string[];
  searchFields?: string[];
  resultFields?: string[];
  querySuggestFields?: string[];
}

const config = getConfig() as Config;

const connector = new AppSearchAPIConnector({
  searchKey: config.searchKey!,
  engineName: config.engineName!,
  hostIdentifier: config.hostIdentifier!,
  endpointBase: config.endpointBase!
});

const searchProviderConfig = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};
const makeResult =(results:any)=>{
  const norms =[]
  for (let i = 0; i < results.length; i++) {
    norms.push(results[i].props.result)
  }
  return norms
}


export  function Comp( result: any) {

  const itemms =  makeResult(result.children)
  console.log(itemms)

 return (
   <div>
   </div>
 )
} 



export default function ExploreSearch() {
  const [wasSearched, setWasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // console.log(searchResults);
    setWasSearched(true);
  }, [searchResults]);

  return (
    <SearchProvider config={searchProviderConfig}>
      <div className="">
        <ErrorBoundary>
          <Layout
            header={<SearchBox
              autocompleteSuggestions={true}
              searchAsYouType
              shouldClearFilters={true}
            />}
            sideContent={
              <div className="" >
                {getFacetFields().map(field => (
                  <Facet
                    key={field}
                    field={field}
                    label={field}

                  />
                ))}
              </div>
            }
            bodyContent={

              <Results
                titleField={config.titleField}
                urlField={config.urlField}
                thumbnailField={config.thumbnailField}
                shouldTrackClickThrough={true}

              view={ExploreBodyView}
              />
            }
          />
        </ErrorBoundary>
      </div>
    </SearchProvider>
  );
}


