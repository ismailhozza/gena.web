import React from "react";
import ReactDOM from "react-dom";

import MyAppBar from "./components/MyAppBar";
import { CssBaseline } from "@material-ui/core";
import SignIn from "./components/SignIn";

const App = () => <>
    <CssBaseline />
    <MyAppBar />
    <main>
        <SignIn />
    </main>
</>;

ReactDOM.render(
    <App />,
    document.getElementById("example")
);