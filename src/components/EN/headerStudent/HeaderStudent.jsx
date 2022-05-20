import React from "react";
import "./HeaderStudent.scss";

function HeaderStudent() {
    return  (
        <div className="headerStudent">
            <div><img src="assets/Logo-gradiente.png" className="logo"></img></div>
            <div className="flex pages">
                <div className="links">
                    <p><b>Students</b></p>
                    <p>Centers</p>
                </div>
                <div className="languages">
                    <p><p>EN</p>|</p>
                    <p>ES</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderStudent;