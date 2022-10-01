const { webkit } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await webkit.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');

    // logic to handle the iframes
    const frame1 = await page.frame({url: /\/sample/});
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText());

    // close the browser 
    await browser.close();
})();