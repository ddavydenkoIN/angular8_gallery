import { AfterViewInit } from "@angular/core";

import { debounceTime, filter, takeUntil } from "rxjs/operators";

import { AgSearchService } from "../../modules/common/search/services/ag-search.service";
import { AgUnsubscribe } from "./ag-unsubscribe";
import { HIGHLIGHT_CLOSE_TAG, HIGHLIGHT_OPEN_TAG, SEARCHABLE_NODE_CLASS_NAME } from "../../consts";

export abstract class AgWordsHighlighter extends AgUnsubscribe implements AfterViewInit {

  constructor(protected searchService: AgSearchService) {
    super();
  }

  ngAfterViewInit(): void {
    this.searchService.getSearchValuePairs()
      .pipe(
        debounceTime(100),
        takeUntil(this.destroy$),
        filter(([prevValue, currValue]: [string, string]) => {
          return !!currValue || currValue === '';
        })
      )
      .subscribe(([prevValue, currValue]: [string, string]) => {
        const elements = document.getElementsByClassName(SEARCHABLE_NODE_CLASS_NAME);
        if (elements && elements.length) {
          [].forEach.call(elements, function(el: HTMLElement) {
            if (currValue) {
              if (prevValue) {
                el.innerHTML = removeHighlight(el, prevValue);
              }
              el.innerHTML = addHighlight(el, currValue);
            } else {
              el.innerHTML = removeHighlight(el, prevValue);
            }
          });
        }
      });
  }
}

function addHighlight(el: HTMLElement, searchValue: string): string {
  const innerHTML = el.innerHTML;
  const reversedIndexArray = calcIndexArray(innerHTML, searchValue).reverse();

  if (reversedIndexArray.length) {
    const replacementArr = reversedIndexArray
      .reduce((acc, curr) => {
        const textToHighlight = innerHTML.substr(curr, searchValue.length);
        acc.push({
          replacement: buildHighlightTag(textToHighlight),
          toReplace: textToHighlight
        });
        return acc;
      }, []);
    return replacementArr
      .reduce((acc: string[], curr, index) => {
        acc.splice(reversedIndexArray[index], curr.toReplace.length, curr.replacement);
        return acc;
      }, innerHTML.split(''))
      .join('');
  } else {
    return innerHTML;
  }
}

function removeHighlight(el: HTMLElement, previousValue: string): string {
  const innerHTML = el.innerHTML;
  const indexArray = calcIndexArray(innerHTML, previousValue);

  if (indexArray.length) {
    const replacementArr = indexArray
      .reduce((acc, curr) => {
        const textToHighlight = innerHTML.substr(curr, previousValue.length);
        acc.push({
            replacement: textToHighlight,
            textToHighlight: buildHighlightTag(textToHighlight)
          });
          return acc;
        }, []);
    return replacementArr.reduce((acc: string, curr) => acc.replace(curr.textToHighlight, curr.replacement), innerHTML);
  } else {
    return innerHTML;
  }
}

function calcIndexArray(target: string, searchValue: string): number[] {
  const result = [];
  for (let i = 0; i < target.length; ++i) {
    if (target.substring(i, i + searchValue.length).toLowerCase() === searchValue.toLowerCase()) {
      result.push(i);
    }
  }
  return result;
}

function buildHighlightTag(text: string): string {
  return HIGHLIGHT_OPEN_TAG.concat(text).concat(HIGHLIGHT_CLOSE_TAG);
}
