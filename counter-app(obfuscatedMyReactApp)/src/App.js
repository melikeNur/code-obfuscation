"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _navbar = _interopRequireDefault(require("./components/navbar"));

require("./App.css");

var _counters = _interopRequireDefault(require("./components/counters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      counters: [{
        id: 1,
        value: 4
      }, {
        id: 2,
        value: 0
      }, {
        id: 3,
        value: 0
      }, {
        id: 4,
        value: 0
      }]
    });

    _defineProperty(this, "Increment", counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter
      };
      counters[index].value++;
      this.setState({
        counters
      });
    });

    _defineProperty(this, "Delete", counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId); //o id dekini seçip o hariç diğerlerini override ediyoruz

      this.setState({
        counters
      });
    });

    _defineProperty(this, "Reset", () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({
        counters
      });
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbar.default, {
      totalCounters: this.state.counters.filter(c => c.value > 0).length
    }), /*#__PURE__*/_react.default.createElement("main", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement(_counters.default, {
      counters: this.state.counters,
      onReset: this.Reset,
      onIncrement: this.Increment,
      onDelete: this.Delete
    })));
  }

}

var _default = App;
exports.default = _default;
/*
ES6
import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {  
     counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},

    ]
};
Increment = counter => {
    const counters =[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
};

Delete = counterId =>{
 const counters = this.state.counters.filter(c=>c.id !== counterId);  //o id dekini seçip o hariç diğerlerini override ediyoruz
 this.setState({counters});
}
Reset = () =>{
    const counters = this.state.counters.map(c=>{
        c.value=0;
        return c;
    }); 
    this.setState({counters})
};

  render() { 
    return ( 
      <React.Fragment>
      <NavBar
        totalCounters={this.state.counters.filter(c=>c.value>0).length} 
      />
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.Reset}
        onIncrement={this.Increment}
        onDelete={this.Delete} /> 
      </main> 
      </React.Fragment>
    );
  }
}
 
export default App;

*/