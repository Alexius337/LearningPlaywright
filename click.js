const { chromium } = require('playwright'); // can use webkit, firefox 

( async() => {
    // function code
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    
    // click on the key notes
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
    
    
    await browser.close();

})();