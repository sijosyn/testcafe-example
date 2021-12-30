import { search } from '../pages/search';

fixture`Search functionality fixture`
    .page`https://www.darphin.com/`
    .beforeEach(async t => {
		await t.maximizeWindow();
	});

test('Check search suggestion works and matches search result items', async t => {
    // Click search icon and search for milk
    await t.click(search.searchIcon);
    await t.typeText(search.searchTextBox, 'milk');
    
    // Check the product results suggestion box is visible
    await t.expect(search.productResults.visible).ok();
    
    // Extract the number of search result items from search suggestion
    let text = await search.searchSuggestionItem.textContent;
    let itemNumber =text.replace(/\D/g,"")
    
    // Hit enter key to navigate to search results page
    await t.pressKey('enter');

    // Verify the search results shows the expected number of items
    await t.expect(search.esearchProduct.count).eql(parseInt(itemNumber));
});


test('Check search returns no matching items', async t => {
    // Click search icon and search for milk
    await t.click(search.searchIcon);
    await t.typeText(search.searchTextBox, 'honey');
    
    // Check the product results suggestion box is not shown
    await t.expect(search.productResults.visible).notOk();
    
    // Hit enter key to navigate to search results page
    await t.pressKey('enter');

    // Verify no items found matching text is displayed
    await t.expect(search.searchNoResults.textContent).contains('No items found matching');
});