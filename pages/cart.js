import { Selector } from 'testcafe';

class cartPage {

    bagIcon = Selector('.icon.icon--bag');
    emtpyBasketText = Selector('div').withText('Empty Basket');
    contentHeader = Selector('.gnav-util__content-header');

    cartCount = Selector('.gnav-util-cart__count');
   
}

export let cart = new cartPage();
