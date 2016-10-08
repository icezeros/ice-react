/*
 * @Author: hgs 
 * @Date: 2016-10-04 22:14:07 
 * @Last Modified by: hgs
 * @Last Modified time: 2016-10-07 19:48:22
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import globals from './globals'
// import { articleList, articleDetail,prenextArticle } from './article'
// import tagList from './tagList'
// import commentList from './comment'
// import auth from './auth'
// import options from './options'
// import apps from './apps'
// import sns from './sns'
// import showmsg from './showmsg'
// import globalVal from './globalVal'

const rootReducer = combineReducers({
  //   globalVal,
  //   apps,
  //   sns,
  //   tagList,
  //   articleList,
  //   articleDetail,
  //   commentList,
  //   prenextArticle,
  //   options,
  //   auth,
  //   showmsg,
  globals: globals,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
