import React, { Component } from 'react';
import Layout from '../../component/layout';
import { SSR } from '../../framework/app';

class Index extends Component {
  componentDidMount() {
    console.log('render');
  }
  render() {
    return <Layout>
      <h1>{this.props.text}</h1>
      <h1><a href="/csr">React Client Render</a></h1>
      <h1><a href="/nun">React + Nunjucks Client Render</a></h1>
    </Layout>;
  }
}


export default SSR(Index);