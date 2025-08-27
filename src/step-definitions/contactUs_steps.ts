import { AfterAll, Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from '@playwright/test';
import { faker } from "@faker-js/faker";

When('I type a first name', async () => {
    const firstName_field = pageFixture.page.getByRole('textbox', { name: 'First Name' });
    await firstName_field.fill("Ryu");
    // await pageFixture.page.pause();
});


When('I type a last name', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' }).fill("Andara")
});


When('I enter an email address', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).fill("ryukazuas@gmail.com")
});

When('I type a comment', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Comments' }).fill("The Comment");
});

When('I click on the submit button', async () => {
    // wait button until loaded
    await pageFixture.page.waitForSelector('input[value="SUBMIT"]');
    // once loaded, click on the button
    await pageFixture.page.click('input[value="SUBMIT"]');
});

Then('I should be presented with a succesful contact us submission message', async () => {
    // waiting for the header text element
    await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 60000 });

    // get the text from the h1 element
    const text = await pageFixture.page.innerText('#contact_reply h1');
    const expectedText = "Thank You for your Message!";
    // use playwright's "Expect" function to assert the text of the h1 element
    // await pageFixture.page.pause();
    expect(text).toBe(expectedText);
});

Then('I should be presented with a unsuccesful contact message', async () => {
    // Wait for the <body> element
    await pageFixture.page.waitForSelector("body");

    // Locate the <body> element
    const bodyElement = await pageFixture.page.locator("body");

    // Extract the text from body element
    const bodyText = await bodyElement.textContent();
    await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
});

// Cucumber Exppresion:

When('I type a specific first name {string}', async (firstName: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'First Name' })
        .fill(firstName);

});

When('I type a specific last name {string}', async (lastName: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' })
        .fill(lastName);
});


When('I enter a specific email address {string}', async (emailAddress: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' })
        .fill(emailAddress);
});

When('I type a specific text {string} and a number {int} within the comment input field', async (word: string, number: number) => {
    await pageFixture.page.getByRole('textbox', { name: 'Comments' })
        .fill(word + " " + number);
    // await pageFixture.page.pause();
});

// Random Data using Faker.js
When('I type a random first name', async () => {
    // Faker code
    const randomFirstName = faker.person.firstName();
    await pageFixture.page.getByRole('textbox', { name: 'First Name' })
        .fill(randomFirstName);
});

When('I type a random last name', async () => {
    // Faker code
    const randomLastName = faker.person.lastName();
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' })
        .fill(randomLastName);
});

When('I enter a random email address', async () => {
    // Faker code
    const randomEmail = faker.internet.email();
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' })
        .fill(randomEmail);
    await pageFixture.page.pause();
});