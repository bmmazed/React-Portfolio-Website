import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../footer/footer.css'

class Footer extends Component {
    render() {
        const liStyle = {
        color: "#f2f2f2",
        textDecoration: "none",
        };

        return (
            <div className="footer">
                <div class="footer-bottom">
		
                    <div class="footer-bottom-row">
                        <div class="footer-bottom-col">
                            <p>Copyright ©2020 <NavLink style={liStyle} exact activeStyle={{ color: "#f2f2f2" }} to="/" > Md. Mazed Hossain </NavLink> All Rights Reserved</p>
                        </div>
                    
                    </div>

		        </div>
            </div>
        );
    }
}

export default Footer;