import React, { FC } from 'react';
import { IndexModelState, ConnectProps, connect, router } from 'alita';
import { Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const go = (val: string) => {
    router.push(val);
  };
  return (
    <div className={styles.center}>
      <Button
        onClick={() => {
          go('classclass');
        }}
      >
        父: class, 子: class
      </Button>
      <Button
        onClick={() => {
          go('hookhook');
        }}
      >
        父: hook, 子: hook
      </Button>
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(IndexPage);
