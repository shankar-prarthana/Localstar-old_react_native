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

export default class SocialMedia extends Component {



    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/6905241.png')}
                    style={styles.background_image}>
                    <KeyboardAvoidingView behavior="padding" enabled >

                        <Text style={styles.title}>LOCAL STAR</Text>
                        <Text style={styles.secondary_title}>Manage your social media accounts</Text>

                        <View style={styles.social_media_container}>
                            <View style={styles.social_media_row}>
                                <View style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={{ uri: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png' }}
                                        style={{ width: 48, height: 48 }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30 }}>Instagram</Text>
                                </View>
                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={require('../assets/tick-mark.png')}
                                        style={{ width: 48, height: 48 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.social_media_row}>
                                <View style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={{ uri: 'https://abs.twimg.com/favicons/twitter.ico' }}
                                        style={{ width: 48, height: 48 }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30 }}>Twitter</Text>
                                </View>
                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={require('../assets/add.png')}
                                        style={{ width: 48, height: 48 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.social_media_row}>
                                <View style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={{ uri: 'https://s.ytimg.com/yts/img/favicon_96-vflW9Ec0w.png' }}
                                        style={{ width: 48, height: 48 }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30 }}>YouTube</Text>
                                </View>
                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={require('../assets/add.png')}
                                        style={{ width: 48, height: 48 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.social_media_row}>
                                <View style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={{ uri: 'https://www.snapchat.com/favicon.png' }}
                                        style={{ width: 48, height: 48 }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30 }}>Snapchat</Text>
                                </View>
                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={require('../assets/add.png')}
                                        style={{ width: 48, height: 48 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.social_media_row}>
                                <View style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={{ uri: 'https://s16.tiktokcdn.com/musical/resource/mtact/static/pwa/icon_128x128.png' }}
                                        style={{ width: 48, height: 48 }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30 }}>Tiktok</Text>
                                </View>
                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={require('../assets/add.png')}
                                        style={{ width: 48, height: 48 }} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.social_media_row}>
                                <View style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={{ uri: 'https://www.facebook.com/images/fb_icon_325x325.png' }}
                                        style={{ width: 48, height: 48 }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30 }}>Facebook</Text>
                                </View>
                                <TouchableOpacity style={{ width: '15%', paddingLeft: '2%' }}>
                                    <Image source={require('../assets/add.png')}
                                        style={{ width: 48, height: 48 }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}