import { Selector } from 'testcafe';

class searchPage {

    searchIcon = Selector('.js-esearch-open-icon');
    searchTextBox = Selector('[name=search]');
    searchSuggestionItem = Selector('.search-suggestions__item');
    productResults = Selector('.product-results');
    esearchProduct = Selector('.esearch-product');
    searchNoResults = Selector('.search-no-results');
}

export let search = new searchPage();
