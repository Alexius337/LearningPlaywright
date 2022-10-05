const { chromium } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    // record the video inside the context object
    const context = await browser.newContext({
        recordVideo: {
            dir:"./recordings"
        }
    });
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    
    // click on start button
    await page.click('button');
    // wait for loading to be displayed
    await page.waitForSelector('#loading');
    // wait for loading to be hidden
    await page.waitForSelector('#loading', {state: 'hidden'});
    // add timeout to help with visual debugging
    await page.waitForTimeout(100);

    await browser.close();
})();