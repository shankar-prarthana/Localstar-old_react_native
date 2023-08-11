import React, { Component } from 'react';
import {
    ImageBackground,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
    ToastAndroid
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Environment from './Environment'
import CommonUtils from './CommonUtils'
import styles from './StyleSheet'
export default class Dashboard extends Component {
    static navigationOptions = {
        title: 'DashboardActivity',
    };
    constructor(props) {
        super(props);
        this.state = {



        };
    }
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/green-watercolor-background-8.jpg')}
                    style={styles.background_image}>
                    <View>
                        <Text style={{
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: "5%",
        fontSize: 20
    }}>DASHBOARD</Text>
                    </View>
                    <KeyboardAvoidingView
                        behavior="padding"
                        enabled
                        style={{
                            marginTop: "2%",
                            alignSelf: "center",
                            borderStyle: "solid",
                            //borderWidth: 10,
                            //borderColor: "white",
                            borderRadius: 10,
                           // backgroundColor: "white",
                            width: "90%",
                            //flex: 
                        }}>
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.dashboard_row}>
                            <View
                                style={styles.dashboard_create_view}
                            >
                                <TouchableOpacity
                                    style={{ width: 100}}
                                //onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                >
                            <Text style={{  }}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.dashboard_rows_view}
                            >
                                <TouchableOpacity
                                    style={{ width: 200 }}
                                //onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                >

                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.dashboard_rows_view}
                            >
                                <TouchableOpacity
                                    style={{ width: 250 }}
                                //onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                >
                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.dashboard_rows_view}
                            >
                                <TouchableOpacity
                                    style={{ width: 125 }}
                                //onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                >

                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.dashboard_rows_view}
                            >
                                <TouchableOpacity
                                    style={{ width: 175 }}
                                //onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                >

                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.dashboard_rows_view}
                            >
                                <TouchableOpacity
                                    style={{ width: 75 }}
                                //onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                >
                                </TouchableOpacity>
                            </View>
                        </View>

                        
                    </View> 
                </KeyboardAvoidingView>
             </ImageBackground >
        </View>

        );
    }

}