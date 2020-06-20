import React, { Component } from 'react';
import { HookhookModelState } from 'alita';
import { connect } from 'dva';

interface PageProps {
  hookhook: HookhookModelState;
}

interface PageState {
  classVal: string;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { dispatch };
};

@connect(({ hookhook }) => ({ hookhook }), mapDispatchToProps, null, { forwardRef: true })
class NoDvaClassSon extends Component<PageProps, PageState> {
  state = {
    classVal: 'classValue',
  };
  noDvaSonEvent = () => {
    console.log('this is no dva class son event');
  };

  render() {
    const { hookhook } = this.props;
    console.log(hookhook);
    return <div>this is no dva class son</div>;
  }
}

export default NoDvaClassSon;
