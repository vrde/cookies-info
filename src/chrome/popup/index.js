import React from 'react';
import ReactDOM from 'react-dom';

import InfoBox from './components/infoBox';

function main () {
    const mainUrl = chrome.extension.getURL('main.html');
    console.log(mainUrl);

    ReactDOM.render(
        <InfoBox mainUrl={mainUrl} />,
        document.getElementById('main')
    );
}

main();
