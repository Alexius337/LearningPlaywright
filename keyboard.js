const { chromium } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    
    // click on the input field
    await page.click('input')
    // type some text into the input field
    await page.keyboard.type('One does not simply walk into Mordor.')

    // hold the shift button
    await page.keyboard.down('Shift')
    // select all text to delete
    for(let i=0; i<' walk into Mordor.'.length;i++){
        await page.keyboard.press('ArrowLeft')
    }
    // stop holding the shift button 
    await page.keyboard.up('Shift')
    // delete the selected text
    await page.keyboard.press('Backspace')

    // replace old text with some new text
    await page.keyboard.type(' write a test.')

    await browser.close();
})();