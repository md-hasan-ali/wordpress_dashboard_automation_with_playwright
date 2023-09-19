
Feature: Open Wordpress Website And Automate the bellow scenarios 

    #TC_01 (Login wordpress website)
    Background: Log in to your WordPress site 
        Given User login into wordpress website
        And Enter the userName, password and click on login button
        
    #TC_02
    Scenario: Check whether the “WP Dark Mode” Plugin is Active or not
        And Click on the plugings button and enter the "WP Dark Mode" plugin
        Then The “WP Dark Mode” Plugin is not Active

    #TC_03
    Scenario: Install the "WP Dark Mode" Plugin and Activate it
        When Click on the Plugins button
        And Click on the 'Add New' button
        And Search the 'WP Dark Mode' pugin
        And Click on the install buttn and click on the activate button

    #TC_04
    Scenario: Enable Backend Darkmode from Settings -> General Settings
        When Click on the 'WP Dark Mode'
        And Click on the 'Enable Backend Darkmode' button
        And Click on the 'Save Settings' button

    #TC_05
    Scenario: Enable Backend Darkmode from Settings -> General Settings
        Then whether the Darkmode is working on the admin dashboard

    #TC_06, TC_07 
    Scenario: Navigate to the WP Dark Mode and Change the “Floating Switch Style” from the default selections
        When Click on the 'WP Dark Mode'
        And Click on the switch settings
        And Select the "floating Switch style"
        And Click on the save settings button

    #TC_08
    Scenario: From Settings -> Switch Settings - Select Custom Switch size & Scale it to 220
        When Click on the 'WP Dark Mode'
        And Click on the switch settings
        And Switch size to xxl
        And Click on the save settings button

    #TC_09
    Scenario:  From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom)
        When Click on the 'WP Dark Mode'
        And Click on the switch settings
        And Change the Floating Switch Position Left Bottom
        And Click on the save settings button

    #TC_10
    Scenario: Disable Keyboard Shortcut from the Accessibility Settings.
        When Click on the 'WP Dark Mode'
        And Click on the accessibility settings
        And Click on the keyboard shortcut radio button
        And Click on the save settings button of Accessibility settings

    #TC_11
    Scenario: Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections
        When Click on the 'WP Dark Mode'
        And Enable the dark mode toggle button
        Then Click on the save settings of animation page

    #TC_12
    Scenario: Validate whether the Darkmode is working or not from the Frontend
        When Click on the Plugins button
        Then whether the Darkmode is working on the admin dashboard
