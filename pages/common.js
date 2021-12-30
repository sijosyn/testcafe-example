import { Selector } from 'testcafe';

class commonUtil {

    generateUniqueString() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var i=0; i<15; i++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return `${string}@gmail.com`;

    }
   
}

export let util = new commonUtil();