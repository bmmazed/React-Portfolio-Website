import React, { Component } from 'react';
import Contactform from '../../contactForm/form';
import Footer from '../../footer/footer'
import '../../../css/style.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <Contactform />
                <Footer />
            </div>
        );
    }
}

export default Contact;