const _jsxFileName = "/Volumes/sensitive/URBIT/udon-edit/src/js/components/lib/icons/sigil.js";import React, { Component } from 'react';
import { sealDict } from '/components/lib/seal-dict';


export class Sigil extends Component {
  render() {
    let prefix = this.props.prefix ? JSON.parse(this.props.prefix) : false;

    return (
      React.createElement('div', { 
        className: "bg-black", 
        style: { flexBasis: 35, padding: 4, paddingBottom: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
      , 
        sealDict.getSeal(this.props.ship, this.props.size, prefix)
      
      )
    );
  }
}

