import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PageShell = Page => {

    const pageArray = [
        '/vim',
        '/alc',
        '/comom'
    ];
    return props =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={ pageArray.includes(props.match.path)  ? 'SlideIn' : 'SlideOut'}
            >

                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>;
};

export default PageShell;
