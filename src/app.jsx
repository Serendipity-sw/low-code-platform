import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Index from './page/index/index.jsx';
import configureStore from "./reducers/configureStore";
import {HashRouter} from "react-router-dom";
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
import {ConfigProvider} from 'antd'

moment.locale('zh-cn')

ReactDOM.render([
  <Provider key="store" store={configureStore}>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Index/>
      </ConfigProvider>
    </HashRouter>
  </Provider>
], document.getElementById('root'));
