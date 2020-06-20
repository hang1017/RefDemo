import React, { Component } from 'react';
import { connect } from 'dva';
import { ClassclassModelState, ConnectProps } from 'alita';
import { Button } from 'antd-mobile';
import { NoDvaSon, UseDvaSon } from './components';

interface PageProps extends ConnectProps {
  classclass: ClassclassModelState;
}

interface PageState {}

@connect(({ classclass }) => ({ classclass }))
class ClassclassPage extends Component<PageProps, PageState> {
  noDvaChild: any;
  dvaChild: any;

  getSonEvent = () => {
    this.noDvaChild.noDvaSonEvent();
    console.log(this.noDvaChild.state);
  };

  getDvaSonEvent = () => {
    this.dvaChild.dvaSonEvent();
    console.log(this.dvaChild.state);
  };

  render() {
    return (
      <div>
        <Button onClick={this.getSonEvent}>调用子组件的方法</Button>
        <NoDvaSon
          ref={(e) => {
            this.noDvaChild = e;
          }}
        />
        <Button onClick={this.getDvaSonEvent}>调用有dva的子组件的方法</Button>
        <UseDvaSon
          ref={(e) => {
            this.dvaChild = e;
          }}
        />
      </div>
    );
  }
}

export default ClassclassPage;
