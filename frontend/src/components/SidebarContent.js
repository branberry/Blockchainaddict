import React from 'react';
import MaterialTitlePanel from './MaterialTitlePanel.js';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';

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

     links.push(<Link to="/" style={styles.sidebarLink}>Homes</Link>);
     links.push(<Link to="/category" style={styles.sidebarLink}>Category</Link>);
     links.push(<Link to="/products" style={styles.sidebarLink}>Products</Link>);   

    return (
        <MaterialTitlePanel title="Menu" style={style}>
            <div style={styles.content}> 
                <a href="index.html" style={styles.sidebarLink}>Home</a>
                <div style={styles.divider}>
                {links}
                </div>
                
            </div>
        </MaterialTitlePanel>
    );
};

SidebarContent.propTypes = {
    style: PropTypes.object,
};

export default SidebarContent;