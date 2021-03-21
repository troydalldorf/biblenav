import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ScriptureList from "./ScriptureList";
import Navbar from "./Navbar";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import Topics from "./Topics";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Container maxWidth="sm">
                    <div className="App">
                        <Typography variant="h4" component="h1" gutterBottom>
                            Joe's Scripture Index
                        </Typography>
                        <Switch>
                            <Route exact path="/">
                                <ScriptureList/>
                            </Route>
                            <Route exact path="/topics">
                                <Topics/>
                            </Route>
                        </Switch>
                    </div>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;