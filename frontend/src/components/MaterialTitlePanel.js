import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    root: {
        fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        fontWeight: 300,
    },

    header: {

    },
}

const MaterialTitlePanel = (props) => {
    const rootStyle = props.style ? {...styles.root,...props.style} : styles.root;

    return (
        <div style={rootStyle}> 
            <div style={styles.header}>{props.title}</div>
            {props.children}
        </div>
    );
};

MaterialTitlePanel.PropTypes = {
    style: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    children: PropTypes.object,
};

export default MaterialTitlePanel;