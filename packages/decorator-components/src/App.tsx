import React from 'react';
import { Button } from 'antd';
import './App.scss';

interface Props {
  updateConfig: { (config: any): void; };
  config: any;
}

const App = (props: Props) => {
  const { updateConfig, config } = props;
  console.log(config);
  const onClick = () => {
    updateConfig({ type: 1 });
  }
  return (
    <div>
      <Button onClick={onClick}>按钮</Button>
    </div>
  );
}

export default App;
