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
import styles from './StyleSheet'

export default class Business extends Component {
    constructor(props) {
        super(props);

        this.handleAddress_1 = this.handleAddress_1.bind(this);
        this.handleAddress_2 = this.handleAddress_2.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePincode = this.handlePincode.bind(this);
        this.handleURL = this.handleURL.bind(this);

        this.state = {
            isd_code: '',
            mobile: '',
            email: '',
            password: '',
            isNameActive: false,
            isTypeActive: false,
            typeValid: false,
            address_1: '',
            address_1Valid: false,
            isAddress_1Active: false,
            address_2: '',
            address_2Valid: true,
            isAddress_2Active: false,
            country: '',
            countryValid: false,
            iscountryActive: false,
            state: '',
            stateValid: false,
            isStateActive: false,
            city: '',
            cityValid: false,
            isCityActive: false,
            pincode: '',
            pincodeValid: false,
            isPincodeActive: false,
            nameValid: false,
            urlValid: true,
            url: '',
            isUrlActive: false,
            isMobileActive: false,
            isEmailActive: false,
            emailValid: true,
            mobileValid: true,
            submitDisabled: true,
            name: '',
            type: '',
            lastName: '',
            token: ''
        };
    }
    validateForm = () => {
    }

    handleName = (text) => {
        this.setState({
            name: text,
            nameValid: true
        }, () => {
            this.validateForm();
        });
        if (text.length == 0) {
            this.setState({
                nameValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();

            });
        }

    }
    handleAddress_1 = (text) => {
        this.setState({
            address_1: text,
            address_1Valid: true
        }, () => {
            this.validateForm();
        });
    }
    handleAddress_2 = (text) => {
        this.setState({
            address_2: text,
            address_2Valid: true
        }, () => {
            this.validateForm();
        });
    }

    handleMobile = (text) => {
        if (text.length > 10) {
            return;
        }

        this.setState({
            mobile: text,
            mobileValid: false
        }, () => {
            this.validateForm();
        });

        if (this.state.isd_code === '' || text.length == 0) {
            this.setState({
                mobileValid: true
            }, () => {
                this.validateForm();
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


    handleEmail = (text) => {
        this.setState({ email: text }, () => {
            this.validateForm();
        });

        if (text.length == 0) {
            this.setState({
                emailValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
            return;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({
                emailValid: false,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        } else {
            this.setState({
                emailValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        }
    }


    handleURL = (text) => {
        this.setState({ url: text }, () => {
            this.validateForm();
        });

        if (text.length == 0) {
            this.setState({
                urlValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
            return;
        }

        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        if (reg.test(text) === false) {
            this.setState({
                urlValid: false,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        } else {
            this.setState({
                urlValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        }
    }
    handlePincode = (text) => {
        if (text.length > 6) {
            return;
        }
        this.setState({
            pincode: text,
            pincodeValid: false
        }, () => {
            this.validateForm();
        });

        if (text.length == 0) {
            this.setState({
                pincodeValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
            return;
        }

        let reg = /([0-9]{6}|[0-9]{3}\s[0-9]{3})/;
        if (reg.test(text) === false) {
            this.setState({
                pincodeValid: false,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        } else {
            this.setState({
                pincodeValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        }
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/6905241.png')}
                    style={styles.background_image}>
                    <KeyboardAvoidingView behavior="padding" enabled >

                        <Text style={styles.title}>LOCAL STAR</Text>
                        <Text style={styles.secondary_title}>Create a business</Text>

                        <View style={styles.business_container}>
                            <View style={(this.state.isTypeActive) ?
                                ((this.state.TypeValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.TypeValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <Picker
                                    autoFocus={true}
                                    selectedValue={this.state.Type}
                                    style={{
                                        width: "100%",
                                        height: 27,
                                        fontSize: 18,
                                        borderWidth: 0,
                                    }}
                                    mode="dropdown"
                                    autoFocus={true}
                                    placeholder={"Type"}
                                    value={this.state.type}
                                    onFocus={() => this.setState({ isTypeActive: true, })}
                                    onBlur={() => this.setState({ isTypeActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.typeInput = input}
                                    onSubmitEditing={() => this.nameInput.focus()}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            { type: itemValue })}>
                                    <Picker.Item label="Type" value="" />
                                    <Picker.Item label="Bookstore" value="Bookstore" />
                                    <Picker.Item label="Pharmacy" value="Pharmacy" />
                                    <Picker.Item label="Restraunt" value="Restraunt" />
                                </Picker>
                            </View>

                            <View style={(this.state.isNameActive) ?
                                ((this.state.nameValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.nameValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <TextInput
                                    style={{ width: "100%", fontSize: 18, outline: "none" }}
                                    placeholder="Name"
                                    onChangeText={(text) => this.handleName(text)}
                                    value={this.state.name}
                                    onFocus={() => this.setState({ isNameActive: true, })}
                                    onBlur={() => this.setState({ isNameActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.nameInput = input}
                                    onSubmitEditing={() => this.isd_codeInput.focus()} />
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
                                    onSubmitEditing={() => this.emailInput.focus()} />
                            </View>

                            <View style={(this.state.isEmailActive) ?
                                ((this.state.emailValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.emailValid) ? styles.non_active_row : styles.non_active_invalid_row)} >
                                <TextInput

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
                                    onSubmitEditing={() => this.urlInput.focus()} />
                            </View>

                            <View style={(this.state.isUrlActive) ?
                                ((this.state.urlValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.urlValid) ? styles.non_active_row : styles.non_active_invalid_row)} >
                                <TextInput
                                    style={{ width: "100%", fontSize: 18, outline: "none" }}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    autoCorrect={false}
                                    placeholder="Website"
                                    onChangeText={(text) => this.handleURL(text)}
                                    value={this.state.url}
                                    onFocus={() => this.setState({ isUrlActive: true, })}
                                    onBlur={() => this.setState({ isUrlActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.urlInput = input}
                                    onSubmitEditing={() => this.address_1Input.focus()} />
                            </View>

                            <View style={(this.state.isAddress_1Active) ?
                                ((this.state.address_1Valid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.address_1Valid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <TextInput
                                    style={{ width: "100%", fontSize: 18, outline: "none" }}
                                    placeholder="Address 1"
                                    onChangeText={(text) => this.handleAddress_1(text)}
                                    value={this.state.address_1}
                                    onFocus={() => this.setState({ isAddress_1Active: true, })}
                                    onBlur={() => this.setState({ isAddress_1Active: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.address_1Input = input}
                                    onSubmitEditing={() => this.address_2Input.focus()} />
                            </View>

                            <View style={(this.state.isAddress_2Active) ?
                                ((this.state.address_2Valid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.address_2Valid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <TextInput
                                    style={{ width: "100%", fontSize: 18, outline: "none" }}
                                    placeholder="Address 2"
                                    onChangeText={(text) => this.handleAddress_2(text)}
                                    value={this.state.address_2}
                                    onFocus={() => this.setState({ isAddress_2Active: true, })}
                                    onBlur={() => this.setState({ isAddress_2Active: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.address_2Input = input}
                                    onSubmitEditing={() => this.countryInput.focus()} />
                            </View>

                            <View style={(this.state.isCountryActive) ?
                                ((this.state.countryValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.countryValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <Picker
                                    selectedValue={this.state.country}
                                    style={{
                                        width: "100%",
                                        height: 27,
                                        fontSize: 18,
                                        borderWidth: 0,
                                    }}
                                    mode="dropdown"
                                    placeholder={"Country"}
                                    value={this.state.country}
                                    onFocus={() => this.setState({ isCountryActive: true, })}
                                    onBlur={() => this.setState({ isCountryActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.countryInput = input}
                                    onSubmitEditing={() => this.stateInput.focus()}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            { country: itemValue, countryValid: true })} >
                                    <Picker.Item label="Country" value="" />
                                    <Picker.Item label="India" value="IND" />
                                </Picker>
                            </View>

                            <View style={(this.state.isStateActive) ?
                                ((this.state.stateValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.stateValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <Picker
                                    selectedValue={this.state.state}
                                    style={{
                                        width: "100%",
                                        height: 27,
                                        fontSize: 18,
                                        borderWidth: 0,
                                    }}
                                    mode="dropdown"
                                    placeholder={"State"}
                                    value={this.state.state}
                                    onFocus={() => this.setState({ isStateActive: true, })}
                                    onBlur={() => this.setState({ isStateActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.stateInput = input}
                                    onSubmitEditing={() => this.cityInput.focus()}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            { state: itemValue, stateValid: true })}>
                                    <Picker.Item label="State" value="" />
                                    <Picker.Item label="Karnatka" value="KA" />
                                </Picker>
                            </View>

                            <View style={(this.state.isCityActive) ?
                                ((this.state.cityValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.cityValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <Picker
                                    selectedValue={this.state.city}
                                    style={{
                                        width: "100%",
                                        height: 27,
                                        fontSize: 18,
                                        borderWidth: 0,
                                    }}
                                    mode="dropdown"
                                    placeholder={"City"}
                                    value={this.state.city}
                                    onFocus={() => this.setState({ isCityActive: true, })}
                                    onBlur={() => this.setState({ isCityActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.cityInput = input}
                                    onSubmitEditing={() => this.pincodeInput.focus()}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            { city: itemValue, cityValid: true })}>
                                    <Picker.Item label="City" value="" />
                                    <Picker.Item label="Bengaluru" value="BLR" />
                                </Picker>
                            </View>

                            <View style={(this.state.isPincodeActive) ?
                                ((this.state.pincodeValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.pincodeValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <TextInput
                                    style={{ width: "65%", fontSize: 18, outline: "none" }}
                                    maxLength={6}
                                    keyboardType={"numeric"}
                                    placeholder="Pincode"
                                    onChangeText={(text) => this.handlePincode(text)}
                                    value={this.state.pincode}
                                    onFocus={() => this.setState({ isPincodeActive: true, })}
                                    onBlur={() => this.setState({ isPincodeActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.pincodeInput = input}
                                    onSubmitEditing={() => this.submitInput.focus()} />
                            </View>

                            <View style={{ paddingTop: "5%" }}>
                                <TouchableOpacity
                                    onPress={!this.state.submitDisabled && this.onSubmitButtonPressed}
                                    style={(this.state.submitDisabled) ? styles.disabled_button : styles.enabled_button}>
                                    <Text style={{ fontSize: 18, color: "white" }}> Create Business </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "100%" }}>
                                <TouchableOpacity >
                                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'right', paddingTop: "3%" }}> Reset </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}