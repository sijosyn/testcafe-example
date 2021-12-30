import { Selector } from 'testcafe';

class storePage {

    storeIcon = Selector('[title="Stores"]');
    storeLocationSearchBox = Selector('#store-locator__search')
    searchButton = Selector('.search-submit');
    storeLocatorSectionListItem = Selector('.store-locator-section--list_item');

    locatorErrorMessages = Selector('.locator_error_messages');

    unrecognizedSearchterm = this.locatorErrorMessages.withText(`We weren't able to find the location you entered. Please try again.`);
    noSearchterm = this.locatorErrorMessages.withText(`Please enter city or zip code`);
    noStoresFound = this.locatorErrorMessages.withText(`No stores found`);
}

export let store = new storePage();
