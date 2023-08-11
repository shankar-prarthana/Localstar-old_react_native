import React, { Component } from 'react';
import {
    ImageBackground,
    Image,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
    ToastAndroid
} from 'react-native';
import styles from './StyleSheet';

export default class Infucencers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFliterActive: false,
            isSortActive: false,
            listInfluencersById: 1,
            isListView: true,
            status: [
                {
                    selected: false,
                },
                {
                    selected: false,
                },
                {
                    selected: false,
                },
                {
                    selected: false,
                },
                {
                    selected: false,
                },
            ],
            influencers: [
                {
                    users: {
                        given_name: "Siddhartha",
                        family_name: "Shankar",
                        about: "I live in Bengaluru. I use Instagram with over 3 million followers and a very loyal fan-base.",
                        profile_pic: 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    },
                    social_media: [
                        {
                            name: 'Instagram',
                            icon_url: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png',
                        },
                        {
                            name: 'Twitter',
                            icon_url: 'https://abs.twimg.com/favicons/twitter.ico',
                        }
                    ],
                    rating: {
                        system: "4.0",
                        user: "5.0",
                    }
                },
                {
                    users: {
                        given_name: "Prarthana",
                        family_name: "Shankar",
                        about: "I live in Bengaluru. I use Instagram with over 3 million followers and a very loyal fan-base.",
                        profile_pic: 'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

                    },
                    social_media: [
                        {
                            name: 'Instagram',
                            icon_url: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png'
                        },
                        {
                            name: 'Twitter',
                            icon_url: 'https://abs.twimg.com/favicons/twitter.ico',
                        },
                        {
                            name: 'Snapchat',
                            icon_url: 'https://www.snapchat.com/favicon.png',
                        },
                        {
                            name: 'Tiktok',
                            icon_url: 'https://s16.tiktokcdn.com/musical/resource/mtact/static/pwa/icon_128x128.png',
                        },
                        {
                            name: 'Facebook',
                            icon_url: 'https://www.facebook.com/images/fb_icon_325x325.png',
                        },
                        {
                            name: 'YouTube',
                            icon_url: 'https://s.ytimg.com/yts/img/favicon_96-vflW9Ec0w.png',
                        },
                    ],
                    rating: {
                        system: "4.5",
                        user: "3.5",
                    }
                },
                {
                    users: {
                        given_name: "Aditya",
                        family_name: "J",
                        about: "I live in Hyderabad. I use Instagram with over 3 million followers and a very loyal fan-base.",
                        profile_pic: 'https://images.unsplash.com/photo-1445264718234-a623be589d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    },
                    social_media: [
                        {
                            name: 'Instagram',
                            icon_url: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png'
                        },
                        {
                            name: 'Twitter',
                            icon_url: 'https://abs.twimg.com/favicons/twitter.ico',
                        },
                        {
                            name: 'Facebook',
                            icon_url: 'https://www.facebook.com/images/fb_icon_325x325.png',
                        },
                    ],
                    rating: {
                        system: "3.5",
                        user: "1.0",
                    }
                },
                {
                    users: {
                        given_name: "Parthna",
                        family_name: "Shankar",
                        about: "I live in Bengaluru. I use Instagram with over 3 million followers and a very loyal fan-base.",
                        profile_pic: 'https://images.unsplash.com/photo-1536084577616-ea0e7911a977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    },
                    social_media: [
                        {
                            name: 'Instagram',
                            icon_url: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png'
                        },
                        {
                            name: 'Twitter',
                            icon_url: 'https://abs.twimg.com/favicons/twitter.ico',
                        },
                        {
                            name: 'Facebook',
                            icon_url: 'https://www.facebook.com/images/fb_icon_325x325.png',
                        },
                    ],
                    rating: {
                        system: "2.5",
                        user: "4.5",
                    }
                },
                {
                    users: {
                        given_name: "Shankar",
                        family_name: "Andanappa",
                        about: "I live in Bengaluru. I use Instagram with over 3 million followers and a very loyal fan-base.",
                        profile_pic: 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    },
                    social_media: [
                        {
                            name: 'Instagram',
                            icon_url: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png',
                        },
                        {
                            name: 'Twitter',
                            icon_url: 'https://abs.twimg.com/favicons/twitter.ico',
                        }
                    ],
                    rating: {
                        system: "1.5",
                        user: "2.5",
                    }
                },
            ]
        };
    }

    setItemSaved = (i, status) => {
        let statusCopy = JSON.parse(JSON.stringify(this.state.status));
        statusCopy[i].selected = status;

        this.setState({ status: statusCopy });
    }

    renderSocialMedia(i) {
        let socialMedia = (this.state.influencers[i].social_media || []).map((item, index) => {
            return (
                <View style={{ margin: "4%", }} key={item.id}>
                    <Image source={{ uri: item.icon_url }}
                        style={{ width: 18, height: 18, }} />
                </View>
            );

        });

        return socialMedia;
    }

    renderInfluencersAsList() {
        let influencers = (this.state.influencers || []).map((item, index) => {
            return (
                <View key={item.id}
                    style={{ flexDirection: "row", justifyContent: "flex-start", justifyContent: "flex-start", marginBottom: "1%", padding: "1%", backgroundColor: 'white', borderRadius: 10, borderColor: "#ff9966", borderWidth: 2 }}>
                    <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: "20%" }}>
                        <View style={{ height: "75%" }}>
                            <Image source={{ uri: item.users.profile_pic }}
                                style={{ width: 200, height: 150 }} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%", alignItems: "center", height: "20%" }}>
                            <View style={{ width: "30%" }}>
                                {this.state.status[index].selected ?
                                    <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }} onPress={() => this.setItemSaved(index, false)}>
                                        <Image style={{ width: 28, height: 28 }} source={require('../assets/saved.png')} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }} onPress={() => this.setItemSaved(index, true)}>
                                        <Image style={{ width: 28, height: 28 }} source={require("../assets/unsaved.png")} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "70%" }}>
                                {this.renderSocialMedia(index)}
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", width: "65%", marginLeft: "12%" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", height: "20%" }}>
                            <View style={{ width: "80%" }}>
                                <Text style={{ fontSize: 24, justifyContent: "center", fontWeight: "bold" }}>{item.users.given_name} {item.users.family_name}</Text>
                            </View>
                            <View style={{ width: "10%" }}>
                                <Image source={require('../assets/badge_' + this.state.influencers[index].rating.system + '.png')}
                                    style={{ width: 48, height: 48, resizeMode: "contain" }}
                                />
                            </View>
                        </View>
                        <View style={{ height: "50%", marginTop: "2%" }}>
                            <Text style={{ fontSize: 18, textAlign: "left", fontStyle: "italic" }}>{item.users.about}</Text>
                        </View>
                        <View style={{ height: "10%", alignSelf: "flex-end" }}>
                            <Image source={require('../assets/stars_' + this.state.influencers[index].rating.user + '.png')}
                                style={{ width: 96, height: 48, resizeMode: "contain" }}
                            />
                        </View>
                    </View>
                </View>
            );

        });

        return influencers;
    }

    renderInfluencersAsTile() {
        let elem = [];
        for (let index = 0; index < this.state.influencers.length; index += 2) {
            let item = this.state.influencers[index];
            let nextItem = this.state.influencers[index + 1];
            elem.push(
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", marginTop: "3%" }}>
                    <View key={item.id}
                        style={{ flexDirection: "column", justifyContent: "flex-start", justifyContent: "flex-start", marginBottom: "1%", padding: "1%", backgroundColor: 'white', borderRadius: 10, borderColor: "#ff9966", borderWidth: 2, width: "45%", }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
                            <View style={{ height: "75%", width: "60", alignItems: "center" }}>
                                <Image source={{ uri: item.users.profile_pic }}
                                    style={{ width: 200, height: 150 }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "center", height: "20%" }}>
                                <View style={{ width: "30%" }}>
                                    {this.state.status[index].selected ?
                                        <TouchableOpacity style={{ width: '15%', }} onPress={() => this.setItemSaved(index, false)}>
                                            <Image style={{ width: 28, height: 28 }} source={require('../assets/saved.png')} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={{ width: '15%', }} onPress={() => this.setItemSaved(index, true)}>
                                            <Image style={{ width: 28, height: 28 }} source={require("../assets/unsaved.png")} />
                                        </TouchableOpacity>
                                    }
                                </View>
                                <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "30%", paddingLeft: "13%" }}>
                                    {this.renderSocialMedia(index)}
                                </View>
                            </View>
                            <View style={{ paddingRight: "5%" }}>
                                <Image source={require('../assets/badge_' + this.state.influencers[index].rating.system + '.png')}
                                    style={{ width: 48, height: 48, resizeMode: "contain" }}
                                />
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", width: "65%", marginLeft: "12%" }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", height: "20%", }}>
                                <View style={{ marginRight: "12%" }}>
                                    <Text style={{ fontSize: 24, textAlign: "left", fontWeight: "bold", justifyContent: "center" }}>{item.users.given_name} {item.users.family_name}</Text>
                                </View>

                            </View>



                            <View style={{ height: "10%", alignSelf: "center" }}>
                                <Image source={require('../assets/stars_' + this.state.influencers[index].rating.user + '.png')}
                                    style={{ width: 96, height: 48, resizeMode: "contain" }}
                                />
                            </View>
                        </View>
                    </View>
                    {index + 1 < this.state.influencers.length ?
                        <View key={nextItem.id}
                            style={{ flexDirection: "column", justifyContent: "flex-start", justifyContent: "flex-start", marginBottom: "1%", padding: "1%", backgroundColor: 'white', borderRadius: 10, borderColor: "#ff9966", borderWidth: 2, width: "45%", }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
                                <View style={{ height: "75%", width: "60", alignItems: "center" }}>
                                    <Image source={{ uri: nextItem.users.profile_pic }}
                                        style={{ width: 200, height: 150 }} />
                                </View>
                                <View style={{ flexDirection: "column", justifyContent: "center", height: "20%" }}>
                                    <View style={{ width: "30%" }}>
                                        {this.state.status[index + 1].selected ?
                                            <TouchableOpacity style={{ width: '15%', }} onPress={() => this.setItemSaved(index + 1, false)}>
                                                <Image style={{ width: 28, height: 28 }} source={require('../assets/saved.png')} />
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '15%', }} onPress={() => this.setItemSaved(index + 1, true)}>
                                                <Image style={{ width: 28, height: 28 }} source={require("../assets/unsaved.png")} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "flex-start", width: "30%", paddingLeft: "13%" }}>
                                        {this.renderSocialMedia(index + 1)}
                                    </View>
                                </View>
                                <View style={{ paddingRight: "5%" }}>
                                    <Image source={require('../assets/badge_' + this.state.influencers[index + 1].rating.system + '.png')}
                                        style={{ width: 48, height: 48, resizeMode: "contain" }}
                                    />
                                </View>

                            </View>
                            <View style={{ flexDirection: "column", width: "65%", marginLeft: "12%" }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", height: "20%", }}>
                                    <View style={{ marginRight: "12%" }}>
                                        <Text style={{ fontSize: 24, textAlign: "left", fontWeight: "bold", justifyContent: "center" }}>{nextItem.users.given_name} {nextItem.users.family_name}</Text>
                                    </View>

                                </View>

                                <View style={{ height: "10%", alignSelf: "center" }}>
                                    <Image source={require('../assets/stars_' + this.state.influencers[index].rating.user + '.png')}
                                        style={{ width: 96, height: 48, resizeMode: "contain" }}
                                    />
                                </View>
                            </View>
                        </View>
                        :
                        <View style={{ flexDirection: "column", justifyContent: "flex-start", justifyContent: "flex-start", marginBottom: "1%", padding: "1%", backgroundColor: 'white', borderRadius: 10, width: "45%", }}>
                        </View>
                    }
                </View>
            );

        }
        return elem;
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/6905241.png')}
                    style={{ width: "100%", height: "100%", resizeMode: 'cover', paddingBottom: "30%" }}>
                    <KeyboardAvoidingView behavior="padding" enabled >

                        <Text style={styles.title}>LOCAL STAR</Text>
                        <Text style={styles.secondary_title}>Influencers</Text>

                        <View style={{ marginTop: "1%", alignSelf: "center", borderStyle: "solid", borderWidth: 40, borderColor: "white", borderRadius: 40, backgroundColor: "white", width: "40%", flex: 1 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                <View style={{ width: '7%' }}>
                                    {this.state.isFliterActive ?
                                        <TouchableOpacity onPress={() => { this.setState({ isFliterActive: false }) }}>
                                            <Image source={require('../assets/filer_active.png')}
                                                style={{ width: 48, height: 48 }}
                                            />
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => { this.setState({ isFliterActive: true }) }}>
                                            <Image source={require('../assets/filer_not_active.png')}
                                                style={{ width: 48, height: 48 }}
                                            />
                                        </TouchableOpacity>}
                                </View>
                                <View style={{ width: '7%' }}>
                                    {this.state.isSortActive ?
                                        <TouchableOpacity onPress={() => { this.setState({ isSortActive: false }) }}>
                                            <Image source={require('../assets/sort_active.png')}
                                                style={{ width: 48, height: 48 }}
                                            />
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => { this.setState({ isSortActive: true }) }}>
                                            <Image source={require('../assets/sort_inactive.png')}
                                                style={{ width: 48, height: 48 }}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>

                                <View style={{ width: "75%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <View style={{ width: "22%" }}>
                                        <TouchableOpacity onPress={() => this.setState({ listInfluencersById: 1 })}>
                                            <Text style={(this.state.listInfluencersById == 1) ? styles.selected_tab : styles.unselected_tab}> Suggested </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "22%" }}>
                                        <TouchableOpacity onPress={() => this.setState({ listInfluencersById: 2 })}>
                                            <Text style={(this.state.listInfluencersById == 2) ? styles.selected_tab : styles.unselected_tab}> Saved </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "22%" }}>
                                        <TouchableOpacity onPress={() => this.setState({ listInfluencersById: 3 })}>
                                            <Text style={(this.state.listInfluencersById == 3) ? styles.selected_tab : styles.unselected_tab}> Popular </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ width: '7%' }}>
                                    {this.state.isListView ?
                                        <TouchableOpacity onPress={() => { this.setState({ isListView: false }) }}>
                                            <Image source={require('../assets/list.png')}
                                                style={{ width: 48, height: 48 }}
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => { this.setState({ isListView: true }) }}>
                                            <Image source={require('../assets/tile.png')}
                                                style={{ width: 48, height: 48 }}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>

                            <View style={{ width: "100%", paddingBottom: "3%", borderBottomWidth: 2, borderBottomColor: "#ff9966" }}>
                            </View>
                            {this.state.isListView ?
                                <View style={{ width: "100%", marginTop: "3%" }}>
                                    {this.renderInfluencersAsList()}
                                </View>
                                :
                                <View style={{ width: "100%" }}>
                                    {this.renderInfluencersAsTile()}
                                </View>
                            }
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}
