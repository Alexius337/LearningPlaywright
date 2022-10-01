const { chromium } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 400});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    
    // code to handle the alerts
    // dispatch object dialog
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.click('#confirmButton');

    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('my message');
    })
    await page.click('#promtButton');

    // close the browser
    await browser.close();
})();