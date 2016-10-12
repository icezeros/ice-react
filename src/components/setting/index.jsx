import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Paper, Toggle } from 'material-ui'

import * as Actions from '../../redux/action'



const mapStateToProps = (state) => {
    return {
        dictionary: state.globals.toJS().dictionary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)

    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Setting extends Component {
    constructor(props) {
        super(props)
        // const {dictionary} = this.props;
    }

    toggleHandle(e) {
        const {baiDuSwitch, youDaoSwitch, googleSwitch, bingSwitch} = this.refs;
        const {actions} = this.props;
        let dictionary = {
            youDaoSwitch: youDaoSwitch.state.switched,
            baiDuSwitch: baiDuSwitch.state.switched,
            googleSwitch: googleSwitch.state.switched,
            bingSwitch: bingSwitch.state.switched
        }
        console.log(!this.refs[e.target.id].state.switched)
        dictionary[e.target.id] = !this.refs[e.target.id].state.switched;
        actions.setDictionary(dictionary)

        // console.log(e.target.id)
        // console.log(baiDuSwitch.state.switched)
        // console.log(baiDuSwitch)


    }

    render() {
        const {dictionary } = this.props;

        const mStyles = {
            paper: {
                margin: '0 auto',
                marginTop: '100px',
                height: 600,
                // width: 1000,
                maxWidth: 1000,
                minWidth: 500,
                padding: 50
            },
            block: {
                margin: '100px 100px',
                maxWidth: 200,
            },
            toggle: {
                marginBottom: 16,
            },
        }

        return (
            <Paper style={mStyles.paper} zDepth={4}>
                <div style={mStyles.block}>
                    <Toggle
                        label="百度翻译"
                        defaultToggled={dictionary.baiDuSwitch}
                        style={mStyles.toggle}
                        id="baiDuSwitch"
                        ref="baiDuSwitch"
                        onToggle={this.toggleHandle.bind(this)}
                        />
                    <Toggle
                        label="有道翻译"
                        defaultToggled={dictionary.youDaoSwitch}
                        id="youDaoSwitch"
                        ref="youDaoSwitch"
                        onToggle={this.toggleHandle.bind(this)}
                        style={mStyles.toggle}
                        />
                    <Toggle
                        label="必应翻译"
                        // disabled={true}
                        id="bingSwitch"
                        ref="bingSwitch"
                        defaultToggled={dictionary.bingSwitch}
                        onToggle={this.toggleHandle.bind(this)}
                        style={mStyles.toggle}
                        />
                    <Toggle
                        label="google翻译"
                        id="googleSwitch"
                        ref="googleSwitch"
                        defaultToggled={dictionary.googleSwitch}
                        onToggle={this.toggleHandle.bind(this)}
                        // labelPosition="right"
                        style={mStyles.toggle}
                        />
                </div>
            </Paper>

        )
    }

}
