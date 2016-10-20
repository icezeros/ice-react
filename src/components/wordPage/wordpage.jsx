import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Paper } from 'material-ui'

export default class WordPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zDepth: 2,
        }
    }

    _onMouseEnter() {
        this.setState({
            zDepth: 5,
        });
    }

    _onMouseLeave() {
        this.setState({
            zDepth: 2,
        });
    }

    render() {

        const mStyles = {
            paper: {
                margin: '80px',
                height: 600,
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
            <Paper
                style={mStyles.paper}
                zDepth={this.state.zDepth}
                onMouseEnter={this._onMouseEnter.bind(this)}
                onMouseLeave={this._onMouseLeave.bind(this)}

                >

            </Paper>
        )
    }





}