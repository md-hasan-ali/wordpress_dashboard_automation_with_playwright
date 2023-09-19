import { Given, When, Then } from "@cucumber/cucumber";
import { expect, _android } from "@playwright/test";
var {setDefaultTimeout} = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);
import locatorsPage from "../locators/locators";
const locator = new locatorsPage();

// Show all writers 
Given('User login into wordpress website', async function () {
    await global.page.goto(locator.wp_url);
});
Then('Enter the userName, password and click on login button', async()=> {
    await global.page.locator(locator.userName).fill("admin")
    await global.page.locator(locator.password).fill("123456")
    await global.page.locator(locator.wp_login).click()
})

// WP Dark Mode Pluging active or Not
Then('Click on the plugings button and enter the "WP Dark Mode" plugin', async()=> {
    await global.page.locator(locator.plugings).click()
    await global.page.locator(locator.instaledPluginSearch).fill("WP Dark Mode")
    await global.page.keyboard.press('Enter');
})
Then("The “WP Dark Mode” Plugin is not Active", async()=> {
    await expect(global.page.locator(locator.no_items)).toBeVisible();
})

// Install the Plugin and Activate it
Then("Click on the Plugins button", async()=> {
    await global.page.locator(locator.plugings).click()
})
Then("Click on the 'Add New' button", async()=> {
    await global.page.locator(locator.add_new_button).click()
})
Then("Search the 'WP Dark Mode' pugin", async()=> {
    await global.page.locator(locator.search_plugin_input).fill("WP Dark Mode")
    await global.page.keyboard.press('Enter');
})
Then("Click on the install buttn and click on the activate button", async()=> {
    await global.page.locator(locator.install_button).click()
    await global.page.locator(locator.activate_button).click()
})


// Enable Backend Darkmode from Settings 
Then("Click on the 'WP Dark Mode'", async()=> {
    await global.page.locator(locator.wp_dark_mode).click()
})
Then("Click on the 'Enable Backend Darkmode' button", async()=> {
    await global.page.locator(locator.enabled_backend_darkmode).click()
})
Then("Click on the 'Save Settings' button", async()=> {
    await global.page.locator(locator.save_settings).click()
})

// Darkmode is working or not
Then('whether the Darkmode is working on the admin dashboard', async()=> {
  await expect(global.page.locator(locator.dark_mode_active)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
})

// Change the “Floating Switch Style” from the default selections
Then('Click on the switch settings', async()=> {
    await global.page.locator(locator.swicth_settings).click()
})
Then('Select the "floating Switch style"', async()=> {
    await global.page.locator(locator.select_one).click()
})
Then('Click on the save settings button', async()=> {
    await global.page.locator(locator.save_setting_btn).click()
})

//  Select Custom Switch size 
Then('Switch size to xxl', async()=> {
    await global.page.locator(locator.xxL_size).click()
})

//  Change the Floating Switch Position
Then('Change the Floating Switch Position Left Bottom', async()=> {
    // await global.page.locator(locator.floating_switch_position).selectOption('left bottom')
    await global.page.locator(locator.floating_switch_position).click()
    await global.page.locator(locator.left_bottom).click({force: true})
})


// Disable Keyboard Shortcut from the Accessibility Settings.
Then('Click on the accessibility settings', async()=> {
    await global.page.locator(locator.accessibily_settings).click()
})
Then('Click on the keyboard shortcut radio button', async()=> {
    await global.page.locator(locator.disable_keyboard_shortcut).click()
})
Then('Click on the save settings button of Accessibility settings', async()=> {
    await global.page.locator(locator.save_settings1).click()
})


// Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections
Then('Click on the animation button', async()=> {
    await global.page.locator(locator.animation).click()
})
Then('Enable the dark mode toggle button', async()=> {
    await global.page.locator(locator.darkModeToggle).click()
})
Then('Click on the save settings of animation page', async()=> {
    await global.page.locator(locator.save_settings2).click()
})



