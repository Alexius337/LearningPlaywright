const { chromium } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');

    // take a screenshot
    await page.screenshot({path: 'screenshot.png'})

    await browser.close();
})();