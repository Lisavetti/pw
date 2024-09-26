import { test, expect } from '@playwright/test';


test('Check login form', async({page}) => {
    await page.goto('http://uitestingplayground.com/sampleapp');

    let login = 'TestLogin';
    await page.locator('[name="UserName"]').fill(login);

    await page.locator('[name="Password"]').fill('pwd');

    await page.locator('#login').click();

    expect (await page.locator('#loginstatus').getAttribute('class')).toMatch(/text-success/);
})
