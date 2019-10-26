import React from 'react'
import ReactDom from 'react-dom'
import HelloWorld from "./components/HelloWorld.jsx";

//render recibe dos inputs
ReactDom.render(<HelloWorld/>, document.getElementById("app"))