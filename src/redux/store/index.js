
import { createStore,compose,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import {persistState} from 'redux-devtools'
import createLogger from 'redux-logger'
import {Iterable} from 'immutable'
import promiseMiddleware from '../../api/promiseMiddleware'
import DevTools from '../../components/DevTools'
import rootReducer from '../../reducers'


export default function configureStore(initialState, history) {
  const stateTransformer = (state) => {
    let newSate = {}
    Object.keys(state).forEach(x=>{
      if(Iterable.isIterable(state[x])){
        newSate[x] = state[x].toJS()
      }else{
        newSate[x] = state[x]
      }
    })
    return newSate
  }
  let middleware = [ thunkMiddleware, promiseMiddleware, routerMiddleware(history) ]
  let finalCreateStore
  if (__DEVCLIENT__) {
    if(__DEVLOGGER__){
      middleware.push(createLogger({stateTransformer}))
    }
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : __DEVTOOLS__?DevTools.instrument():f => f,
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )
  } else {
    finalCreateStore = compose(applyMiddleware(...middleware))
  }

  const store = finalCreateStore(createStore)(rootReducer, initialState)

  // if (module.hot) {
  //   module.hot.accept('../../reducers', () => {
  //     const nextReducer = require('../../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }
  return store
}







// import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import { applyMiddleware, compose, createStore } from 'redux'
// import { useRouterHistory } from 'react-router'
// import thunk from 'redux-thunk'
// import { createRootReducer } from '../reducers'

// // ========================================================
// // 浏览器 history 配置
// // ========================================================
// const browserHistory = useRouterHistory(createBrowserHistory)({
//   basename: '' // 相当于 rootPath
// })

// // ======================================================
// // 配置中间件
// // ======================================================
// const middlewares = [thunk, routerMiddleware(browserHistory)]
// if (__DEVLOGGER__) {
//   /** Redux Logger (P.S: 打印日志会造成轻微的卡顿) **/
//   const createLogger = require('redux-logger')
//   middlewares.push(createLogger())
// }

// // ======================================================
// // 配置 Store 增强器
// // ======================================================
// const enhancers = []
// if (__DEVCLIENT__) {
//   // /** Redux DevTools **/

//   // /* 1. Chrome 插件 Redux DevTools（默认）
//   //    P.S: 独立窗口可调用 window.devToolsExtension.open() */
//   // if (!__COMPONENT_DEVTOOLS__) {    
//   //   const devToolsExtension = window.devToolsExtension
//   //   if (typeof devToolsExtension === 'function') {
//   //     enhancers.push(devToolsExtension())
//   //   }
//   // }
  
//   // /* 2. 内嵌在页面中的 Redux DevTools 组件 */
//   // if (__COMPONENT_DEVTOOLS__) {
//   //   const DevTools = require('COMPONENT/DevTools').default
//   //   enhancers.push(DevTools.instrument())
//   // }
// }

// // ======================================================
// // 实例化 Store
// // ======================================================
// export const store = createStore(
//   createRootReducer(),
//   window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
//   compose(
//     applyMiddleware(...middlewares),
//     ...enhancers
//   )
// )

// // ======================================================
// // 配置 history 同步
// // ======================================================
// export const history = syncHistoryWithStore(
//   browserHistory,
//   store,
//   { selectLocationState: (state) => state.router }
// )

// export default store
