import React, { Component } from 'react';
import {
    ImageBackground,
    Image,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './StyleSheet';

export default class Services extends Component {
    constructor(props) {
        super(props);

        this.initializeStatus = this.initializeStatus.bind(this);

        this.state = {
            socialMediaId: '',
            status: [
                {
                    id: 1,
                    itemStatus: [
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                    ]
                },
                {
                    id: 2,
                    itemStatus: [
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                    ]
                },
                {
                    id: 3,
                    itemStatus: [
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                    ]
                },
                {
                    id: 4,
                    itemStatus: [
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                    ]
                },
                {
                    id: 5,
                    itemStatus: [
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                    ]
                },
                {
                    id: 6,
                    itemStatus: [
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                        {
                            isSelected: false,
                            quantity: 0,
                            isActive: false
                        },
                    ]
                }
            ],
            socialMedia: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon_url: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png',
                    services: [
                        {
                            id: 1,
                            name: 'Post an image',
                            default: false
                        },
                        {
                            id: 2,
                            name: 'Post a video',
                            default: false
                        },
                        {
                            id: 3,
                            name: 'Tag',
                            default: true
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Twitter',
                    icon_url: 'https://abs.twimg.com/favicons/twitter.ico',
                    services: [
                        {
                            id: 1,
                            name: 'Tweet',
                            default: false
                        },
                        {
                            id: 2,
                            name: 'Retweet',
                            default: false
                        },
                        {
                            id: 3,
                            name: 'Like',
                            default: true
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'YouTube',
                    icon_url: 'https://s.ytimg.com/yts/img/favicon_96-vflW9Ec0w.png',
                    services: [
                        {
                            id: 1,
                            name: 'Post an image',
                            default: false
                        },
                        {
                            id: 2,
                            name: 'Post a video',
                            default: false
                        },
                        {
                            id: 3,
                            name: 'Tag',
                            default: true
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Snapchat',
                    icon_url: 'https://www.snapchat.com/favicon.png',
                    services: [
                        {
                            id: 1,
                            name: 'Post an image',
                            default: false
                        },
                        {
                            id: 2,
                            name: 'Post a video',
                            default: false
                        },
                        {
                            id: 3,
                            name: 'Tag',
                            default: true
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Tiktok',
                    icon_url: 'https://s16.tiktokcdn.com/musical/resource/mtact/static/pwa/icon_128x128.png',
                    services: [
                        {
                            id: 1,
                            name: 'Post an image',
                            default: false
                        },
                        {
                            id: 2,
                            name: 'Post a video',
                            default: false
                        },
                        {
                            id: 3,
                            name: 'Tag',
                            default: true
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'Facebook',
                    icon_url: 'https://www.facebook.com/images/fb_icon_325x325.png',
                    services: [
                        {
                            id: 1,
                            name: 'Post an image',
                            default: false
                        },
                        {
                            id: 2,
                            name: 'Post a video',
                            default: false
                        },
                        {
                            id: 3,
                            name: 'Tag',
                            default: true
                        }
                    ]
                }
            ]
        };

        // this.initializeStatus();
    }

    initializeStatus = () => {
        let itemStatusElement = {
            isSelected: false,
            quantity: 0,
            isActive: false
        };

        let statusCopy = [];
        this.state.socialMedia.map((media, index) => {
            let statusElement = {
                id: media.id,
                itemStatus: []
            };
            this.state.socialMedia[index].services.map((service, i) => {
                statusElement.itemStatus.push(itemStatusElement);
            });
            statusCopy.push(statusElement);
        });

        this.setState({ status: statusCopy });
    };

    setItemSelected = (index, i, status) => {
        let itemStatusCopy = JSON.parse(JSON.stringify(this.state.status[index].itemStatus));
        if (status) {
            itemStatusCopy[i].isSelected = true;
            itemStatusCopy[i].quantity = 1;
        } else {
            itemStatusCopy[i].isSelected = false;
            itemStatusCopy[i].quantity = 0;
        }

        let statusCopy = JSON.parse(JSON.stringify(this.state.status));
        statusCopy[index].itemStatus = itemStatusCopy;
        this.setState({ status: statusCopy });
    }

    setItemActive = (index, i, status) => {
        let itemStatusCopy = JSON.parse(JSON.stringify(this.state.status[index].itemStatus));
        itemStatusCopy[i].isActive = status;

        let statusCopy = JSON.parse(JSON.stringify(this.state.status));
        statusCopy[index].itemStatus = itemStatusCopy;
        this.setState({ status: statusCopy });
    }

    renderSocialMedias() {
        let socialMedia = (this.state.socialMedia || []).map((item, index) => {
            return (
                <View key={item.id}
                    style={{ width: "40%", alignItems: "center", marginBottom: "1%", padding: "1%", backgroundColor: 'white', borderRadius: 40 }}>
                    <View style={this.state.socialMediaId == item.id ?
                        { flexDirection: 'row', justifyContent: "space-between", height: "10%", width: "100%", paddingBottom: "3%", borderBottomWidth: 2, borderBottomColor: "#ff9966" } :
                        { flexDirection: 'row', justifyContent: "space-between", height: "10%", width: "100%" }}>
                        <View style={{ width: '15%', paddingLeft: '2%' }}>
                            <Image source={{ uri: item.icon_url }}
                                style={{ width: 48, height: 48 }} />
                        </View>
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 30 }}> {item.name} </Text>
                        </View>
                        {this.state.socialMediaId == item.id ? 
                        <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }} onPress={() => { this.setState({ socialMediaId: 0 }) }}>
                            <Image source={require('../assets/arrow1.png')}
                                style={{ width: 48, height: 48 }}
                            />
                        </TouchableOpacity> : 
                        <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }} onPress={() => { this.setState({ socialMediaId: item.id }) }}>
                                <Image source={require('../assets/arrow.png')}
                                    style={{ width: 48, height: 48 }}
                                />
                            </TouchableOpacity>}
                    </View>
                    {this.state.socialMediaId == item.id ?
                        <View style={{ flexDirection: "column", alignContent: "center", width: "100%", marginBottom: "1%", padding: "1%", }}>
                            {this.renderSocialMediaServices(index)}
                        </View>
                        :
                        <View></View>
                    }
                </View>
            );

        });

        return socialMedia;
    }

    renderSocialMediaServices(i) {
        let socialMediaServices = (this.state.socialMedia[i].services || []).map((item, index) => {
            return (
                <View key={item.id}
                    style={{ flexDirection: 'row', justifyContent: "flex-start", marginTop: "4%", height: "10%", alignSelf: "center", width: "100%" }}>

                    <View style={{ width: "7%" }} >
                        {item.default == true ?
                            <TouchableOpacity onPress={() => this.setItemSelected(i, index, false)} style={{ width: '15%' }}>
                                <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                            </TouchableOpacity>
                            :
                            <View>
                                {this.state.status[i].itemStatus[index].isSelected == false ?
                                    <TouchableOpacity onPress={() => this.setItemSelected(i, index, true)} style={{ width: '15%' }}>
                                        <Image style={{ width: 28, height: 28 }} source={require('../assets/untickedcheckbox.png')} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.setItemSelected(i, index, false)} style={{ width: '15%' }}>
                                        <Image style={{ width: 28, height: 28 }} source={require("../assets/checkbox.png")} />
                                    </TouchableOpacity>
                                }
                            </View>}
                    </View>

                    <View style={{ width: "70%" }}>
                        <Text style={{ fontSize: 18 }}> {item.name} </Text>
                    </View>

                    {!item.default == true ?
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignSelf: "center", width: "25%" }}>
                            <View style={{ width: '28%' }}>
                                <TouchableOpacity onPress={() => this.onItemMinusButtonPressed(i, index)}>
                                    <Image source={require('../assets/minus.png')}
                                        style={{ width: 28, height: 28 }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={this.state.status[i].itemStatus[index].isActive ?
                                { width: "45%", borderBottomColor: "#ff9966", borderBottomWidth: 2 } :
                                { width: "45%", borderBottomColor: "#ff9966", borderBottomWidth: 1 }}>
                                <TextInput
                                    style={{ outline: "none", fontSize: 18, textAlign: "center" }}
                                    maxLength={2}
                                    keyboardType={"numeric"}
                                    placeholder={this.state.status[i].itemStatus[index].quantity}
                                    onChangeText={(text) => this.handleItemQuantity(i, index, text)}
                                    value={this.state.status[i].itemStatus[index].quantity}
                                    onFocus={() => this.setItemActive(i, index, true)}
                                    onBlur={() => this.setItemActive(i, index, false)}
                                    returnKeyType="next"
                                //ref={(input) => this.instagramPostImageQuantityInput = input}
                                //onSubmitEditing={() => this.recurEveryMonth1Input.focus()}
                                />
                            </View>

                            <View style={{ width: '28%' }}>
                                <TouchableOpacity onPress={() => this.onItemPlusButtonPressed(i, index)}>
                                    <Image source={require('../assets/add1.png')}
                                        style={{ width: 28, height: 28 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignSelf: "center", width: "25%" }}></View>
                    }
                </View>
            );

        });

        return socialMediaServices;
    }

    onItemMinusButtonPressed = (index, i) => {
        let itemStatusCopy = JSON.parse(JSON.stringify(this.state.status[index].itemStatus));
        if (itemStatusCopy[i].quantity == 0) {
            return;
        }

        itemStatusCopy[i].quantity = itemStatusCopy[i].quantity - 1;
        if (itemStatusCopy[i].quantity == 0) {
            itemStatusCopy[i].isSelected = false;
        }

        let statusCopy = JSON.parse(JSON.stringify(this.state.status));
        statusCopy[index].itemStatus = itemStatusCopy;
        this.setState({ status: statusCopy });
    }

    onItemPlusButtonPressed = (index, i) => {
        let itemStatusCopy = JSON.parse(JSON.stringify(this.state.status[index].itemStatus));
        if (itemStatusCopy[i].quantity == 99) {
            return;
        }

        itemStatusCopy[i].quantity = itemStatusCopy[i].quantity + 1;
        itemStatusCopy[i].isSelected = true;

        let statusCopy = JSON.parse(JSON.stringify(this.state.status));
        statusCopy[index].itemStatus = itemStatusCopy;
        this.setState({ status: statusCopy });
    }

    handleItemQuantity = (index, i, text) => {
        if (text.length > 2) {
            return;
        }

        let itemStatusCopy = JSON.parse(JSON.stringify(this.state.status[index].itemStatus));
        itemStatusCopy[i].quantity = text;

        if (itemStatusCopy[i].quantity == 0) {
            itemStatusCopy[i].isSelected = false;
        } else {
            itemStatusCopy[i].isSelected = true;
        }

        let statusCopy = JSON.parse(JSON.stringify(this.state.status));
        statusCopy[index].itemStatus = itemStatusCopy;
        this.setState({ status: statusCopy });
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/6905241.png')}
                    style={styles.background_image}>
                    <KeyboardAvoidingView behavior="padding" enabled >

                        <Text style={styles.title}>LOCAL STAR</Text>
                        <Text style={styles.secondary_title}>Choose campaign services</Text>

                        <View style={styles.social_media_container}>
                            {this.renderSocialMedias()}

                            <View style={{ paddingTop: "1%" }}>
                                <TouchableOpacity
                                    onPress={!this.state.submitDisabled && this.onSubmitButtonPressed}
                                    style={(this.state.submitDisabled) ? styles.disabled_button : styles.enabled_button}>
                                    <Text style={{ fontSize: 18, color: "white" }}> Publish campaign </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "25%" }}>
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
