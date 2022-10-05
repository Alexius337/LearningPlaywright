const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];

(async()=>{
    // mobile code
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation: { latitude: 47.6062, longitude: 122.3321},
        locale: 'fr-FR'
    });

    const page = await context.newPage();
    await page.goto('https://www.google.com/maps')
    await page.waitForTimeout(5000);
    await browser.close();
})();
