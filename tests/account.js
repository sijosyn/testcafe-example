import { account } from '../pages/account';
import { util } from '../pages/common';

fixture`Account functionality fixture`
    .page`https://www.darphin.com/`
    .beforeEach(async t => {
		await t.maximizeWindow();
	});

test('Check account sign up functionality', async t => {
    // Click account icon
    await t.click(account.myAccount);

    // Generate a unique email address
    let email = util.generateUniqueString();
    
    // Enter email address and click log in
    await t.typeText(account.emailAddress, email);
    await t.click(account.logIn);

    // Enter first, last, password, click signup checkbox and click sign up
    await t.typeText(account.firstName, 'First');
    await t.typeText(account.lastName, 'Last');
    await t.typeText(account.password, 'Password2021');
    await t.click(account.logInCheckbox, { offsetX: 10 });
    await t.click(account.signUp, {speed: 0.5});

    // Check account profile header exists and email address provided is displayed on account profile page
    await t.expect(account.accountProfileText.exists).ok();
    await t.expect(account.accountProfileEmailContent.textContent).contains(email);
});

test.only('Check password error on account sign up', async t => {
    // Click account icon
    await t.click(account.myAccount);

    // Generate a unique email address
    let email = util.generateUniqueString();
    
    // Enter email address and click log in
    await t.typeText(account.emailAddress, email);
    await t.click(account.logIn);

    // Enter first, last, password, click signup checkbox and click sign up
    await t.typeText(account.firstName, 'First');
    await t.typeText(account.lastName, 'Last');
    await t.typeText(account.password, 'Password');
    await t.click(account.logInCheckbox, { offsetX: 10 });
    await t.click(account.signUp, {speed: 0.5});

    // Hit esc key to dismiss the modal
    await t.pressKey('esc');

    // Verify password error page is displayed
    await t.expect(account.errorPassword.visible).ok();
});