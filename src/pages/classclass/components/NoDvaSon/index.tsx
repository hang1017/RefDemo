import React, { Component } from 'react';
import styles from './index.less';

interface PageProps {}

interface PageState {
  noDvaVal: string;
}

class NoDvaSonPage extends Component<PageProps, PageState> {
  state = {
    noDvaVal: 'noDvaValue',
  };

  noDvaSonEvent = () => {
    console.log('this is no dva son event');
  };

  render() {
    return <div>no dva son</div>;
  }
}

export default NoDvaSonPage;
