const { chromium } = require('playwright'); // can use webkit, firefox 

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // create the dropdown object 
    const dropdown = await page.$('#dropdown');

    // can select by value, label, or index of dropdown
    // value
    await dropdown.selectOption({value: '1'})
    // label
    await dropdown.selectOption({label: 'Option 2'})
    // index
    await dropdown.selectOption({index: '1'});

    // values inside the dropdown
    const availableOptions = await dropdown.$$('option');
    for (let i=0; i<availableOptions.length; i++){
        console.log(await availableOptions[i].innerText());
    }

    await browser.close();
})();