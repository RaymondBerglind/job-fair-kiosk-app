import React from 'react';
import signupFormMaker from './Form/component';
import headerMaker from './Header/component';

export default function () {
    var App = React.createClass({
        render: function () {
            var SignupForm = signupFormMaker();
            var Header = headerMaker();
            
            return (
                <div className="container">
                    <Header />
                    <div id="landing">
                        <SignupForm/>
                    </div>
                </div>
            );
        }
    });

    return App;
}
