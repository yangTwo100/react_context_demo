import React, { Component } from 'react';
import Parent from './Parent'
import PropTypes from 'prop-types'
import ChildOne from './components/ChildOne'
import ChildTwo from './components/ChildTwo'

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    changeValue = value => {
        this.setState({ value })
    }

    getChildContext() {
        return {
            value: this.state.value,
            changeValue: this.changeValue
        }
    }

    render() {
        return (
            <div>
                <Parent>
                    <ChildOne />
                </Parent>
                <Parent>
                    <ChildTwo />
                </Parent>
            </div>
        )
    }
}

Container.childContextTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func
}