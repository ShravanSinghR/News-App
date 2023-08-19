import './App.css';


import React, { Component } from 'react'
import  Navbar  from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  PageSize=12;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="genral"  pageSize={this.PageSize} country={"in"} category={""} material={"#DC3545"} />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.PageSize} country={"in"} category={"business"} material={"#C29FFA"}/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.PageSize} country={"in"} category={"entertainment"}material={"#6C757D"} />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.PageSize} country={"in"} category={"health"}material={"#198754"} />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.PageSize} country={"in"} category={"science"} material={"#0DCAF0"}/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.PageSize} country={"in"} category={"sports"} material={"#0D6EFD"}/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.PageSize} country={"in"} category={"technology"}material={"#212529"} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}



