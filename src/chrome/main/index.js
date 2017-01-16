import React from 'react';
import ReactDOM from 'react-dom';

import InfoBox from './components/infoBox';

function main () {
    chrome.cookies.getAll({
    }, cookies => {
        ReactDOM.render(
            <InfoBox
                cookies={cookies} />,
            document.getElementById('main'));
    });
}

main();
