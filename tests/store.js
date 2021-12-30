import { store } from '../pages/store';

fixture`Store locator functionality fixture`
    .page`https://www.darphin.com/`
    .beforeEach(async t => {
		await t.maximizeWindow();
	});

test('Check valid store locator functionality', async t => {
    // Click location icon
    await t.click(store.storeIcon);

    // Hit esc key to dismiss the modal
    await t.pressKey('esc');

    // Enter zip code
    await t.typeText(store.storeLocationSearchBox, '78641')
            .click(store.searchButton);

    // Verify store list item count
    await t.expect(store.storeLocatorSectionListItem.count).eql(2);

});

test('Check invalid zip code', async t => {
    // Click location icon
    await t.click(store.storeIcon);

    // Hit esc key to dismiss the modal
    await t.pressKey('esc');

    // Enter zip code
    await t.typeText(store.storeLocationSearchBox, '00000')
            .click(store.searchButton);

    // Verify error message
    await t.expect(store.unrecognizedSearchterm.visible).ok();

});

test('Check empty zip code', async t => {
    // Click location icon
    await t.click(store.storeIcon);

    // Hit esc key to dismiss the modal
    await t.pressKey('esc');

    // Click search button
    await t.click(store.searchButton);

    // Verify error message
    await t.expect(store.noSearchterm.visible).ok();

});

test('Check no stores found', async t => {
    // Click location icon
    await t.click(store.storeIcon);

    // Hit esc key to dismiss the modal
    await t.pressKey('esc');

    // Enter zip code
    await t.typeText(store.storeLocationSearchBox, '32335')
            .click(store.searchButton);

    // Verify error message
    await t.expect(store.noStoresFound.visible).ok();

});