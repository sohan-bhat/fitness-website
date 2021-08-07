import React from 'react';

import Header from '../components/header_footer/Header'
import Footer from '../components/header_footer/Footer'

const Layout = (props, { user }) => {
    return (
        <div>
            <Header user={user} />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;