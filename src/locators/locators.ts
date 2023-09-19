class locatorsPage {

    // login locators
    wp_url = "https://alhikmahgift.com/wp-login.php"
    userName = "//input[@id='user_login']"
    password = "//input[@id='user_pass']"
    wp_login = "//input[@id='wp-submit']"
  
    plugings = "//a[@class='wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins']//div[@class='wp-menu-name']"
    instaledPluginSearch = "//input[@id='plugin-search-input']"
    no_items = "//tr[@class='no-items']"
  
    add_new_button = "//a[@class='page-title-action']"
    search_plugin_input = "//input[@id='search-plugins']"
    install_button = "//a[@aria-label='Install WP Dark Mode – Best Dark Mode Plugin for WordPress with Social Sharing 4.2.2 now']"
    activate_button = "//a[normalize-space()='Activate']"
  
    wp_dark_mode = "//div[normalize-space()='WP Dark Mode']"
    enabled_backend_darkmode = "//label[@for='wppool-wp_dark_mode_general[enable_backend]']//div[@class='wp-dark-mode-ignore']"
    save_settings = "//div[@id='wp_dark_mode_general']//form[@method='post']//div//input[@id='save_settings']"
  
    //div[@id='wp_dark_mode_switch']//form[@method='post']//div//input[@id='save_settings']
  
    dark_mode_active = "//p[@class='dark wp-dark-mode-ignore']"
    swicth_settings = "//a[@id='wp_dark_mode_switch-tab']//span[contains(text(),'Switch Settings')]"
    select_one = "//label[@for='wppool-wp_dark_mode_switch[switch_style][1]']//img[@class='image-choose-img']"
    save_setting_btn = "//div[@id='wp_dark_mode_switch']//form[@method='post']//div//input[@id='save_settings']"

    custom_size = "//span[normalize-space()='Custom']"
    xxL_size = "//span[normalize-space()='XXL']"
  
    floating_switch_position = '//select[@name="wp_dark_mode_switch[switcher_position]"]'
    left_bottom = '//option[@value="right_bottom"]'

    accessibily_settings = "//a[@id='wp_dark_mode_accessibility-tab']//span[contains(text(),'Accessibility Settings')]"
    disable_keyboard_shortcut = "//label[@for='wppool-wp_dark_mode_accessibility[keyboard_shortcut]']//div[@class='wp-dark-mode-ignore']"
    save_settings1 = "//div[@id='wp_dark_mode_accessibility']//form[@method='post']//div//input[@id='save_settings']"
    
    animation = "//a[@id='wp_dark_mode_animation-tab']"
    darkModeToggle = "//label[@for='wppool-wp_dark_mode_animation[toggle_animation]']//div[@class='wp-dark-mode-ignore']"
    save_settings2 = "//div[@id='wp_dark_mode_animation']//form[@method='post']//div//input[@id='save_settings']"
  }
  export default locatorsPage;