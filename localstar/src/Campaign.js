import React, { Component } from 'react';
import {
    ImageBackground,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
    ToastAndroid,
    Image
} from 'react-native';
import styles from './StyleSheet';
import CampaignUtils from './CampaignUtils';


export default class Campaign extends Component {
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
            isNameActive: false,
            isDescriptionActive: false,
            isBusinessActive: false,
            isBusinessValid: false,
            isClassActive: false,
            isClassValid: false,
            isCategoryActive: false,
            isCategoryValid: false,
            isRecurrenceActive: false,
            isRecurrenceValid: false,
            isRecurEveryValid: false,
            isRecurEveryActive: false,
            isMondaySelected: false,
            isTuesdaySelected: false,
            isWednesdaySelected: false,
            isThursdaySelected: false,
            isFridaySelected: false,
            isSaturdaySelected: false,
            isSundaySelected: false,
            recurEvery: '',
            recurrenceId: '',
            categoryId: 0,
            recursInput: false,
            nameValid: false,
            descriptionValid: false,
            descriptionInput: false,
            name: '',
            businessId: '',
            classId: '',
            lastName: '',
            startDate: '',
            endDate: '',
            isStateDateActive: false,
            startDateValid: false,
            monthSelectionId: 0,
            isMonthDayValid: false,
            monthDay: '',
            isRecurEveryActive: false,
            recurEveryMonth1: '',
            isRecurEveryMonth1Active: false,
            isRecurEveryMonth1Valid: false,
            recurEveryMonth2: '',
            isRecurEveryMonth2Active: false,
            isRecurEveryMonth2Valid: false,
            frequencyId: '',
            frequencyDaysId: '',
            isFrequencyIdActive: false,
            isFrequencyDaysIdActive: false,
            isMonthDayActive: false,
            submitDisabled: false
        };
    }
    validateForm = () => {
    }

    addItemEvery = (str, item, every) => {

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

    handleDescription = (text) => {
        this.setState({
            description: text,
            descriptionValid: true
        }, () => {
            this.validateForm();
        });
        if (text.length == 0) {
            this.setState({
                descriptionValid: true,
                submitDisabled: true
            }, () => {
                this.validateForm();
            });
        }
    };

    handleStartDate = (text) => {
        if (text.length > 10) {
            return;
        }

        let value = text.replace(/\/+/g, "");
        const firstFourChars = CampaignUtils.addItemEvery(value.substring(0, 5), "/", 2);
        value = firstFourChars + value.substring(5, value.length);
        this.setState({
            startDate: value,
            startDateValid: true
        });
    };

    handleEndDate = (text) => {
        if (text.length > 10) {
            return;
        }

        let value = text.replace(/\/+/g, "");
        const firstFourChars = CampaignUtils.addItemEvery(value.substring(0, 5), "/", 2);
        value = firstFourChars + value.substring(5, value.length);
        this.setState({
            endDate: value,
            endDateValid: true
        });
    };

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

    handleRecurEvery = (text) => {
        if (text.length > 2) {
            return;
        }

        this.setState({
            recurEvery: text,
            isRecurEveryValid: true
        }, () => {
            this.validateForm();
        });
    }
    handleMonthDay = (text) => {
        if (text.length > 2) {
            return;
        }

        this.setState({
            monthDay: text,
            isMonthDayValid: true
        }, () => {
            this.validateForm();
        });
    }
    handleRecurEveryMonth1 = (text) => {
        if (text.length > 2) {
            return;
        }

        this.setState({
            recurEveryMonth1: text,
            isRecurEveryMonth1Valid: true
        }, () => {
            this.validateForm();
        });
    }
    handleRecurEveryMonth2 = (text) => {
        if (text.length > 2) {
            return;
        }

        this.setState({
            recurEveryMonth2: text,
            isRecurEveryMonth2Valid: true
        }, () => {
            this.validateForm();
        });
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
                        <Text style={styles.secondary_title}>Create a campaign</Text>

                        <View style={styles.campaign_container}>
                            <View style={(this.state.isBusinessActive) ?
                                ((this.state.isBusinessValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.isBusinessValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <Picker
                                    autoFocus={true}
                                    selectedValue={this.state.businessId}
                                    style={{
                                        width: "100%",
                                        height: 27,
                                        fontSize: 18,
                                        borderWidth: 0,
                                    }}
                                    mode="dropdown"
                                    placeholder={"Business"}
                                    value={this.state.businessId}
                                    onFocus={() => this.setState({ isBusinessActive: true, })}
                                    onBlur={() => this.setState({ isBusinessActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.businessInput = input}
                                    onSubmitEditing={() => this.classInput.focus()}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            { businessId: itemValue })}>

                                    <Picker.Item color="grey" label="Which business do you want to run this campaign for?" value="" />
                                    <Picker.Item label="McDonalds" value="1" />
                                    <Picker.Item label="Subway" value="6782" />
                                    <Picker.Item label="PizzaHut" value="69420" />
                                </Picker>
                            </View>

                            <View style={(this.state.isClassActive) ?
                                ((this.state.isClassValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.isClassValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <Picker
                                    selectedValue={this.state.classId}
                                    style={{
                                        width: "100%",
                                        height: 27,
                                        fontSize: 18,
                                        borderWidth: 0,
                                    }}
                                    mode="dropdown"
                                    placeholder={"Class"}
                                    value={this.state.classId}
                                    onFocus={() => this.setState({ isClassActive: true, })}
                                    onBlur={() => this.setState({ isClassActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.classInput = input}
                                    onSubmitEditing={() => categoryInput.focus()}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            { classId: itemValue })}>
                                    <Picker.Item label="What class of campaign you want to run?" value="" />
                                    <Picker.Item label="Private" value="1" />
                                    <Picker.Item label="Public" value="2" />
                                    <Picker.Item label="Bronze" value="3" />
                                    <Picker.Item label="Silver" value="4" />
                                    <Picker.Item label="Gold" value="5" />
                                    <Picker.Item label="Platinum" value="6" />
                                </Picker>
                            </View>

                            <View style={(this.state.isCategoryActive) ?
                                ((this.state.isCategoryValid) ? styles.category_active_row : styles.category_active_invalid_row) :
                                ((this.state.isCategoryValid) ? styles.category_non_active_row : styles.category_non_active_invalid_row)}>
                                <View>
                                    <Text style={{
                                        paddingTop: '2%', paddingLeft: '2%', fontSize: 18, width: '100%',
                                    }}>What are you campaigning for?</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: "2%" }}>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignContent: "center", borderWidth: 0, borderColor: "black", width: "33%", }}>
                                        <View>
                                            {this.state.categoryId == 1 ?
                                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => { this.setState({ categoryId: 1 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={{ marginLeft: "2%" }}>
                                            <Text style={{
                                                paddingTop: '2%', paddingLeft: '0%', fontSize: 18, width: '100%',
                                            }}>Business</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignContent: "center", borderWidth: 0, borderColor: "black", width: "33%", }}>
                                        <View>
                                            {this.state.categoryId == 2 ?
                                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => { this.setState({ categoryId: 2 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={{ marginLeft: "2%" }}>
                                            <Text style={{
                                                paddingTop: '2%', paddingLeft: '0%', fontSize: 18, width: '100%',
                                            }}>Product</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignContent: "center", borderWidth: 0, borderColor: "black", width: "33%", }}>
                                        <View>
                                            {this.state.categoryId == 3 ?
                                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => { this.setState({ categoryId: 3 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={{ marginLeft: "2%" }}>
                                            <Text style={{
                                                paddingTop: '2%', paddingLeft: '0%', fontSize: 18, width: '100%',
                                            }}>Service</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={(this.state.isNameActive) ?
                                ((this.state.nameValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.nameValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <TextInput
                                    style={{ width: "100%", fontSize: 18, outline: "none" }}
                                    placeholder="What is the name of this campaign?"
                                    onChangeText={(text) => this.handleName(text)}
                                    value={this.state.name}
                                    onFocus={() => this.setState({ isNameActive: true, })}
                                    onBlur={() => this.setState({ isNameActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.nameInput = input}
                                    onSubmitEditing={() => this.isd_codeInput.focus()} />
                            </View>

                            <View style={(this.state.isDescriptionActive) ?
                                ((this.state.descriptionValid) ? styles.active_row : styles.active_invalid_row) :
                                ((this.state.descriptionValid) ? styles.non_active_row : styles.non_active_invalid_row)}>
                                <TextInput
                                    style={{ width: "100%", fontSize: 18, outline: "none", height: 100 }}
                                    placeholder="Tell us more about this campaign..."
                                    multiline={true}
                                    onChangeText={(text) => this.handleDescription(text)}
                                    value={this.state.description}
                                    onFocus={() => this.setState({ isDescriptionActive: true, })}
                                    onBlur={() => this.setState({ isDescriptionActive: false, })}
                                    returnKeyType="next"
                                    ref={(input) => this.descriptionInput = input}
                                    onSubmitEditing={() => this.isd_codeInput.focus()} />
                            </View>

                            <View style={styles.seperated_row}>

                                <View style={(this.state.isStartDateActive) ?
                                    ((this.state.startDateValid) ? styles.active_row_2 : styles.active_invalid_row_2) :
                                    ((this.state.startDateValid) ? styles.non_active_row_2 : styles.non_active_invalid_row_2)}>
                                    <TextInput
                                        style={{ width: "100%", fontSize: 18, outline: "none" }}
                                        placeholder="Start Date (DD/MM/YYYY)"
                                        onChangeText={(text) => this.handleStartDate(text)}
                                        value={this.state.startDate}
                                        onFocus={() => this.setState({ isStartDateActive: true, })}
                                        onBlur={() => this.setState({ isStartDateActive: false, })}
                                        returnKeyType="next"
                                        ref={(input) => this.startDateInput = input}
                                        onSubmitEditing={() => this.endDateInput.focus()} />
                                </View>

                                <View style={(this.state.isEndDateActive) ?
                                    ((this.state.endDateValid) ? styles.active_row_2 : styles.active_invalid_row_2) :
                                    ((this.state.endDateValid) ? styles.non_active_row_2 : styles.non_active_invalid_row_2)}>
                                    <TextInput
                                        style={{ width: "100%", fontSize: 18, outline: "none" }}
                                        placeholder="End Date (DD/MM/YYYY)"
                                        onChangeText={(text) => this.handleEndDate(text)}
                                        value={this.state.endDate}
                                        onFocus={() => this.setState({ isEndDateActive: true, })}
                                        onBlur={() => this.setState({ isEndDateActive: false, })}
                                        returnKeyType="next"
                                        ref={(input) => this.endDateInput = input}
                                        onSubmitEditing={() => this.endDateInput.focus()} />
                                </View>

                            </View>


                            <View style={(this.state.isRecurrenceActive) ?
                                ((this.state.isRecurrenceValid) ? styles.category_active_row : styles.category_active_invalid_row) :
                                ((this.state.isRecurrenceValid) ? styles.category_non_active_row : styles.category_non_active_invalid_row)}>
                                <View>
                                    <Text style={{
                                        paddingTop: '2%', paddingLeft: '2%', fontSize: 18, width: '100%',
                                    }}>What is your campaign recurrence pattern?</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: "2%" }}>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignContent: "center", borderWidth: 0, borderColor: "black", width: "33%", }}>
                                        <View>
                                            {this.state.recurrenceId == 1 ?
                                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => { this.setState({ recurrenceId: 1 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={{ marginLeft: "2%" }}>
                                            <Text style={{
                                                paddingTop: '2%', paddingLeft: '0%', fontSize: 18, width: '100%',
                                            }}>Daily</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignContent: "center", borderWidth: 0, borderColor: "black", width: "33%", }}>
                                        <View>
                                            {this.state.recurrenceId == 2 ?
                                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => { this.setState({ recurrenceId: 2 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={{ marginLeft: "2%" }}>
                                            <Text style={{
                                                paddingTop: '2%', paddingLeft: '0%', fontSize: 18, width: '100%',
                                            }}>Weekly</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignContent: "center", borderWidth: 0, borderColor: "black", width: "33%", }}>
                                        <View>
                                            {this.state.recurrenceId == 3 ?
                                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => { this.setState({ recurrenceId: 3 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                    <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={{ marginLeft: "2%" }}>
                                            <Text style={{
                                                paddingTop: '2%', paddingLeft: '0%', fontSize: 18, width: '100%',
                                            }}>Monthly</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View>
                                {this.state.recurrenceId == 2 ?
                                    <View style={{ flexDirection: "column", justifyContent: "space-evenly", borderBottomColor: "#ff9966", borderBottomWidth: 2 }}>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", margin: "2%" }}>
                                            <View style={{ width: "15%" }}>
                                                <Text style={{
                                                    paddingTop: '2%', paddingLeft: '0%', fontSize: 18
                                                }}>Recur every </Text>
                                            </View>
                                            <View style={this.state.isRecurEveryActive ? { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } : { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                                <TextInput
                                                    style={{ paddingTop: '2%', fontSize: 18, textAlign: "center", outline: "none" }}
                                                    maxLength={2}
                                                    keyboardType={"numeric"}
                                                    placeholder="1"
                                                    onChangeText={(text) => this.handleRecurEvery(text)}
                                                    value={this.state.recurEvery}
                                                    onFocus={() => this.setState({ isRecurEveryActive: true, })}
                                                    onBlur={() => this.setState({ isRecurEveryActive: false, })}
                                                    returnKeyType="next"
                                                    ref={(input) => this.recurEveryInput = input}
                                                    onSubmitEditing={() => this.emailInput.focus()}
                                                />
                                            </View>
                                            <View style={{ width: "20%" }}>
                                                <Text style={{
                                                    paddingTop: '2%', paddingLeft: '0%', fontSize: 18
                                                }}> week(s) on: </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", margin: "2%" }}>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isMondaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isMondaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isMondaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Mon</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isTuesdaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isTuesdaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isTuesdaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Tue</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isWednesdaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isWednesdaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isWednesdaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Wed</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isThursdaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isThursdaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isThursdaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Thu</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isFridaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isFridaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isFridaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Fri</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isSaturdaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isSaturdaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isSaturdaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Sat</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "14%", alignItems: "center" }}>
                                                <View >
                                                    {this.state.isSundaySelected == false ?
                                                        <TouchableOpacity onPress={() => { this.setState({ isSundaySelected: true }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => { this.setState({ isSundaySelected: false }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}>Sun</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <View>
                                    </View>
                                }
                            </View>
                            <View>
                                {this.state.recurrenceId == 3 ?
                                    <View style={{ flexDirection: 'column', borderBottomColor: "#ff9966", borderBottomWidth: 2, padding: "2%" }}>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 10 }}>
                                            <View>
                                                {this.state.monthSelectionId == 1 ?
                                                    <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                        <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                    </TouchableOpacity>
                                                    :
                                                    <TouchableOpacity onPress={() => { this.setState({ monthSelectionId: 1 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                        <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                    </TouchableOpacity>
                                                }
                                            </View>
                                            <View>
                                                <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}> Day </Text>
                                            </View>
                                            <View style={this.state.isMonthDayActive ? { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } : { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                                <TextInput
                                                    style={{ paddingTop: '2%', outline: "none", fontSize: 18, textAlign: "center" }}
                                                    maxLength={2}
                                                    keyboardType={"numeric"}
                                                    placeholder="1"
                                                    onChangeText={(text) => this.handleMonthDay(text)}
                                                    value={this.state.monthDay}
                                                    onFocus={() => this.setState({ isMonthDayActive: true, })}
                                                    onBlur={() => this.setState({ isMonthDayActive: false, })}
                                                    returnKeyType="next"
                                                    ref={(input) => this.monthDayInput = input}
                                                    onSubmitEditing={() => this.recurEveryMonth1Input.focus()}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}> of every </Text>
                                            </View>
                                            <View style={this.state.isRecurEveryMonth1Active ? { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } : { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                                <TextInput
                                                    style={{ paddingTop: '2%', outline: "none", fontSize: 18, textAlign: "center" }}
                                                    maxLength={2}
                                                    keyboardType={"numeric"}
                                                    placeholder="1"
                                                    onChangeText={(text) => this.handleRecurEveryMonth1(text)}
                                                    value={this.state.recurEveryMonth1}
                                                    onFocus={() => this.setState({ isRecurEveryMonth1Active: true, })}
                                                    onBlur={() => this.setState({ isRecurEveryMonth1Active: false, })}
                                                    returnKeyType="next"
                                                    ref={(input) => this.recurEveryMonth1Input = input}
                                                    onSubmitEditing={() => this.recurEveryMonthInput.focus()}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}> month(s)  </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 10 }}>
                                            <View>
                                                {this.state.monthSelectionId == 2 ?
                                                    <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                                        <Image style={{ width: 28, height: 28 }} source={require('../assets/radiofull.png')} />
                                                    </TouchableOpacity>
                                                    :
                                                    <TouchableOpacity onPress={() => { this.setState({ monthSelectionId: 2 }) }} style={{ width: '15%', paddingLeft: '2%' }}>
                                                        <Image style={{ width: 28, height: 28 }} source={require("../assets/radioempty.png")} />
                                                    </TouchableOpacity>
                                                }
                                            </View>
                                            <View>
                                                <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}> The </Text>
                                            </View>
                                            <View style={this.state.isFrequencyIdActive ? { width: "15%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } : { width: "15%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                                <Picker
                                                    selectedValue={this.state.frequencyId}
                                                    style={{
                                                        width: "100%",
                                                        height: 27,
                                                        fontSize: 18,
                                                        borderWidth: 0,
                                                    }}
                                                    mode="dropdown"
                                                    placeholder={"First"}
                                                    value={this.state.frequencyId}
                                                    onFocus={() => this.setState({ isFrequencyIdActive: true, })}
                                                    onBlur={() => this.setState({ isFrequencyIdActive: false, })}
                                                    returnKeyType="next"
                                                    ref={(input) => this.frequencyIdInput = input}
                                                    onSubmitEditing={() => frequencyDaysInput.focus()}
                                                    onValueChange={(itemValue, itemIndex) =>
                                                        this.setState(
                                                            { frequencyId: itemValue })}>
                                                    <Picker.Item label="First" value="1" />
                                                    <Picker.Item label="Second" value="2" />
                                                    <Picker.Item label="Third" value="3" />
                                                    <Picker.Item label="Fourth" value="4" />
                                                    <Picker.Item label="Last" value="5" />
                                                </Picker>
                                            </View>
                                            <View style={this.state.isFrequencyDaysIdActive ? { width: "20%", marginLeft: "2%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } : { width: "20%", marginLeft: "2%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                                <Picker
                                                    selectedValue={this.state.frequencyDaysId}
                                                    style={{
                                                        width: "100%",
                                                        height: 27,
                                                        fontSize: 18,
                                                        borderWidth: 0,

                                                    }}
                                                    mode="dropdown"
                                                    placeholder={"First"}
                                                    value={this.state.frequencyDaysId}
                                                    onFocus={() => this.setState({ isFrequencyDaysIdActive: true, })}
                                                    onBlur={() => this.setState({ isFrequencyDaysIdActive: false, })}
                                                    returnKeyType="next"
                                                    ref={(input) => this.frequencyDaysIdInput = input}
                                                    onSubmitEditing={() => categoryInput.focus()}
                                                    onValueChange={(itemValue, itemIndex) =>
                                                        this.setState(
                                                            { frequencyDaysId: itemValue })}>
                                                    <Picker.Item label="Day" value="1" />
                                                    <Picker.Item label="Weekday" value="2" />
                                                    <Picker.Item label="Weekend Day" value="3" />
                                                    <Picker.Item label="Monday" value="4" />
                                                    <Picker.Item label="Tuesday" value="5" />
                                                    <Picker.Item label="Wednesday" value="6" />
                                                    <Picker.Item label="Thursday" value="7" />
                                                    <Picker.Item label="Friday" value="8" />
                                                    <Picker.Item label="Saturday" value="9" />
                                                    <Picker.Item label="Sunday" value="10" />

                                                </Picker>
                                            </View>
                                            <View>
                                                <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}> of every </Text>
                                            </View>
                                            <View style={this.state.isRecurEveryMonth2Active ? { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } : { width: "5%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                                <TextInput
                                                    style={{ paddingTop: '2%', fontSize: 18, outline: "none", textAlign: "center" }}
                                                    maxLength={2}
                                                    keyboardType={"numeric"}
                                                    placeholder="1"
                                                    onChangeText={(text) => this.handleRecurEveryMonth2(text)}
                                                    value={this.state.recurEveryMonth2}
                                                    onFocus={() => this.setState({ isRecurEveryMonth2Active: true, })}
                                                    onBlur={() => this.setState({ isRecurEveryMonth2Active: false, })}
                                                    returnKeyType="next"
                                                    ref={(input) => this.recurEveryMonth2Input = input}
                                                    onSubmitEditing={() => this.recurEveryMonth2Input.focus()}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{ paddingTop: '2%', paddingLeft: '0%', fontSize: 18 }}> month(s)  </Text>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <View>
                                    </View>

                                }
                            </View>
                            <View style={{ paddingTop: "5%" }}>
                                <TouchableOpacity
                                    onPress={!this.state.submitDisabled && this.onSubmitButtonPressed}
                                    style={(this.state.submitDisabled) ? styles.disabled_button : styles.enabled_button}>
                                    <Text style={{ fontSize: 18, color: "white" }}> Create Campaign </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "100%" }}>
                                <TouchableOpacity >
                                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'right', paddingTop: "3%", }}> Reset </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}