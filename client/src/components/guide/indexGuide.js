import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Sidebar from "./navBar/Sidebar";
// import Pages
import Informace from "./pages/Informace";
// ovladani hry
import OvladaniHry from "./pages/OvladaniHry";
import Zakladna from "./pages/Zakladna";
import Profese from "./pages/Profese";
import Budovy from "./pages/Budovy";
import Pozemky from "./pages/Pozemky";
import Armada from "./pages/Armada";
import Utoky from "./pages/VojenskeUtoky";
import Magie from "./pages/Magie";
import Spionaz from "./pages/Spionaz";
import Aliance from "./pages/Aliance";
import Imperator from "./pages/Imperator";
import Trziste from "./pages/Trziste";
import DalsiTah from "./pages/DalsiTah";
// horní menu
import HorniMenu from "./pages/HorniMenu";
import Posta from "./pages/Posta";
import Diskuse from "./pages/Diskuse";
import Denik from "./pages/Denik";
import Hledat from "./pages/Hledat";
// rasy
import Rasy from "./pages/Rasy";
import Lide from "./pages/Lide";
import Elfove from "./pages/Elfove";
import Trpaslici from "./pages/Trpaslici";
import Hobiti from "./pages/Hobiti";
import Skreti from "./pages/Skreti";
import Magistri from "./pages/Magistri";
import Vily from "./pages/Vily";
import Demoni from "./pages/Demoni";
import Nemrtvi from "./pages/Nemrtvi";
import Obri from "./pages/Obri";
//Vzorce
import Vzorce from "./pages/Vzorce";

const indexGuide = () => {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <React.Fragment>
                        <div className="ui internally celled grid">
                            <div className="row">
                                <div className="two wide column">
                                    <Sidebar />
                                </div>
                                <div className="eleven wide column">
                                    {/* Guide - INFORMACE */}
                                    <Route path="/informace" exact component={Informace} />
                                    {/* Guide - OVLADANÍ */}
                                    <Route path="/ovladani-hry" exact component={OvladaniHry} />
                                    <Route path="/ovladani-hry/zakladna" exact component={Zakladna} />
                                    <Route path="/ovladani-hry/profese" exact component={Profese} />
                                    <Route path="/ovladani-hry/budovy" exact component={Budovy} />
                                    <Route path="/ovladani-hry/pozemky" exact component={Pozemky} />
                                    <Route path="/ovladani-hry/armada" exact component={Armada} />
                                    <Route path="/ovladani-hry/vojenske-utoky" exact component={Utoky} />
                                    <Route path="/ovladani-hry/magie" exact component={Magie} />
                                    <Route path="/ovladani-hry/spionaz" exact component={Spionaz} />
                                    <Route path="/ovladani-hry/aliance" exact component={Aliance} />
                                    <Route path="/ovladani-hry/imperator" exact component={Imperator} />
                                    <Route path="/ovladani-hry/trziste" exact component={Trziste} />
                                    <Route path="/ovladani-hry/dalsi-tah" exact component={DalsiTah} />
                                    {/* Guide - HORNÍ MENU */}
                                    <Route path="/horni-menu" exact component={HorniMenu} />
                                    <Route path="/horni-menu/posta" exact component={Posta} />
                                    <Route path="/horni-menu/diskuse" exact component={Diskuse} />
                                    <Route path="/horni-menu/Denik" exact component={Denik} />
                                    <Route path="/horni-menu/Hledat" exact component={Hledat} />
                                    {/* Guide - RASY */}
                                    <Route path="/rasy" exact component={Rasy} />
                                    <Route path="/rasy/lide" exact component={Lide} />
                                    <Route path="/rasy/elfove" exact component={Elfove} />
                                    <Route path="/rasy/trpaslici" exact component={Trpaslici} />
                                    <Route path="/rasy/hobiti" exact component={Hobiti} />
                                    <Route path="/rasy/skreti" exact component={Skreti} />
                                    <Route path="/rasy/magistri" exact component={Magistri} />
                                    <Route path="/rasy/vily" exact component={Vily} />
                                    <Route path="/rasy/demoni" exact component={Demoni} />
                                    <Route path="/rasy/nemrtvi" exact component={Nemrtvi} />
                                    <Route path="/rasy/obri" exact component={Obri} />
                                    {/* Guide - VZORCE */}
                                    <Route path="/vzorce" exact component={Vzorce} />
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Switch>
            </Router>
        </div>
    )
}

export default indexGuide;
