/*
 * @Author: hgs 
 * @Date: 2016-10-04 22:35:52 
 * @Last Modified by: hgs
 * @Last Modified time: 2016-10-05 01:06:16
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {AppBar, Paper } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = state => {
  return {
    // globalVal: state.globalVal.toJS(),
    // auth: state.auth.toJS(),
    // showmsg: state.showmsg.toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  //   static fetchData(params){
  //     return [Actions.getUserInfo(),Actions.getIndexImage()]
  //   }

  // static propTypes = {
  //   muiTheme: React.PropTypes.object
  // 
  // }
  // static childContextTypes = {
  //   muiTheme: React.PropTypes.object.isRequired,
  // }
  // getChildContext() {
  //   return { muiTheme: getMuiTheme() }
  // }

  //   componentWillReceiveProps(nextProps){
  //     const { globalVal } = this.props
  //     if(globalVal.styleMode !== nextProps.globalVal.styleMode){
  //       document.body.className = nextProps.globalVal.styleMode
  //     }
  //   }


  render() {
    // const { globalVal,actions,children,auth,location,showmsg } = this.props

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    }

    return (
      <MuiThemeProvider>
        <div>

          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <div>
            <Paper style={style} zDepth={1} />
            <Paper style={style} zDepth={2} />
            <Paper style={style} zDepth={3} />
            <Paper style={style} zDepth={4} />
            <Paper style={style} zDepth={5} />
          </div>



        </div>
      </MuiThemeProvider >
    )
  }
}