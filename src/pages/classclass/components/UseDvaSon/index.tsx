import React, { Component } from 'react';
import { connect } from 'dva';

interface PageProps {}

interface PageState {
  dvaVal: string;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { dispatch };
};

@connect(({ classclass }) => ({ classclass }), mapDispatchToProps, null, { forwardRef: true })
class DvaSonPage extends Component<PageProps, PageState> {
  state = {
    dvaVal: 'dvaValue',
  };

  dvaSonEvent = () => {
    console.log('this is use dva son event');
  };

  render() {
    return <div>use dva son</div>;
  }
}

export default DvaSonPage;
