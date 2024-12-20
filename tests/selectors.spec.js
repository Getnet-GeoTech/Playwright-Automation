import {test, expect} from '@playwright/test';
import { waitForDebugger } from 'inspector';

test('Selectors demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    
//uses any object property to find the element
    await page.click('#user-name')
    await page.locator('#user-name').fill('Edison')
    await page.locator('[id = "user-name"]').fill('Getnet')
    await page.locator('[placeholder = "Password"]').fill('12345678')

    //using CSS selectors
    //Login button
    await page.locator('#login-button').click()


    //using xpath
    await page.locator('xpath = //input[@name="password"]').fill('Faraday')
    await page.locator('xpath = //input[@name="password"]').press('Enter')

    //using text
    //await page.locator('text = user-name').fill('Getnet')
    //await page.locator('text = password').fill('12345678')
    await page.locator('text = LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
});