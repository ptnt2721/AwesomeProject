import React, {Component} from 'react';
import {
    Dimensions, 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    Button,
    StatusBar
    } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#295097"
                        barStyle="light-content"></StatusBar>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                source={ require('../images/logo_tg.png')}
                style={styles.logo}
                resizeMode='stretch'/>
            </View>
            <Animatable.View style = { styles.footer}
                                animation="fadeInUpBig">
                <Text style= { styles.title}>Chào mừng bạn đến với hệ thống văn bản điện tử !</Text>
                <Text style= { styles.text}>Quản lý văn bản của bạn nhanh chóng</Text>
                <View style= { styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <LinearGradient colors={['#295097', '#295097']} style={styles.signIn}>
                    <Text style={styles.textSign}>
                        Bắt đầu
                    </Text>
                    <MaterialIcons
                    name="navigate-next"
                    color="#fff"
                    size={ 20}/>
                </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        )
}

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#009387'
        backgroundColor: '#096dcc'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 23,
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 35 
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
})
