/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'COMPONENT/App'

import { Router, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
import { store, history } from './redux/store'
import routes from './routes'
import createDevTools from './createDevtools'

// import moment from 'moment'

/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 *
 * 有关性能提升方面的问题，之后我会总结出来
 * （诸如 PureComponent / shouldComponentUpdate / Immutable.js 等）
 */

// if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }
// if (__DEV__) {
//   console.info('[当前环境] 开发环境')
//   console.log(moment())

// }
// if (__PROD__) {
//   console.info('[当前环境] 生产环境')
// }


const initialState = window.__INITIAL_STATE__;
createDevTools(store)

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
ReactDOM.render(
    //   <App />,
    <Provider store={store}>
        <Router history={history}>
            {routes() }
        </Router>
    </Provider>,
    document.getElementById('root')
)
