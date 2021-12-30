import { Selector } from 'testcafe';

class accountPage {

    myAccount = Selector('[title="MY ACCOUNT"]');
    emailAddress = Selector('[name="EMAIL_ADDRESS"]')
   
}

export let account = new accountPage();