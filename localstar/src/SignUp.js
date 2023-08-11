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
import Environment from './Environment'
import CommonUtils from './CommonUtils'
import SignUpUtils from './SignUpUtils'
import styles from './StyleSheet'


export default class SignUp extends Component {
    static navigationOptions = {
        title: 'SignupActivity',
    };

    constructor(props) {
        super(props);

        this.onSignupButtonPressed = this.onSignupButtonPressed.bind(this);
        this.onSendOtpButtonPressed = this.onSendOtpButtonPressed.bind(this);
        this.onVerifyOtpButtonPressed = this.onVerifyOtpButtonPressed.bind(this);
        this.onIconPress = this.onIconPress.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleOtp = this.handleOtp.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            isd_code: '',
            mobile: '',
            otp: '',
            email: '',
            timer: 30,
            firstNameValid: true,
            lastNameValid: true,
            mobileValid: true,
            otpValid: true,
            emailValid: true,
            mobileVerified: false,
            passwordValid: true,
            sendOtpDisabled: true,
            verifyOtpDisabled: true,
            signUpDisabled: true,
            isFirstNameActive: false,
            isLastNameActive: false,
            isMobileActive: false,
            isEmailActive: false,
            isPasswordActive: false,
            isOtpActive: false,
            checked: false,
            checkOtp: false,
            iconName: 'eye-off',
            passwordScore: 0
        };
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
                signUpDisabled: true
            });
            return;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({
                emailValid: false,
                signUpDisabled: true
            });
        } else {
            this.setState({
                emailValid: true
            }, () => {
                this.validateForm();
            });
        }
    }

    validateForm = () => {
        if (this.state.mobileValid &&
            (this.state.mobile.length != 0) &&
            (this.state.isd_code.length != 0) &&
            !this.state.mobileVerified) {
            this.setState({
                sendOtpDisabled: false
            });
        } else {
            this.setState({
                sendOtpDisabled: true
            });
        }

        if (this.state.firstNameValid &&
            (this.state.firstName.length != 0) &&
            this.state.lastNameValid &&
            (this.state.lastName.length != 0) &&
            this.state.mobileValid &&
            (this.state.mobile.length != 0) &&
            (this.state.isd_code.length != 0) &&
            this.state.mobileVerified &&
            this.state.emailValid &&
            (this.state.email.length != 0) &&
            this.state.passwordValid &&
            (this.state.password.length != 0)) {
            this.setState({
                signUpDisabled: false
            });
        } else {
            this.setState({
                signUpDisabled: true
            });
        }
    }

    handleFirstName = (text) => {
        this.setState({
            firstName: text,
            firstNameValid: true
        }, () => {
            this.validateForm();
        });
    }

    handleLastName = (text) => {
        this.setState({
            lastName: text,
            lastNameValid: true
        }, () => {
            this.validateForm();
        });
    }

    handlePassword = (text) => {
        let score = CommonUtils.getPasswordScore(text);
        let passwordValid = false;
        if (score >= 80) {
            passwordValid = true;
        }
        this.setState({
            password: text,
            passwordValid: passwordValid,
            passwordScore: score,

        }, () => {
            this.validateForm();
        });
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

    handleMobile = (text) => {
        if (text.length > 10) {
            return;
        }

        this.setState({
            mobile: text,
            mobileValid: false,
            signUpDisabled: true
        });

        if (this.state.isd_code === '' || text.length == 0) {
            this.setState({
                mobileValid: true,
                signUpDisabled: true
            });
            return
        }

        let reg;

        switch (this.state.isd_code) {
            case '91':
                reg = new RegExp("[7-9][0-9]{9}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true }, () => {
                        this.validateForm();
                    });
                }
                break;
            case '44':
                reg = new RegExp("7[1,3-9][0-9]{8}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true }, () => {
                        this.validateForm();
                    });
                }
                break;
            case '971':
                reg = new RegExp("5[0,5][0-9]{7}");
                if (reg.test(text) == true) {
                    this.setState({ mobileValid: true }, () => {
                        this.validateForm();
                    });
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
        let uri = `${Environment.baseUrl}/ifarm-core/rest/sendVerificationOtp?isd_code=${encodedIsd_code}&mobile=${encodedMobile}`;

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (SignUpUtils.checkSendVerificationOtpStatus(json)) {
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

    onVerifyOtpButtonPressed = () => {
        clearInterval(this.interval);
        this.setState({
            timer: 0,
            verifyOtpDisabled: true
        });

        const encodedIsd_code = encodeURIComponent(this.state.isd_code);
        const encodedMobile = encodeURIComponent(this.state.mobile);
        const encodedOtp = encodeURIComponent(this.state.otp);
        let uri = `${Environment.baseUrl}/ifarm-core/rest/validateOtp?isd_code=${encodedIsd_code}&mobile=${encodedMobile}&otp=${encodedOtp}`;

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (SignUpUtils.checkValidateOtpStatus(json)) {
                    this.setState({
                        mobileVerified: true,
                        checkOtp: false,
                        sendOtpDisabled: true
                    }, () => {
                        this.validateForm();
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

    onSignupButtonPressed = () => {
        const encodedFirstName = encodeURIComponent(this.state.firstName);
        const encodedLastName = encodeURIComponent(this.state.lastName);
        const encodedEmail = encodeURIComponent(this.state.email);
        const encodedIsd_code = encodeURIComponent(this.state.isd_code);
        const encodedMobile = encodeURIComponent(this.state.mobile);
        let hashcode = CommonUtils.generateStrongPasswordHash(this.state.password);
        let uri = `${Environment.baseUrl}/ifarm-core/rest/signup?given_name=${encodedFirstName}&family_name=${encodedLastName}&email=${encodedEmail}&isd_code=${encodedIsd_code}&mobile=${encodedMobile}&password=${hashcode}`;
        alert(uri);

        fetch(uri, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                if (SignUpUtils.checkSignupStatus(json)) {
                    alert(json.response.message);
                }
            })
            .catch(error => {
                alert(error);
                return;
            });
    }

    render() {
        return (
            <ImageBackground source={require('../assets/6905241.png')}
                style={styles.background_image}>

                <View>
                    <Text style={styles.title}>LOCAL STAR</Text>
                    <Text style={styles.secondary_title}>Signup</Text>
                </View>

                <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                    <View style={styles.seperated_row}>
                        <View style={(this.state.isFirstNameActive) ?
                            ((this.state.firstNameValid) ? styles.active_row_2 : styles.active_invalid_row_2) :
                            ((this.state.firstNameValid) ? styles.non_active_row_2 : styles.non_active_invalid_row_2)}>
                            <TextInput
                                style={{ width: "100%", fontSize: 18, outline: "none" }}
                                placeholder="First Name"
                                autoFocus={true}
                                onChangeText={(text) => this.handleFirstName(text)}
                                value={this.state.firstName}
                                onFocus={() => this.setState({ isFirstNameActive: true, })}
                                onBlur={() => this.setState({ isFirstNameActive: false, })}
                                returnKeyType="next"
                                ref={(input) => this.firstNameInput = input}
                                onSubmitEditing={() => this.lastNameInput.focus()}
                            />
                        </View>
                        <View style={(this.state.isLastNameActive) ?
                            ((this.state.lastNameValid) ? styles.active_row_2 : styles.active_invalid_row_2) :
                            ((this.state.lastNameValid) ? styles.non_active_row_2 : styles.non_active_invalid_row_2)}>
                            <TextInput
                                style={{ width: "100%", fontSize: 18, outline: "none" }}
                                placeholder="Last Name"
                                onChangeText={(text) => this.handleLastName(text)}
                                value={this.state.LastName}
                                onFocus={() => this.setState({ isLastNameActive: true, })}
                                onBlur={() => this.setState({ isLastNameActive: false, })}
                                returnKeyType="next"
                                ref={(input) => this.lastNameInput = input}
                                onSubmitEditing={() => this.isd_codeInput.focus()}
                            />
                        </View>
                    </View>

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
                            returnKeyType="next"
                            ref={(input) => this.mobileInput = input}
                            onSubmitEditing={() => this.emailInput.focus()}
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
                                    onSubmitEditing={() => this.emailInput.focus()}

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
                            onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    </View>

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

                    <View style={{ paddingTop: "5%" }}>
                        <TouchableOpacity
                            onPress={!this.state.signUpDisabled && this.onSignupButtonPressed}
                            style={(this.state.signUpDisabled) ? styles.disabled_button : styles.enabled_button}>
                            <Text style={{ fontSize: 18, color: "white" }}> Create Account </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signup_row}>
                        <Text style={{ fontSize: 18 }}>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}> Login </Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}