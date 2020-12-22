import React, { Component } from "react";
import {StyleSheet, Text,Image, View, Button, TouchableOpacity, FlatList} from 'react-native';
import Styles from './styles';

export default class Test extends React.Component {
    //Header ung dung (tuy chon)
    static navigationOptions = ({ navigation }) => {
        return {
            title: "COMPONENT",
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
                alignSelf: 'center'
            }
        };
    };

    constructor(props){
        super(props);
        this.state = {
            message: "Message 2",
            listData:[
                {
                    image: require('../assets/images/ios.png'),
                    title: 'IOS'
                },
                {
                    image: require('../assets/images/android.png'),
                    title: 'Android'
                },
                {
                    image: require('../assets/images/react-native.png'),
                    title: 'React Native'
                }
            ]
        }
        this.clickButton = 0;
        this.clickTouchAbleOpectity = 0;
    }

    onPressButtonDemo(){
        this.clickButton++;
        this.setState({
            message: 'Clicked Button: ' + this.clickButton
        })
    }

    onPressTouchableOpacityDemo(){
        this.clickTouchAbleOpectity++;
        this.setState({
            message: 'Clicked TouchableOpacity: ' + this.clickTouchAbleOpectity
        })
    }

    render(){
        return(
            <View style={Styles.container}>
                {/*Hien thi mot message len man hinh */}
                <Text style={Styles.textMessage}> Welcome to React-Native</Text>
                <View style={Styles.containImage}>
                    {/* Hien thi anh tu local resource */}
                    <Image 
                        style={Styles.imgLogo} /* style cua anh */
                        resizeMode={'contain'} /* che do hien thi (center, contain, cover, repeat, stretch) cua anh */
                        source={require('../assets/images/react-native.png')}
                    /> 
                    {/* Hiển thị ảnh từ web/server */}
                    <Image
                        style={Styles.imgLogo}
                        resizeMode={'contain'}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    /> 
                </View>
                {/* In mot gia tri cua state len man hinh */}
                <Text style={Styles.textMessage}>{this.state.message}</Text>
                {/* Sử dụng Button với chức năng press vào nút */}
                <Button
                    onPress={() => this.onPressButtonDemo()}
                    title="Click Me!"
                    color="#841584"
                />
                {/* Su dung TouchableOpacity voi chuc nang press giong nhu button*/}
                <TouchableOpacity style={Styles.btnStyle}
                                onPress={() => this.onPressTouchableOpacityDemo()}>
                                    <Text style={Styles.textAction}>Touchable Opacity</Text>
                </TouchableOpacity>
                {/* Su dung FlatList de hien thi ra mot danh sach*/}
                <FlatList 
                    data={this.state.listData}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item,index) => index.toString()}
                />

            </View>    
        );
    }

    /* Hien thi chi tiet 1 item nhu the nao */
    renderItem(item){
        return (
            <View style={Styles.containerItem}>
                <Image 
                    style={Styles.imgLogo}
                    resizeMode={'contain'}
                    source={item.image}
                />
                <Text>{item.title}</Text>
            </View>
        )
    }

}
