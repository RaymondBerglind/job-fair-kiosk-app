import React from 'react';
import $ from 'jquery';

export default function () {
    var SubmitButton = React.createClass({
        getInitialState: function () {
            return {
                loading: false,
                loadedSuccesfully: false,
                requestFailed: false
            }
        },
        toggleLoading: function () {
            this.setState({ loading: this.state.loading ? false : true });
        },
        setOkResponse: function () {
            this.setState({ loading: false, loadedSuccesfully: true });
        },
        setErrorResponse: function () {
            this.setState({
                requestFailed: true,
                loadedSuccesfully: false,
                loading: false
            });
        },
        resetState: function () {
            this.setState({
                loading: false,
                loadedSuccesfully: false,
                requestFailed: false
            });
        },
        postSignupData: function () {
            var thisComponent = this;
            var formDataArray = $("#aForm").serializeArray();

            var data = formDataArray.reduce((previous, current) => {
                var attribute = current.name;
                previous[attribute] = current.value;
                return previous;
            }, {});
            if (!data.email && !(data.email.substring('@') > 0)) { return }
            thisComponent.toggleLoading();
            $.ajax({
                url: 'http://localhost:3001/signup/',
                type: "POST",
                data: data
            }).done(function (data) {
                thisComponent.setOkResponse();
                setTimeout(function () {
                    thisComponent.resetState();
                    $("#aForm")[0].reset();
                }, 1000);
            }).fail(function (data) {
                thisComponent.setErrorResponse();
                setTimeout(function () {
                    thisComponent.resetState();
                }, 2000);
            });
        },
        render: function () {

            var loadingSVG = (
                        <svg width='28px' height='28px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ring-alt">
                            <circle cx="50" cy="50" r="40" stroke="#34BDC0" fill="none" strokeWidth='10px'>
                                <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
                                <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
                            </circle>
                        </svg>
                    );
            var iconOK = (<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>);
            var iconError = (<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>);
            return (
                <button
                    id="submit"
                    className="btn-lg col-12 col-sm-4 col-md-3 mb-5"
                    onClick={this.postSignupData}>
                    {this.state.loading ? loadingSVG 
                        : this.state.loadedSuccesfully ? iconOK
                            : this.state.requestFailed ? iconError
                                : "SUBMIT"
                    }
                </button>
            );
        }
    });

    return SubmitButton;
} 