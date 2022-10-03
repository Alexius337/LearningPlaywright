const { chromium } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://paint.js.org/');
    
    // move mouse to first coordinate and press mouse button
    await page.mouse.move(200, 200)
    await page.mouse.down()

    // draw a circle
    await page.mouse.move(400, 200)
    await page.mouse.move(400, 400)
    await page.mouse.move(200, 400)
    await page.mouse.move(200, 200)

    // release the mouse button
    await page.mouse.up()
    
    await browser.close();
})();