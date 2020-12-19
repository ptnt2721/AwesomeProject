import React, {Component} from 'react';
import {
    Dimensions, 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    Platform,
    Button,
    TextInput,
    StatusBar
    } from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState(
        {
            email: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true
        }
    );

    const textInputChange = (val) => {
        if( val.length !== 0) {
            setData({
                ... data,
                email: val,
                check_textInputChange: true
            });
        }else{
            setData({
                ... data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ... data,
            password: val,
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#295097"
                        barStyle="light-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View style={styles.footer} 
                            animation="fadeInUpBig">
                <Text style={styles.text_footer}>Tên đăng nhập</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}/>
                    <TextInput style={styles.textInput}
                        placeholder="Username"
                        autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}/>
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn">
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}/>
                        </Animatable.View>
                    : null}
                </View>
                
                <Text style={[styles.text_footer, {
                    marginTop: 25
                }]}>Mật khẩu</Text>
                
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}/>
                    <TextInput style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        onChangeText={(val)=>handlePasswordChange(val)}/>
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}/>
                        : 
                        <Feather
                            name="eye"
                            color="green"
                            size={20}/>
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={{color: 'grey', marginTop:14}}> Quên mật khẩu ?</Text>
                </TouchableOpacity>
                <View style= { styles.button}>
                    <TouchableOpacity style={styles.signIn}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <LinearGradient style={styles.signIn}
                                        colors={['#295097', '#295097']}>
                            <Text style= { [styles.textSign, {color:'#fff'}]}>Đăng nhập</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                
                {/* <TouchableOpacity onPress={() =>navigation.navigate('ForgetPassScreen')}>
                        <View style={styles.btnForgot}>
                            <Text style={styles.textForgot}>Quên mật khẩu?</Text>
                        </View>
                    </TouchableOpacity> */}
            </Animatable.View>
        </View>
    )
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#096dcc'
        //backgroundColor: '#009387'
        // backgroundColor: '#27aace'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    title: {
        color: '#05375a',
        fontSize: 23,
        fontWeight: 'bold',
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        marginTop: Platform.OS === 'ios' ? 0 : -12
    },
    button: {
        alignItems: 'center',
        marginTop: 35 
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnForgot: {
        alignItems: 'center',
        marginTop: 10
    },
    textForgot: {
        color: 'grey',
        alignItems: 'center',
        fontSize: 16,
        fontStyle: 'italic'
    }
})