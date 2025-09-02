import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from '@playwright/test';

let alertText: string;

Given('I navigate to the webdriveruniversity login page', async () => {
    await pageFixture.page.goto("https://webdriveruniversity.com/Login-Portal/index.html?")
});

When('I input a username {word}', async (username: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Username' })
        .fill(username);
    // await pageFixture.page.pause();
});

When('I input a password {word}', async (password: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Password' })
        .fill(password);
});


When('i click on the login button', async () => {
    // handle the dialog manually
    await pageFixture.page.on("dialog", async (alert) => {
        alertText = alert.message();
        await alert.accept()
    })
    const login_button = pageFixture.page.locator("#login-button");
    await login_button.hover();
    await login_button.click({ force: true });
});

Then('it should be presented with a message in alert box which contains text {string}', async (expectedAlertText: string) => {
    expect(alertText).toBe(expectedAlertText);
});