import React from "react";
import Header from "../Header";
import LeftPanel from "./LeftPanel";
import Main from "./Main";
import RightPanel from "./RightPanel";
import Footer from "../Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="ui grid">
                <div className="row">
                    <div className="three wide column">
                        <LeftPanel />
                    </div>
                    <div className="eleven wide column">
                        <Main />
                    </div>
                    <div className="two wide column">
                        <RightPanel />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;