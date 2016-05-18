window.SGEvent = window.SGEvent || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Howto/Themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !SGEvent.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    SGEvent.app = new DevExpress.framework.html.HtmlApplication({
        namespace: SGEvent,
        layoutSet: DevExpress.framework.html.layoutSets[SGEvent.config.layoutSet],
        navigation: SGEvent.config.navigation,
        commandMapping: SGEvent.config.commandMapping
    });
    SGEvent.app.router.register(":view/:id", { view: "home", id: undefined });
    SGEvent.app.on("navigatingBack", onNavigatingBack);
    SGEvent.app.navigate();
});
