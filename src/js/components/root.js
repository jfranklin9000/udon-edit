import React, { Component } from 'react';
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
      <BrowserRouter>
        <HeaderBar/>
        <Route exact path="/~udonedit" render={ () => {
          return (
            <div className="cf w-100 absolute flex flex-column"
                 style={{height: 'calc(100% - 48px)' /* account for <HeaderBar/> */}}>
              <div class="w-100 bb">
                <h1 className="mt1 f2 pa2">Udonedit
                  <button className="mt2 fr f4"
                          style={{color: previewColor, cursor: previewCurse}}
                          disabled={previewAbled}
                          onClick={this.preview.bind(this)}>Preview
                  </button>
                </h1>
              </div>
              <div class="w-100 bt" style={{flexGrow: '1'}}>
                <div class="flex flex-row h-100">
                  <textarea class="br pa2 pre" style={{flexBasis: '50%', resize: 'none'}}
                            value={this.state.source} onChange={this.source.bind(this)}>
                  </textarea>
                  <div class="bl pa3" style={{flexBasis: '50%'}}
                       dangerouslySetInnerHTML={{__html: this.state.object}}>
                  </div>
                </div>
              </div>
            </div>
          )}}
        />
      </BrowserRouter>
    )
  }
}
