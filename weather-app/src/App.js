import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <div className="menu">
            <Link to="/index.html">
              <div className="item">
                Home
              </div>
            </Link>
            <Link to="/Monday">
              <div className="item">
                Monday
              </div>
            </Link>
            <Link to="/Tuesday">
              <div className="item">
                Tuesday
              </div>
            </Link>
            <Link to="/Wednesday">
              <div className="item">
                Wednesday
              </div>
            </Link>
            <Link to="/Thursday">
              <div className="item">
                Thursday
              </div>
            </Link>
            <Link to="/Friday">
              <div className="item">
                Friday
              </div>
            </Link>
            <Link to="/Saturday">
              <div className="item">
                Saturday
              </div>
            </Link>
            <Link to="/Sunday">
                <div className="item">
                  Sunday
                </div>
            </Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/Monday">
            <Monday />
          </Route>
          <Route path="/Tuesday">
            <Tuesday />
          </Route>
          <Route path="/Wednesday">
            <Wednesday />
          </Route>
          <Route path="/Thursday">
            <Thursday />
          </Route>
          <Route path="/Friday">
            <Friday />
          </Route>
          <Route path="/Saturday">
            <Saturday />
          </Route>
          <Route path="/Sunday">
            <Sunday />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function COL(props) {
  return <div className="box">
              <div className={"box-cons","box-title"}>
                  {props.name}
              </div>
              <div className={"box-cons", "box-val"}>
                  {props.val}
              </div>
           </div>
}
function Weather(i,data) {
  return <div className="main-box">
           <h2 className="Weather">Weather on {i}</h2>
           <h1 className="temp">{data.temp} C</h1> 
           <div className="main-mid">
             <COL name={"High/Low"} val={data.high_low} />
             <COL name={"Humidity"} val={data.hum} />
             <COL name={"Pressure"} val={data.press} />
             <COL name={"Visibility"} val={data.visibility} />
             <COL name={"Wind"} val={data.wind} />
             <COL name={"Dew Point"} val={data.dew_point} />
             <COL name={"UV Index"} val={data.uv_i} />
             <COL name={"Moon Phase"} val={data.m_phase} />
           </div>
         </div>
}
var mon = {
  temp:"38°",
  high_low: "--/26°",
  hum: "75%",
  press: "1000.3 mb",
  visibility: "4.51 km",
  wind:"10 km/h",
  dew_point: "26°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};

var tue = {
  temp:"40°",
  high_low: "23/28°",
  hum: "76%",
  press: "1002.3 mb",
  visibility: "5.51 km",
  wind:"13 km/h",
  dew_point: "28°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};

var wed = {
  temp:"42°",
  high_low: "23/29°",
  hum: "75%",
  press: "1002.3 mb",
  visibility: "5.52km",
  wind:"12 km/h",
  dew_point: "29°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};

var thu = {
  temp:"42°",
  high_low: "23/29°",
  hum: "75%",
  press: "1002.3 mb",
  visibility: "5.52km",
  wind:"12 km/h",
  dew_point: "29°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};

var fri = {
  temp:"40°",
  high_low: "23/28°",
  hum: "76%",
  press: "1002.3 mb",
  visibility: "5.51 km",
  wind:"13 km/h",
  dew_point: "28°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};

var sat = {
  temp:"38°",
  high_low: "--/26°",
  hum: "75%",
  press: "1000.3 mb",
  visibility: "4.51 km",
  wind:"10 km/h",
  dew_point: "26°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};
var sun = {
  temp:"42°",
  high_low: "23/29°",
  hum: "75%",
  press: "1002.3 mb",
  visibility: "5.52km",
  wind:"12 km/h",
  dew_point: "29°",
  uv_i: "0 of 10",
  m_phase: "First Quarter"
};

function Home() {
  return <div className="center">{Weather("Monday",mon)} {Weather("Tuesday",tue)} {Weather("Wednesday",wed)} {Weather("Thursday",thu)} {Weather("Friday",fri) } {Weather("Saturday",sat)} {Weather("Sunday",sun)}</div>;
}

function Monday() {
  return <div className="center">{Weather("Monday",mon)}</div>;
}

function Tuesday() {
  return <div className="center">{Weather("Tuesday",tue)}</div>;
}

function Wednesday() {
  return <div className="center">{Weather("Wednesday",wed)}</div>;
}

function Thursday() {
  return <div className="center">{Weather("Thursday",thu)}</div>;
}

function Friday() {
  return <div className="center">{Weather("Friday",fri)}</div>;
}

function Saturday() {
  return <div className="center">{Weather("Saturday",sat)}</div>;
}

function Sunday() {
  return <div className="center">{Weather("Sunday",sun)}</div>;
}