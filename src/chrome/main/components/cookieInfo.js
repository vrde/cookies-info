import React from 'react';

const CookieInfo = React.createClass({
    render () {
        const cookie = this.props.cookie;
        return (
            <tr>
                <td>
                    {cookie.domain}{cookie.path}
                </td>
                <td>
                    {cookie.name}
                </td>
                <td>
                    {cookie.value}
                </td>
                <td>
                    {cookie.expirationDate}
                </td>
                <td>
                    {cookie.sameSite}
                </td>
                <td>
                    {cookie.hostOnly}
                </td>
                <td>
                    {cookie.httpOnly}
                </td>
                <td>
                    {cookie.secure}
                </td>
                <td>
                    {cookie.session}
                </td>
            </tr>
        );
    }
});

export default CookieInfo;
