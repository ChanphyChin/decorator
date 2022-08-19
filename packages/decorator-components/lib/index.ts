import React from 'react';
import { Button } from 'antd';

var App = function (props) {
  var updateConfig = props.updateConfig,
      config = props.config;
  console.log(config);

  var onClick = function () {
    updateConfig({
      type: 1
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClick
  }, "\u6309\u94AE"));
};

export { App as default };
