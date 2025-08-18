import { setDefaultTimeout} from "@cucumber/cucumber";

//if too low this will affect playwright timeouts
// Example exception : 'Error: function timed out, ensure the promise...'

setDefaultTimeout(60000); //60 seconds