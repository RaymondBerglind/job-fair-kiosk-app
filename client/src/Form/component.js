import React from 'react';
import submitButtonMaker from '../SubmitButton/component';
import '../scripts/AJAXHelper';

export default function () {
    var SubmitButton = submitButtonMaker();
    
    var SignupForm = React.createClass({
        render: function () {
            return (
                <div>
                    <div id="signupCaption">
                        <p>Submit your guess and contact information below to be in the running for something awesome.</p>
                    </div>
                    <form id="aForm">
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="guess" className="pull-left">
                                    How many pieces of candy are in the jar?
                                </label>
                            </div>
                            <div className="col-8 col-sm-2 mb-2">
                                <input type="number" className="form-control" name="guess" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12 col-sm-4 d-block cleared">
                                <label htmlFor="email" className="pull-left">Email</label>
                                <input type="email" className="form-control" name="email"
                                    required="Please provide a valid email address." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group  pull-left col-12 col-sm-3">
                                <label htmlFor="firstName" className="pull-left">First name</label>
                                <input type="text" className="form-control" name="firstName" />
                            </div>
                            <div className="form-group pull-left col-12 col-sm-3">
                                <label htmlFor="lastName" className="pull-left">Last name</label>
                                <input type="text" className="form-control" name="lastName" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group pull-left col-12 col-sm-3">
                                <label htmlFor="streetAddress" className="pull-left">Street address</label>
                                <input type="text" className="form-control" name="streetAddress" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group pull-left col-12 col-sm-3">
                                <label htmlFor="careOf" className="pull-left">c/o</label>
                                <input type="text" className="form-control" name="careOf" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group  pull-left col-12 col-sm-2">
                                <label htmlFor="city" className="pull-left">City</label>
                                <input type="text" className="form-control" name="city" />
                            </div>
                            <div className="form-group  pull-left col-12 col-sm-2">
                                <label htmlFor="state" className="pull-left">State</label>
                                <input type="text" className="form-control" name="state" />
                            </div>
                            <div className="form-group  pull-left col-12 col-sm-2">
                                <label htmlFor="zipCode" className="pull-left">Zip code</label>
                                <input type="text" className="form-control" name="zipCode" />
                            </div>
                        </div>
                        <SubmitButton />
                    </form>
                </div>
            );
        }
    });

    return SignupForm;
}
