const { chromium } = require('playwright'); // can use webkit, firefox 

( async() => {
    // create the browser object
    const browser = await chromium.launch({headless: false, slowMo: 100});
    
    // create the page object
    const page = await browser.newPage();

    // go to the page
    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    // create an object for the email field
    const email = await page.$('#email');

    // type user email into email field with 50ms delay for each letter
    await email.type('myemail@gmail.com', { delay : 50})

    //close the browser
    await browser.close();
})();