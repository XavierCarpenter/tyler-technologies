import React from "react";
import { Switch, Route, } from "react-router-dom";
import Home from "./Components/Home/Home";
import SolProducts from "./Components/SolProducts/SolProducts";
import Socrata from "./Components/Socrata/Socrata";
import TylerExp from "./Components/TylerExp/TylerExp";



export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/solutions-products" component={SolProducts} />
        <Route path="/tyler-acquires-socrata" component={Socrata}/>
        <Route path="/tyler-expierence" component={TylerExp}/>
        <Route
            path="*"
            render={() => (
                <div>
                    <p>Not Found</p>
                </div>
            )}
        />
    </Switch>
);