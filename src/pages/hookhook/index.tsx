import React, { FC, useRef } from 'react';
import { HookhookModelState, ConnectProps, connect } from 'alita';
import { Button } from 'antd-mobile';
import { NoDvaSon, NoDvaClassSon } from './components';
import styles from './index.less';

interface PageProps extends ConnectProps {
  hookhook: HookhookModelState;
}

const HookhookPage: FC<PageProps> = ({ hookhook, dispatch }) => {
  const childRef = useRef();

  let classChild: NoDvaClassSon | null = null;

  const getSonEvent = () => {
    childRef.current.click();
    console.log(childRef.current.value);
  };

  const getclassSonEvent = () => {
    classChild.noDvaSonEvent();
    console.log(classChild.state);
  };

  return (
    <div className={styles.center}>
      <Button onClick={getSonEvent}>调用子组件的方法</Button>
      {/* 子组件引入 cRef 这个名字可随便定义 */}
      <NoDvaSon cRef={childRef} />
      <Button onClick={getclassSonEvent}>调用class子组件的方法</Button>
      <NoDvaClassSon
        ref={(e) => {
          classChild = e;
        }}
      />
    </div>
  );
};

export default connect(({ hookhook }: { hookhook: HookhookModelState }) => ({ hookhook }))(
  HookhookPage,
);
