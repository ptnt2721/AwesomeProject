import React, { Component } from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/background_login.jpg')} imageStyle= 
            {{opacity: 0.9}} style={styles.container}>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback style = { styles.container} onPress={Keyboard.dismiss}>    
                    <View style = { styles.logoContainer } >    
                        <View style = { styles.logoContainer } >
                            <Image style = { styles.logo }
                                source = { require('../images/cusc_logo.png') }>
                            </Image>
                        <Text style = { styles.title } > VPDT </Text> 
                        </View>
                        <View style = { styles.infoContainer }>
                            <TextInput style= { styles.input }
                                placeholder="Tên đăng nhập"
                                placeholderTextColor='#2F3B3E'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                onSubmitEditing={()=> this.refs.txtPassword.focus()}
                            />
                            <TextInput style= { styles.input }
                                placeholder="Mật khẩu"
                                placeholderTextColor='#2F3B3E'
                                keyboardType='email-address'
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={"txtPassword"}
                            />
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style= { styles.buttonText }>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#14C682',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 56
    },
    title: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'white'
    },
    input: {
        height: 40,
        backgroundColor: 'rgb(255, 255, 255)',
        color: '#000f00',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    }
});