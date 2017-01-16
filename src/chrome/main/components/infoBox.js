import React from 'react';
import CookieInfo from './cookieInfo';

const InfoBox = React.createClass({
    render () {
        const cookies = this.props.cookies;
        console.log(cookies);
        return (
            <div>
                {cookies.map((cookie, i) =>
                    <CookieInfo
                        key={'cookie-' + i}
                        cookie={cookie} />
                )}
            </div>
        );
    }
});

export default InfoBox;
