import React from "react";
import './style.css'

const Loading = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div class="lds-dual-ring"></div>
        </div>
    );
};

export default Loading;
