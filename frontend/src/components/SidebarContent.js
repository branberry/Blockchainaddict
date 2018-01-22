import React, { Component } from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';

const styles = {
    sidebar: {
        width: 256,
        height: '100%',
    },
    
    sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
    },

    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
    },

    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
};

const SidebarContent = (props) => {
    const style = props.style ? {...styles.sidebar,...props.style} : styles.sidebar;

    const links = [];

    for(let i = 0; i < 10; i++) {
        links.push(
            <a key={i} href="#" style={styles.sidebarLink}>Mock menu item {i}</a>
        );
    }
}