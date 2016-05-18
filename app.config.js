// NOTE object below must be a valid JSON
window.SGEvent = $.extend(true, window.SGEvent, {
    "config": {
        "layoutSet": "navbar",
        "navigation": [
            {
                title: "Home",
                onExecute: "#home",
                icon: "home"
            },
            {
                title: "My Info",
                onExecute: "#about",
                icon: "info"
            }
        ]
    }
});