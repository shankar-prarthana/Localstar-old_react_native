import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import LoginUtils from './LoginUtils'

export default class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: LoginUtils.generateStrongPasswordHash('PraSid@1978','9B408AF7ACF80FBD6B11B9384FA2FAA8')
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.password}</Text>
            </View>
        );
    }
}