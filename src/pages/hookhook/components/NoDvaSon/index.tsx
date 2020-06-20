import React, { FC, useState, useImperativeHandle } from 'react';
import { HookhookModelState } from 'alita';
import { connect } from 'dva';

interface PageProps {
  cRef: any;
  hookhook: HookhookModelState;
}

const Page: FC<PageProps> = ({ cRef, hookhook }) => {
  const [noDvaValue, setNoDvaValue] = useState('noDvaValue');
  console.log(hookhook);
  /**
   *
   */
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    click: () => {
      noDvaSonEvent();
    },
    value: { noDvaValue },
  }));

  const noDvaSonEvent = () => {
    console.log('this is no dva son event');
  };

  return <div>this is no dva son</div>;
};

export default connect(({ hookhook }: { hookhook: HookhookModelState }) => ({ hookhook }))(Page);
