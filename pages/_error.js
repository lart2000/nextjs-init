import React, { Component } from 'react';
import Error from 'next/error';

export default class _Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
      if (this.props.statusCode) {
        return <Error statusCode={this.props.statusCode} />
      }else{
        return 'An error occurred on Client';
      }
  }
}