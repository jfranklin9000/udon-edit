const _jsxFileName = "/Volumes/sensitive/URBIT/udon-edit/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import classnames from 'classnames';
import _ from 'lodash';
import { HeaderBar } from "./lib/header-bar.js"


export class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}})
        , React.createElement(Route, { exact: true, path: "/~udonedit", render:  () => {
          return (
            React.createElement('div', { className: "pa3 w-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
              , React.createElement('h1', { className: "mt0 f2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "udonedit")
              , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, "Welcome to your Landscape application."    )
              , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "To get started, edit "    , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "src/index.js"), " or "  , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "udonedit.hoon"), " and "  , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "|commit %home" ), " on your Urbit ship to see your changes."        )
              , React.createElement('a', { className: "black no-underline db body-large pt3"    , href: "https://urbit.org/docs", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "-> Read the docs"   )
            )
          )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        )
        )
      )
    )
  }
}

