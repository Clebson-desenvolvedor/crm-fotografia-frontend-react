import React from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Main from "../../components/Main";

function LayoutBase({children}) {
    return (
        <>
            <Aside />
            <div className="main-content">
                <Header />
                <Main>
                    {children}
                </Main>
            </div>
        </>
    )
}

export default LayoutBase;