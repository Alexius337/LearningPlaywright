const { chromium } = require('playwright'); // can use webkit, firefox 

// must follow async/wait pattern
// must use await
( async() => {
    //function code
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');
    
    // print the element state
    const firstName = await page.$('#firstName')
    const sportsCheck = await page.$('#hobbies-checkbox-1')
    const submitButton = await page.$('#submit')

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());

    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());

    console.log(await submitButton.isHidden());
    console.log(await submitButton.isVisible());


    await browser.close();
})();