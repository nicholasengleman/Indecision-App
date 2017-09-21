'use strict';

var appRoot = document.getElementById("app");

var details = {
    detailsText: 'these are the details',
    showDetails: false,
    detailsChange: function detailsChange() {
        details.showDetails = !details.showDetails;
        render();
    }
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: details.detailsChange },
            details.showDetails === true ? 'Hide Details' : 'Show Details'
        ),
        React.createElement(
            'p',
            null,
            details.showDetails === true && details.detailsText,
            ' '
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
