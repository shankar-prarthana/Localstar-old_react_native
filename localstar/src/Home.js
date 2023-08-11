import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './StyleSheet'

export default class Home extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/6905241.png')}
                    style={styles.background_image}>
                    <KeyboardAvoidingView behavior="padding" enabled >
                        <View >
                            <Text style={styles.title}>LOCAL STAR</Text>
                            <View style={styles.welcome_container}>
                                <View style={styles.welcome_tile}>
                                    <View>
                                        <Text style={styles.welcome_title} >influencer</Text>
                                        <Text style={styles.welcome_body}>a person or thing that influences somebody/something, especially a person with the ability to influence potential buyers of a product or service by recommending it on social media.</Text>
                                    </View>
                                    <View style={styles.button_row}>
                                        <TouchableOpacity
                                            style={styles.enabled_button}
                                            onPress={() => this.props.navigation.navigate('SocialMedia')}>
                                            <Text style={{ fontSize: 18, color: "white" }}> Sign up </Text>
                                            <Text style={{ fontSize: 18, color: "white" }}> as an Influencer </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.welcome_tile}>
                                    <View>
                                        <Text style={styles.welcome_title}>business</Text>
                                        <Text style={styles.welcome_body}>the activity of making, buying, selling or supplying goods or services for money.</Text>
                                    </View>
                                    <View style={styles.button_row}>
                                        <TouchableOpacity
                                            style={styles.enabled_button}
                                            onPress={() => this.props.navigation.navigate('Business')}>
                                            <Text style={{ fontSize: 18, color: "white" }}> Sign up </Text>
                                            <Text style={{ fontSize: 18, color: "white" }}> as a Business </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.signup_row}>
                                <Text style={{ color: 'black', fontSize: 20 }}> Already have an account? </Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Login')}>
                                    <Text style={{ fontWeight: "bold", fontSize: 18 }}> Login </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}
