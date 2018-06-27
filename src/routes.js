import React from "react";
import { Switch, Route, } from "react-router-dom";
import Home from "./Components/Home/Home";
import SolProducts from "./Components/SolProducts/SolProducts";
import Socrata from "./Components/Socrata/Socrata";



export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/solutions-products" component={SolProducts} />
        <Route path="/tyler-acquires-socrata" component={Socrata}/>
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