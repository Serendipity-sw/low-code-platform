import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Index from './page/index/index.jsx'
import configureStore from './reducers/configureStore'
import { HashRouter } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import './app.pcss'
import 'src/common/assets/unit-style.pcss'
import 'src/common/assets/common.pcss'
import 'animate.css'

moment.locale( 'zh-cn' )

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <Provider key="store" store={ configureStore }>
    <HashRouter>
      <ConfigProvider locale={ zhCN }>
        <Index/>
      </ConfigProvider>
    </HashRouter>
  </Provider>
)
