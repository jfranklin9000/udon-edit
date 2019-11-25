import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

export default class udoneditTile extends Component {

  constructor(props) {
    super(props);
    console.log('udoneditTile.constructor()', props);
  }

  render() {
    return (
      <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <a className="w-100 h-100 db pa2 no-underline" href="/~udonedit">
          <p className="gray label-regular b absolute" style={{ top: 4, left: 8 }}>Udonedit</p>
          <p className="white relative" style={{ top:  90, 'textAlign': 'center' }}>Edit and preview udon</p>
          <p className="gray  relative" style={{ top: 100, 'textAlign': 'center' }}>Click tile to start</p>
        </a>
      </div>
    );
  }

}

window.udoneditTile = udoneditTile;
