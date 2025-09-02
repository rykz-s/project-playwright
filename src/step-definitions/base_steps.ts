import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

When('I switch to the new browser tab', async () => {
    await pageFixture.context.waitForEvent("page"); //reinitialise the page > new tab > page
    
    //Retrieve all current open pages (tabs)
    const allPages = await pageFixture.context.pages();

    //Assign the most recent tab to pageFixture.page
    pageFixture.page = allPages[allPages.length - 1];

    //Bring th enewly assigned tab to the front (Make it active)
    await pageFixture.page.bringToFront();

    //Ensure the newly assigned tab is also fully maximized
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
});