import {AfterAll, Given, When} from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

When('I type a first name', async () => {
    const firstName_field = pageFixture.page.getByRole('textbox', { name: 'First Name' });
    await firstName_field.fill("Ryu");
    // await pageFixture.page.pause();
});