import React, { Component } from 'react';
import {
    ImageBackground,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import styles from './StyleSheet';
import Environment from './Environment';
import CommonUtils from './CommonUtils';
import ForgotPasswordUtils from './ForgotPasswordUtils';

export default class ForgotPassword extends Component {
    static navigationOptions = {
        title: 'ForgotPassword',
    };

    constructor(props) {
        super(props);

        this.onSendLinkButtonPressed = this.onSendLinkButtonPressed.bind(this);
        this.onSendOtpButtonPressed = this.onSendOtpButtonPressed.bind(this);
        this.onVerifyOtpButtonPressed = this.onVerifyOtpButtonPressed.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleOtp = this.handleOtp.bind(this);

        this.state = {
            resetByEmail: false,
            isd_code: '',
            mobile: '',
            email: '',
            password: '',
            otp: '',
            timer: 30,
            checked: false,
            iconName: 'eye-off',
            isMobileActive: false,
            isEmailActive: false,
            isOtpActive: false,
            isPasswordActive: false,
            emailValid: true,
            mobileValid: true,
            passwordValid: true,
            sendOtpDisabled: true,
            verifyOtpDisabled: true,
            sendlinkDisabled: true,
            checkOtp: false,
            passwordScore: 0,
            resetDisable: true,
            mobileVerified: false,
            token: ''
        };

    }

    onResetButtonPressed = () => {
        let hashcode = CommonUtils.generateStrongPasswordHash(this.state.password);
        let uri = `${Environment.baseUrl}/ifarm-core/rest/changePassword?token=${this.state.token}&new_password=${hashcode}`;

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (ForgotPasswordUtils.checkChangePasswordStatus(json)) {
                    alert(json.response.message);
                }
            })
            .catch(error => {
                alert(error);
                return;
            });
    }

    onIconPress = () => {
        this.setState({
            checked: !this.state.checked,
            iconName: (this.state.checked) ? 'eye-off' : 'eye'
        });
    }

    handleEmail = (text) => {
        this.setState({ email: text });

        if (text.length == 0) {
            this.setState({
                emailValid: true,
                sendlinkDisabled: true
            });
            return;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({
                emailValid: false,
                sendlinkDisabled: true
            });
        } else {
            this.setState({
                emailValid: true,
                sendlinkDisabled: false
            });
        }
    }

    handleOtp = (text) => {
        if (text.length > 4) {
            return;
        }

        if (text.length == 0) {
            this.setState({
                otp: text,
                otpValid: true,
                verifyOtpDisabled: true
            });
            return;
        }

        if (text.length == 4) {
            this.setState({
                otp: text,
                otpValid: true,
                verifyOtpDisabled: false
            });
        } else {
            this.setState({
                otp: text,
                otpValid: false,
                verifyOtpDisabled: true
            });
        }
    }

    handlePassword = (text) => {
        let score = CommonUtils.getPasswordScore(text);
        let passwordValid = false;

        if (score >= 80) {
            this.setState({ resetDisable: false });
            passwordValid = true;
        }
        else {
            this.setState({ resetDisable: true });
        }

        this.setState({
            password: text,
            passwordValid: passwordValid,
            passwordScore: score
        });
    }

    handleMobile = (text) => {
        if (text.length > 10) {
            return;
        }

        this.setState({
            mobile: text,
            mobileValid: false,
            sendOtpDisabled: true
        });

        if (this.state.isd_code === '' || text.length == 0) {
            this.setState({
                mobileValid: true,
                sendOtpDisabled: true,

            });
            return
        }

        let reg;

        switch (this.state.isd_code) {
            case '91':
                reg = new RegExp("[7-9][0-9]{9}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true, sendOtpDisabled: false });
                }
                break;
            case '44':
                reg = new RegExp("7[1,3-9][0-9]{8}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true, sendOtpDisabled: false });
                }
                break;
            case '971':
                reg = new RegExp("5[0,5][0-9]{7}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true, sendOtpDisabled: false });
                }
                break;
        }
    }

    onSendOtpButtonPressed = () => {
        this.setState({
            timer: 30,
            checkOtp: true,
            sendOtpDisabled: true
        }, () => {
            this.interval = setTimeout(() => {
                return this.setState({
                    sendOtpDisabled: false,
                });
            }, 30000);

            this.interval = setInterval(
                () => {
                    return this.setState((prevState) => {
                        return { timer: prevState.timer - 1 };
                    });
                },
                1000
            );
        });

        const encodedIsd_code = encodeURIComponent(this.state.isd_code);
        const encodedMobile = encodeURIComponent(this.state.mobile);
        let uri = `${Environment.baseUrl}/ifarm-core/rest/sendValidationOtp?isd_code=${encodedIsd_code}&mobile=${encodedMobile}`;

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (ForgotPasswordUtils.checkSendValidationOtpStatus(json)) {
                    alert(json.response.message);
                }
            })
            .catch(error => {
                alert(error);

                clearInterval(this.interval);
                this.setState({
                    timer: 0,
                    sendOtpDisabled: false,
                    verifyOtpDisabled: true,
                    checkOtp: false
                });
                return;
            });
    }

    onSendLinkButtonPressed = () => {
        alert('onSendLinkButtonPressed');

        const encodedEmail = encodeURIComponent(this.state.email);
        let uri = `${Environment.baseUrl}/ifarm-core/rest/sendPasswordResetEmail?email=${encodedEmail}`;

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (SignUpUtils.checkSendPasswordResetEmailStatus(json)) {
                    alert(json.response.message);
                }
            })
            .catch(error => {
                alert(error);
                return;
            });
    }

    onVerifyOtpButtonPressed = () => {
        clearInterval(this.interval);
        this.setState({
            timer: 0,
            verifyOtpDisabled: true,

        });

        const encodedIsd_code = encodeURIComponent(this.state.isd_code);
        const encodedMobile = encodeURIComponent(this.state.mobile);
        const encodedOtp = encodeURIComponent(this.state.otp);
        let uri = `${Environment.baseUrl}/ifarm-core/rest/validateOtp?isd_code=${encodedIsd_code}&mobile=${encodedMobile}&otp=${encodedOtp}`;

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (ForgotPasswordUtils.checkValidateOtpStatus(json)) {
                    this.setState({
                        token: json.session.token,
                        mobileVerified: true,
                        checkOtp: false,
                        sendOtpDisabled: true
                    }, () => {
                        alert(json.response.message);
                    });
                }
            })
            .catch(error => {
                alert(error);

                clearInterval(this.interval);
                this.setState({
                    timer: 0,
                    sendOtpDisabled: false,
                    verifyOtpDisabled: true,
                    checkOtp: false
                });
                return;
            });
    }

    render() {
        return (
            <ImageBackground source={require('../assets/6905241.png')}
                style={styles.background_image}>
                <View>
                    <Text style={styles.title}>LOCAL STAR</Text>
                    <Text style={styles.secondary_title}>Forgot password</Text>
                </View>
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                    style={styles.container}>
                    <View style={styles.tab}>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                resetByEmail: false,
                                isd_code: '',
                                mobile: '',
                                mobileValid: ''
                            })}
                        >
                            <Text
                                style={(this.state.resetByEmail) ? styles.unselected_tab : styles.selected_tab}> Mobile Number </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                resetByEmail: true,
                                email: '',
                                sendlinkDisabled: true
                            })}
                        >
                            <Text
                                style={(this.state.resetByEmail) ? styles.selected_tab : styles.unselected_tab}> Email </Text>
                        </TouchableOpacity>
                    </View>
                    {(!this.state.resetByEmail) ?
                        <View>
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
                                    enabled={!this.state.checkOtp}
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
                                    style={(this.state.checkOtp) ? styles.text_disabled : styles.text_enabled}
                                    maxLength={10}
                                    editable={!this.state.checkOtp}
                                    keyboardType={"numeric"}
                                    placeholder="Mobile Number"
                                    onChangeText={(text) => this.handleMobile(text)}
                                    value={this.state.mobile}
                                    onFocus={() => this.setState({ isMobileActive: true, })}
                                    onBlur={() => this.setState({ isMobileActive: false, })}
                                    returnKeyType="go"
                                    ref={(input) => this.mobileInput = input}

                                />
                                <TouchableOpacity
                                    onPress={!this.state.sendOtpDisabled && this.onSendOtpButtonPressed}
                                    disabled={this.state.sendOtpDisabled}
                                    style={(this.state.sendOtpDisabled) ? styles.disabled_button_inrow : styles.enabled_button_inrow}>
                                    <Text style={{ fontSize: 18, color: "white", outline: "none" }}> Send OTP </Text>
                                </TouchableOpacity>

                            </View>
                            {(this.state.checkOtp) ?
                                <View>
                                    <View style={(this.state.isOtpActive) ?
                                        ((this.state.otpValid) ? styles.active_row : styles.active_invalid_row) :
                                        ((this.state.otpValid) ? styles.non_active_row : styles.non_active_invalid_row)}>

                                        <TextInput
                                            style={{ width: "65%", fontSize: 18, outline: "none", letterSpacing: 10 }}
                                            maxLength={4}
                                            keyboardType={"numeric"}
                                            placeholder="OTP"
                                            onChangeText={(text) => this.handleOtp(text)}
                                            value={this.state.otp}
                                            onFocus={() => this.setState({ isOtpActive: true, })}
                                            onBlur={() => this.setState({ isOtpActive: false, })}
                                            returnKeyType="next"
                                            ref={(input) => this.otpInput = input}
                                        />
                                        <TouchableOpacity
                                            onPress={!this.state.verifyOtpDisabled && this.onVerifyOtpButtonPressed}
                                            style={(this.state.verifyOtpDisabled) ? styles.disabled_button_inrow : styles.enabled_button_inrow}>
                                            <Text style={{ fontSize: 18, color: "white", outline: "none" }}> Verify </Text>
                                        </TouchableOpacity>

                                    </View>

                                    {(this.state.timer >= 1) ?
                                        <View style={styles.resendOtp_row}>
                                            <Text>Resend OTP in </Text>
                                            {(this.state.timer >= 10) ? <Text> 00:{this.state.timer}</Text> : <Text> 00:0{this.state.timer}</Text>}
                                            <Text> seconds</Text>

                                        </View>
                                        :
                                        <Text></Text>
                                    }
                                </View>
                                :
                                <View>
                                </View>
                            }
                            {(this.state.mobileVerified) ?
                                <View>
                                    <View
                                        style={(this.state.isPasswordActive) ?
                                            ((this.state.passwordValid) ? styles.active_row : styles.active_invalid_row) :
                                            ((this.state.passwordValid) ? styles.non_active_row : styles.non_active_invalid_row)} >
                                        <TextInput
                                            style={{ width: "95%", fontSize: 18, outline: "none" }}
                                            secureTextEntry={!this.state.checked}
                                            placeholder="New Password"
                                            onChangeText={(text) => this.handlePassword(text)}
                                            value={this.state.password}
                                            onFocus={() => this.setState({ isPasswordActive: true, })}
                                            onBlur={() => this.setState({ isPasswordActive: false, })}
                                            returnKeyType="go"
                                            ref={(input) => this.passwordInput = input}
                                        />

                                        <TouchableOpacity
                                            style={{ height: 25, width: 32 }}
                                            onPress={this.onIconPress}
                                            onFocus={() => this.setState({ isPasswordActive: true, })}
                                            onBlur={() => this.setState({ isPasswordActive: false, })}>
                                            <Icon name={this.state.iconName} size={20} />
                                        </TouchableOpacity>

                                        <View style={(this.state.passwordScore >= 80) ? styles.password_strengthVeryStrong :
                                            ((this.state.passwordScore >= 60) ? styles.password_strengthStrong :
                                                ((this.state.passwordScore >= 40) ? styles.password_strengthModerate :
                                                    ((this.state.passwordScore >= 20) ? styles.password_strengthWeak : styles.password_strengthVeryWeak)))}>
                                            <Text> </Text>
                                        </View>
                                    </View>
                                    <View style={styles.button_row}>
                                        <TouchableOpacity
                                            onPress={!this.state.resetDisable && this.onResetButtonPressed}
                                            style={(this.state.resetDisable) ? styles.disabled_button : styles.enabled_button}>
                                            <Text style={{ fontSize: 18, color: "white" }}> Reset </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                <View></View>
                            }
                        </View>
                        :
                        <View style={(this.state.isEmailActive) ?
                            ((this.state.emailValid) ? styles.active_row : styles.active_invalid_row) :
                            ((this.state.emailValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                            <TextInput
                                style={{ width: "100%", fontSize: 18, outline: "none" }}
                                keyboardType="email-address"
                                placeholder="Email"
                                onChangeText={(text) => this.handleEmail(text)}
                                value={this.state.Email}
                                onFocus={() => this.setState({ isEmailActive: true, })}
                                onBlur={() => this.setState({ isEmailActive: false, })}
                                returnKeyType="next"
                                ref={(input) => this.emailInput = input}
                            />
                            <TouchableOpacity
                                onPress={!this.state.sendlinkDisabled && this.onSendLinkButtonPressed}
                                disabled={this.state.sendlinkDisabled}
                                style={(this.state.sendlinkDisabled) ? styles.disabled_button_inrow : styles.enabled_button_inrow}>
                                <Text style={{ fontSize: 18, color: "white", outline: "none" }}> Reset </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}