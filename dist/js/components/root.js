const _jsxFileName = "/Volumes/sensitive/URBIT/udon-edit/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
//import classnames from 'classnames';
import { HeaderBar } from "./lib/header-bar.js"

export class Root extends Component {

  constructor(props) {
    super(props);
    // console.log('udoneditPrimary.constructor()', props);
    this.state = store.state;
    store.setStateHandler(this.setState.bind(this));
  }

  preview() {
    // console.log('preview()', this.state);
    // this.state.edited will be cleared elsewhere
    api.action('udonedit', 'json',
      {action: 'preview', source: this.state.source});
  }

  source(event) {
    // console.log('source()', event.target.value);
    this.setState({source: event.target.value, edited: true});
  }

  render() {

    // console.log('udoneditPrimary.render()', this.state);

    // Preview button config
    var previewColor = this.state.edited ? 'orangered' : 'lightgray';
    var previewCurse = this.state.edited ? 'pointer' : 'inherit';
    var previewAbled = this.state.edited ? '' : 'disabled';

    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
        , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}})
        , React.createElement(Route, { exact: true, path: "/~udonedit", render:  () => {
          return (
            React.createElement('div', { className: "cf w-100 absolute flex flex-column"    ,
                 style: {height: 'calc(100% - 48px)' /* account for <HeaderBar/> */}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
              , React.createElement('div', { className: "w-100 bb" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
                , React.createElement('h1', { className: "mt1 f2 pa2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, "Udonedit"
                  , React.createElement('button', { className: "mt3 fr f4"  ,
                          style: {color: previewColor, cursor: previewCurse},
                          disabled: previewAbled,
                          onClick: this.preview.bind(this), __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Preview"
                  )
                )
              )
              , React.createElement('div', { className: "w-100 bt" , style: {flexGrow: '1'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                , React.createElement('div', { className: "flex flex-row h-100"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
                  , React.createElement('textarea', { className: "br pa2 pre"  , style: {flexBasis: '50%', resize: 'none'},
                            value: this.state.source, onChange: this.source.bind(this), __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
                  )
                  , React.createElement('div', { className: "bl pa3" , style: {flexBasis: '50%'},
                       dangerouslySetInnerHTML: {__html: this.state.object}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
                  )
                )
              )
            )
          )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
        )
      )
    )
  }
}
