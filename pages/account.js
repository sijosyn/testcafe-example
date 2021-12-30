import { Selector } from 'testcafe';

class accountPage {

    myAccount = Selector('[title="MY ACCOUNT"]');
    emailAddress = Selector('[name="EMAIL_ADDRESS"]')
    logIn = Selector('[value="LOG IN"]');

    firstName = Selector('[name="FIRST_NAME"]');
    lastName = Selector('[name="LAST_NAME"]');
    password = Selector('[data-test-id="gnav_register_form_password"]');

    logInCheckbox = Selector('label').withText('BY CLICKING “LOG IN”, I AGREE TO THE DARPHIN');
    signUp = Selector('[value="SIGN UP"]')

    accountProfileText = Selector('.section-header').withText('Account Profile')
    accountProfileEmailContent = Selector('.account-profile__email-content');

    errorPassword = Selector('.error').withText('Please enter a password that is a minimum of 8 characters, including at least one upper case letter, one lower case letter, and one number.')
}

export let account = new accountPage();