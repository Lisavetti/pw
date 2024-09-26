const { test, expect } = require('@playwright/test');

test('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click');
    
    // >>>>> дополнить код здесь
    await page.locator("#badButton").click();
    // 

    expect (await page.locator("#badButton").getAttribute('class')).toMatch(/btn-success/);
});

test('checkbox and radio', async({page}) => {
    await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
      
    // >>>>> дополнить код здесь
    await page.locator("[for=radio-1]").click();
    expect (await page.locator("[for=radio-1]").getAttribute('class')).toMatch(/ui-state-active/);

    await page.locator("[for=checkbox-4]").click();
    expect (await page.locator("[for=checkbox-4]").getAttribute('class')).toMatch(/ui-state-active/);

    await page.locator("[for=checkbox-nested-3]").click();
    expect (await page.locator("[for=checkbox-nested-3]").getAttribute('class')).toMatch(/ui-state-active/);

    await page.locator("[for=checkbox-nested-4]").click();
    expect (await page.locator("[for=checkbox-nested-4]").getAttribute('class')).toMatch(/ui-state-active/);
    // 

});
