const _jsxFileName = "/Volumes/sensitive/URBIT/udon-edit/tile/tile.js";import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

export default class udoneditTile extends Component {

  constructor(props) {
    super(props);
    // console.log('udoneditTile.constructor()', props);
  }

  render() {
    return (
      React.createElement('div', { className: "w-100 h-100 relative"  , style: {background: '#1a1a1a'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement('a', { className: "w-100 h-100 db pa2 no-underline"    , href: "/~udonedit", __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          , React.createElement('p', { className: "gray label-regular b absolute"   , style: {top: 4, left: 8}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, "Udonedit")
          , React.createElement('p', { className: "white relative" , style: {top:  90, 'textAlign': 'center'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Edit and preview udon"   )
          , React.createElement('p', { className: "gray  relative"  , style: {top: 100, 'textAlign': 'center'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}, "Click tile to start"   )
        )
      )
    );
  }

}

window.udoneditTile = udoneditTile;
