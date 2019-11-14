const _jsxFileName = "/Volumes/sensitive/URBIT/udon-edit/src/js/components/lib/header-bar.js";import React, { Component } from 'react';
import classnames from 'classnames';
import { IconHome } from '/components/lib/icons/icon-home';
import { IconSpinner } from '/components/lib/icons/icon-spinner';

export class HeaderBar extends Component {
  render() {
    let spin = (this.props.spinner)
      ?  React.createElement('div', { className: "absolute",
           style: {width: 16, height: 16, top: 16, right: 16}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
           , React.createElement(IconSpinner, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 11}})
         )
      :  null;

    return (
      React.createElement('div', { className: "bg-black w-100 justify-between"  ,
        style: { height: 48, padding: 8}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement('a', { className: "db",
          style: { background: '#1A1A1A',
            borderRadius: 16,
            width: 32,
            height: 32,
            top: 8 },
          href: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement(IconHome, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}} )
        )
        , spin
      )
    );
  }
}

