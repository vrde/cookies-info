import React from 'react';

const InfoBox = React.createClass({
    render () {
        return (
            <div className='fbtrex--popup'>
                <p>
                    <a onClick={() => chrome.tabs.create({url: this.props.mainUrl})}>
                        analysis
                    </a>
                </p>
            </div>
        );
    }
});

export default InfoBox;
