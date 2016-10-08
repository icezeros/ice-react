/*
 * @Author: hgs 
 * @Date: 2016-10-04 22:35:52 
 * @Last Modified by: hgs
 * @Last Modified time: 2016-10-09 01:17:14
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {AppBar, Paper, RaisedButton, styles} from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {grey100, yellow500, blue500} from 'material-ui/styles/colors'
// let {getMuiTheme, MuiThemeProvider, red500, yellow500, blue500} = styles;


import * as Actions from '../redux/action'

const mapStateToProps = state => {
  return {
    globals: state.globals.toJS(),
    // auth: state.auth.toJS(),
    // showmsg: state.showmsg.toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    open: false,
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
  handleClose() {
    console.log("======")
    const {actions} = this.props;
    actions.setDictionary({
      youDaoSwitch: false,
      baiDuSwitch: true,
      googleSwitch: true,
      bingSwitch: true
    })
    // this.setState({ open: !this.state.open })
    // alert("=====")

  }



  render() {
    // const { globalVal,actions,children,auth,location,showmsg } = this.props
    const {actions, children} = this.props

    // const style = {
    //   height: 100,
    //   width: 100,
    //   margin: 20,
    //   textAlign: 'center',
    //   display: 'inline-block',
    // }
    const mStyles = {
      paper: {
        margin: '80px',
        height: 1000,
        width: 600,

        textAlign: 'center',
        display: 'inline-block'
      },
      appBar: {
        position: 'fixed',
        // height: 64,
        top: 0,
        right: 0,
        zIndex: 1101,
        width: '100%',
        // backgroundColor: grey100
      },
      contain: {
        margin: '0 auto',
        maxWidth: '2600px'
      }
    };


    return (
      <MuiThemeProvider>
        <div>

          <AppBar
            zDepth={2}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={mStyles.appBar}
            />
          {children}



          <div style={mStyles.contain}>


            <RaisedButton label="Default"
              onTouchTap={this.handleClose.bind(this) }
              />
            <Paper style={mStyles.paper} zDepth={3} />

          </div>




        </div>
      </MuiThemeProvider >
    )
  }
}