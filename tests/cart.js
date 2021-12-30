import { cart } from '../pages/cart';
import { search } from '../pages/search';

fixture`Cart functionality fixture`
    .page`https://www.darphin.com/`
    .beforeEach(async t => {
		await t.maximizeWindow();
	});

test('Check add to cart functionality', async t => {
    // Click cart icon
    await t.click(cart.bagIcon);

    // Verify empty basket is displayed
    await t.expect(cart.emtpyBasketText.visible).ok();

    // Click search icon and search for milk
    await t.click(search.searchIcon);
    await t.typeText(search.searchTextBox, 'milk');

    // Hit enter key to navigate to search results page
    await t.pressKey('enter');

    // Hit esc key to dismiss the modal
    await t.pressKey('esc');

    // Click add to bag
    await t.click(search.addToBag);

    // Verify cart count equals one
    await t.expect(cart.cartCount.textContent).eql('1');

});