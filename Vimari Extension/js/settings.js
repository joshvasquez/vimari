function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': '',

        'hintToggle': 'f',
        'newTabHintToggle': 'shift+f',
        'linkHintCharacters': 'asdfjklqwerzxc',
        'detectByCursorStyle': true,

        'scrollUp': 'k',
        'scrollDown': 'j',
        'scrollLeft': 'h',
        'scrollRight': 'l',
        'scrollSize': 50,
        'scrollUpHalfPage': 'u',
        'scrollDownHalfPage': 'd',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',

        'goBack': 'shift+h',
        'goForward': 'shift+l',
        'reload': 'r',
        'tabForward': 'ctrl+k',
        'tabBack': 'ctrl+j',
        'closeTab': 'x',
        'closeTabReverse': 'shift+x',

        'openTab': 't',
    };
}

window.getSettings = getSettings;
