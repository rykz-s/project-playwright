import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";

let browser: Browser;

// Run before all scenarios
BeforeAll(async function (){
    console.log("\nExecuting test suite...");
});

// Run after all scenarios
AfterAll(async function (){
    console.log("\nFinish execution of test suite.");
});

// Before hook : Runs before each scenario
Before(async function(){
    //Setup browser instance
    browser = await chromium.launch({headless: false});
    pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 }});
    pageFixture.page = await pageFixture.context.newPage();
});

// After : Runs after each scenario
After(async function(){
    await pageFixture.page.close();
    await browser.close();
});

