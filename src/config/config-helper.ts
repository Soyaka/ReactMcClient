import { resolveAny } from "dns";
import config from "./engine.json";

interface Config {
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

export function getConfig(): Config {
  if (process.env.NODE_ENV === "test") {
    return {};
  }

  const windowConfig = (window as unknown as Window & { appConfig: any }).appConfig;
  if (config.engineName) {
    return config;
  } else if (windowConfig && windowConfig.engineName) {
    return windowConfig;
  }
  return {};
}

function toLowerCase(string: string): string {
  return string.toLowerCase();
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getTitleField(): string {
  return getConfig().titleField || "title";
}

export function getUrlField(): string | undefined {
  return getConfig().urlField;
}

export function getThumbnailField(): string | undefined {
  return getConfig().thumbnailField;
}

export function getFacetFields(): string[] {
  return getConfig().facets || [];
}

export function getSortFields(): string[] {
  return getConfig().sortFields || [];
}

export function getResultTitle(result: any): string {
  const titleField = getTitleField();
  return result.getSnippet(titleField);
}

export function stripUnnecessaryResultFields(resultFields: any): any {
  return Object.keys(resultFields).reduce((acc, n) => {
    if (["_meta", "id", toLowerCase(getTitleField()), toLowerCase(getUrlField()!), toLowerCase(getThumbnailField()!)].includes(toLowerCase(n))) {
      return acc;
    }
    return {
      ...acc,
      [n]: resultFields[n],
    };
  }, {});
}

export function buildSearchOptionsFromConfig(): any {
  const config = getConfig();
  const searchFields = (config.searchFields || config.resultFields || ["title"]).reduce((acc, n) => {
    acc = acc || {};
    acc[n] = {};
    return acc;
  }, {} as Record<string, {}>);

  const resultFields = (config.resultFields || config.searchFields || ["title"]).reduce((acc, n) => {
    acc = acc || {};
    acc[n] = {
      raw: {},
      snippet: {
        size: 100,
        fallback: true
      }
    };
    return acc;
  }, {} as Record<string, { raw: {}; snippet: { size: number; fallback: boolean } }>);

  if (config.urlField) {
    resultFields[config.urlField] = {
      raw: {},
      snippet: {
        size: 100,
        fallback: true
      }
    };
  }

  if (config.thumbnailField) {
    resultFields[config.thumbnailField] = {
      raw: {},
      snippet: {
        size: 100,
        fallback: true
      }
    };
  }

  if (config.titleField) {
    resultFields[config.titleField] = {
      raw: {},
      snippet: {
        size: 100,
        fallback: true
      }
    };
  }

  const searchOptions = {
    result_fields: resultFields,
    search_fields: searchFields,
    facets: buildFacetConfigFromConfig()
  };
  return searchOptions;
}

export function buildFacetConfigFromConfig(): any {
  const config = getConfig();
  const facets = (config.facets || []).reduce((acc, n) => {
    acc = acc || {};
    acc[n] = {
      type: "value",
      size: 100
    };
    return acc;
  }, {} as Record<string, { type: string; size: number }>);

  return facets;
}

export function buildSortOptionsFromConfig(): any {
  const config = getConfig();
  return [
    {
      name: "Relevance",
      value: "",
      direction: ""
    },
    ...(config.sortFields || []).reduce((acc, sortField) => {
      acc.push({
        name: `${capitalizeFirstLetter(sortField)} ASC`,
        value: sortField,
        direction: "asc"
      });
      acc.push({
        name: `${capitalizeFirstLetter(sortField)} DESC`,
        value: sortField,
        direction: "desc"
      });
      return acc;
    }, [] as { name: string; value: string; direction: string }[])
  ];
}

export function buildAutocompleteQueryConfig(): any {
  const querySuggestFields = getConfig().querySuggestFields || [];
  if (!Array.isArray(querySuggestFields) || querySuggestFields.length === 0) {
    return {};
  }

  return {
    suggestions: {
      types: {
        documents: {
          fields: querySuggestFields
        }
      }
    }
  };
}
