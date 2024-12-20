import { test, expect } from '@playwright/test';

test('Login demo1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()

    await page.locator('#username').fill('Edison')
    await page.locator('#password').fill('12345')
    // await page.locator('[placeholder = "Enter your username"]').fill('Getnet')
    // await page.locator('[placeholder = "Enter your Password"]').fill('12345')

    await page.waitForSelector('text = Sign in', { timeout: 3000 })

    await page.locator('text = Sign in').click()
    await page.locator('text = ACME').isVisible()

})

test('Login demo2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'akhil chutiya' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // ---------------------
    await page.close();

})

test ('Login demo3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.pause()
})