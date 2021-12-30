import { account } from '../pages/account';

fixture`Account functionality fixture`
    .page`https://www.darphin.com/`;

test('Check account sign up functionality', async t => {
    // Click search icon and search for milk
    await t.click(account.myAccount);
    
});
