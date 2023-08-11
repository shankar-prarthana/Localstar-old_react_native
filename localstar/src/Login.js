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
import LoginUtils from './LoginUtils'
import styles from './StyleSheet'
import SignUp from './SignUp';

export default class Login extends Component {
    static navigationOptions = {
        title: 'LoginActivity',
    };

    constructor(props) {
        super(props);

        this.onLoginButtonPressed = this.onLoginButtonPressed.bind(this);
        this.onIconPress = this.onIconPress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleMobile = this.handleMobile.bind(this);

        this.state = {
            isd_code: '',
            mobile: '',
            email: '',
            password: '',
            checked: false,
            iconName: 'eye-off',
            isMobileActive: false,
            isEmailActive: false,
            isPasswordActive: false,
            emailValid: true,
            mobileValid: true,
            passwordValid: true,
            loginDisabled: true,
            loginByEmail: false,
            salt: '',
            hashcode: '',
            firstName: '',
            lastName: '',
            token: '',
            goToSignUp: false,
        };
    }

    onIconPress = () => {
        this.setState({
            checked: !this.state.checked,
            iconName: (this.state.checked) ? 'eye-off' : 'eye'
        });
    }

    onLoginButtonPressed = () => {
        let saltUri = '';

        if (this.state.loginByEmail) {
            const encodedEmail = encodeURIComponent(this.state.email);
            saltUri = `${Environment.baseUrl}/ifarm-core/rest/salt/email?email=${encodedEmail}`;
        } else {
            const encodedIsd_code = encodeURIComponent(this.state.isd_code);
            const encodedMobile = encodeURIComponent(this.state.mobile);
            saltUri = `${Environment.baseUrl}/ifarm-core/rest/salt/mobile?isd_code=${encodedIsd_code}&mobile=${encodedMobile}`;
        }

        fetch(saltUri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (LoginUtils.checkSaltStatus(json)) {
                    this.setState({
                        salt: json.salt,
                        hashcode: LoginUtils.generateStrongPasswordHash(this.state.password, json.salt)
                    }, function () {
                        let loginUri = '';

                        if (this.state.loginByEmail) {
                            const encodedEmail = encodeURIComponent(this.state.email);
                            loginUri = `${Environment.baseUrl}/ifarm-core/rest/login/email?email=${encodedEmail}&password=${this.state.hashcode}`;
                        } else {
                            const encodedIsd_code = encodeURIComponent(this.state.isd_code);
                            const encodedMobile = encodeURIComponent(this.state.mobile);
                            loginUri = `${Environment.baseUrl}/ifarm-core/rest/login/mobile?isd_code=${encodedIsd_code}&mobile=${encodedMobile}&password=${this.state.hashcode}`;
                        }

                        fetch(loginUri, {
                            method: "GET"
                        }).then(response => response.json())
                            .then(json => {
                                if (LoginUtils.checkLoginStatus(json)) {
                                    this.setState({
                                        firstName: json.user.given_name,
                                        lastName: json.user.family_name,
                                        token: json.session.token
                                    }, function () {
                                        ToastAndroid.showWithGravity("Welcome " + this.state.firstName + " " + this.state.lastName + ".", ToastAndroid.SHORT, ToastAndroid.CENTER);
                                    });
                                }
                            })
                            .catch(error => {
                                ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                return;
                            });

                    });
                }
            })
            .catch(error => {
                ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.CENTER);
                return;
            });
    }

    handleEmail = (text) => {
        this.setState({ email: text });

        if (text.length == 0) {
            this.setState({
                emailValid: true,
                loginDisabled: true
            });
            return;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({
                emailValid: false,
                loginDisabled: true
            });
        } else {
            if (this.state.passwordValid) {
                this.setState({
                    emailValid: true,
                    loginDisabled: false
                });
            } else {
                this.setState({
                    emailValid: true,
                    loginDisabled: true
                });
            }
        }
    }

    handlePassword = (text) => {
        this.setState({ password: text });

        if (text.length == 0) {
            this.setState({
                passwordValid: false,
                loginDisabled: true
            });
            return;
        }

        this.setState({
            passwordValid: true,
            loginDisabled: true
        });

        if (this.state.loginByEmail) {
            if (this.state.emailValid && (this.state.email.length != 0)) {
                this.setState({ loginDisabled: false });
                return;
            }
        } else {
            if (this.state.mobileValid && (this.state.mobile.length != 0) && (this.state.isd_code.length != 0)) {
                this.setState({ loginDisabled: false });
                return;
            }
        }
    }

    handleMobile = (text) => {
        if (text.length > 10) {
            return;
        }

        this.setState({
            mobile: text,
            mobileValid: false,
            loginDisabled: true
        });

        if (this.state.isd_code === '' || text.length == 0) {
            this.setState({
                mobileValid: true,
                loginDisabled: true
            });
            return
        }

        let reg;

        switch (this.state.isd_code) {
            case '91':
                reg = new RegExp("[7-9][0-9]{9}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true });
                    if (this.state.passwordValid) {
                        this.setState({ loginDisabled: false });
                    } else {
                        this.setState({ loginDisabled: true });
                    }
                }
                break;
            case '44':
                reg = new RegExp("7[1,3-9][0-9]{8}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true });
                    if (this.state.passwordValid) {
                        this.setState({ loginDisabled: false });
                    } else {
                        this.setState({ loginDisabled: true });
                    }
                }
                break;
            case '971':
                reg = new RegExp("5[0,5][0-9]{7}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true });
                    if (this.state.passwordValid) {
                        this.setState({ loginDisabled: false });
                    } else {
                        this.setState({ loginDisabled: true });
                    }
                }
                break;
        }
    }

    render() {
        return (
            <View>
                {(this.state.goToSignUp) ?
                    <View>
                        <SignUp />
                    </View> :
                    <View>
                        <ImageBackground source={require('../assets/6905241.png')}
                            style={styles.background_image}>

                            <View>
                                <Text style={styles.title}>LOCAL STAR</Text>
                                <Text style={styles.secondary_title}>Login</Text>
                            </View>

                            <KeyboardAvoidingView
                                behavior="padding"
                                enabled
                                style={styles.container}>
                                <View style={styles.tab}>
                                    <TouchableOpacity onPress={() => this.setState({ loginByEmail: false })}>
                                        <Text style={(this.state.loginByEmail) ? styles.unselected_tab : styles.selected_tab}> Mobile Number </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ loginByEmail: true })}>
                                        <Text style={(this.state.loginByEmail) ? styles.selected_tab : styles.unselected_tab}> Email </Text>
                                    </TouchableOpacity>
                                </View>
                                {(!this.state.loginByEmail) ?
                                    <View style={(this.state.isMobileActive) ?
                                        ((this.state.mobileValid) ? styles.active_row : styles.active_invalid_row) :
                                        ((this.state.mobileValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                        <Picker
                                            selectedValue={this.state.isd_code}
                                            style={{
                                                width: "35%",
                                                height: 27,
                                                fontSize: 18,
                                                borderWidth: 0,
                                            }}
                                            mode="dropdown"
                                            autoFocus={true}
                                            placeholder={"ISD Code"}
                                            value={this.state.isd_code}
                                            onFocus={() => this.setState({ isMobileActive: true, })}
                                            onBlur={() => this.setState({ isMobileActive: false, })}
                                            returnKeyType="next"
                                            ref={(input) => this.isd_codeInput = input}
                                            onSubmitEditing={() => this.mobileInput.focus()}
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.setState(
                                                    { isd_code: itemValue },
                                                    () => { this.handleMobile(this.state.mobile); }
                                                )
                                            }>
                                            <Picker.Item label="ISD" value="" />
                                            <Picker.Item label="44" value="44" />
                                            <Picker.Item label="91" value="91" />
                                            <Picker.Item label="971" value="971" />
                                        </Picker>

                                        <TextInput
                                            style={{ width: "65%", fontSize: 18, outline: "none" }}
                                            maxLength={10}
                                            keyboardType={"numeric"}
                                            placeholder="Mobile Number"
                                            onChangeText={(text) => this.handleMobile(text)}
                                            value={this.state.mobile}
                                            onFocus={() => this.setState({ isMobileActive: true, })}
                                            onBlur={() => this.setState({ isMobileActive: false, })}
                                            returnKeyType="next"
                                            ref={(input) => this.mobileInput = input}
                                            onSubmitEditing={() => this.passwordInput.focus()}
                                        />
                                    </View>
                                    :
                                    <View style={(this.state.isEmailActive) ?
                                        ((this.state.emailValid) ? styles.active_row : styles.active_invalid_row) :
                                        ((this.state.emailValid) ? styles.non_active_row : styles.non_active_invalid_row)} >
                                        <TextInput
                                            autoFocus={true}
                                            style={{ width: "100%", fontSize: 18, outline: "none" }}
                                            autoCapitalize="none"
                                            keyboardType="email-address"
                                            autoCorrect={false}
                                            placeholder="Email Address"
                                            onChangeText={(text) => this.handleEmail(text)}
                                            value={this.state.email}
                                            onFocus={() => this.setState({ isEmailActive: true, })}
                                            onBlur={() => this.setState({ isEmailActive: false, })}
                                            returnKeyType="next"
                                            ref={(input) => this.emailInput = input}
                                            onSubmitEditing={() => this.passwordInput.focus()}
                                        />
                                    </View>
                                }
                                <View
                                    style={(this.state.isPasswordActive) ?
                                        ((this.state.passwordValid) ? styles.active_row : styles.active_invalid_row) :
                                        ((this.state.passwordValid) ? styles.non_active_row : styles.non_active_invalid_row)} >
                                    <TextInput
                                        style={{ width: "95%", fontSize: 18, outline: "none" }}
                                        secureTextEntry={!this.state.checked}
                                        placeholder="Password"
                                        onChangeText={(text) => this.handlePassword(text)}
                                        value={this.state.password}
                                        onFocus={() => this.setState({ isPasswordActive: true, })}
                                        onBlur={() => this.setState({ isPasswordActive: false, })}
                                        returnKeyType="go"
                                        ref={(input) => this.passwordInput = input}
                                    />
                                    <TouchableOpacity
                                        style={{ height: 25 }}
                                        onPress={this.onIconPress}
                                        onFocus={() => this.setState({ isPasswordActive: true, })}
                                        onBlur={() => this.setState({ isPasswordActive: false, })}>
                                        <Icon name={this.state.iconName} size={20} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.forgotPassword_row}>
                                    <TouchableOpacity>
                                        <Text style={{
                                            fontSize: 15,
                                            color: "blue"
                                        }}> Forgot password? </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.button_row}>
                                    <TouchableOpacity
                                        onPress={!this.state.loginDisabled && this.onLoginButtonPressed}
                                        style={(this.state.loginDisabled) ? styles.disabled_button : styles.enabled_button}>
                                        <Text style={{ fontSize: 18, color: "white" }}> Login </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.signup_row}>
                                    <Text style={{ fontSize: 18 }}>Don't already have an account? </Text>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ goToSignUp: true })}>
                                        <Text style={{ fontWeight: "bold", fontSize: 18 }}> Sign up </Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView >
                        </ImageBackground >
                    </View>
                }
            </View>
        );
    }
}
