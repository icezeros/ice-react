import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Paper, Toggle} from 'material-ui'

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
    }

    render() {

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
                        defaultToggled={true}
                        style={mStyles.toggle}
                        />
                    <Toggle
                        label="有道翻译"
                        defaultToggled={true}
                        style={mStyles.toggle}
                        />
                    <Toggle
                        label="必应翻译"
                        // disabled={true}
                        defaultToggled={true}
                        style={mStyles.toggle}
                        />
                    <Toggle
                        label="google翻译"
                        // labelPosition="right"
                        style={mStyles.toggle}
                        />
                </div>
            </Paper>

        )
    }

}
