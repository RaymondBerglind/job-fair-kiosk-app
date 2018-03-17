import React from 'react';

export default function () {
    var Header = React.createClass({
        render: function () {
            return (
                <div>
                    <div className="row">
                        <img src="Assets/Logo_Placeholder.png" className="logo" alt="logo" />
                    </div>
                    <div className="row">
                        <h1 id="landingHeadline">Our company's at a job fair, and we brought a competition or something!</h1>
                    </div>
                </div>
            );
        }
    });

    return Header;

}