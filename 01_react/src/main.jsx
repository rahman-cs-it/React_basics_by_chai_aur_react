import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (

    <div>

      <h3>This is rahman .here to teach you something</h3>
    </div>

  )
}

/* As this is not the proper syntax in react to create element therefore it will give errors 
  const reactElement = {
    type : "a",
    props:{
        href:"https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
} */

const anotherElement = (
  <a href="www.facebook.com" target="_blank">Click here to visit facebook</a>
)

const anotherUser = " Rahman";
const finalElement = React.createElement(
  "a",
  {href:"https://instagram.com", target:"_blank"},
  "Click here to visit instagram",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Myapp />     {/* as my app is function we can also use Myapp() */}
    {anotherElement}    
    <br />     
    <br />     
    {finalElement}
  </React.StrictMode>,
)
