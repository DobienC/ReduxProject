import React from "react";
import logo from '../../logo.svg';

function HomeContent() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <a href="https://redux.js.org/basics/usage-with-react">REDUX INSTRUCTIONS</a>
            </header>
        </div>
    );
}

export default HomeContent;