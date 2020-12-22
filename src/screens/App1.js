import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from '../configs/colorStyle';
import { ViewItem } from './ViewItem';

export default class App1 extends React.Component{
    //Hearder ung dung
    static navigationOptions = ({navigation}) => {
        return {
            title: "PROPS",
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
                alignSelf: 'center'
            }
        };
    };
    constructor (props) {
        super(props);
        this.state = {
            message: "",
            listData: [
                {
                    image: require('../assets/images/ios.png'),
                    title: "IOS"
                },
                {
                    image: require('../assets/images/android.png'),
                    title: "Android"
                },
                {
                    image: require('../assets/images/react-native.png'),
                    title: "React Native"
                }
                
            ]
        }
    }
    //onPressItem
    onPressItem(item, index){
        this.state({
            message: "Click item" + index + " - title: " + item.title
        })
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.textMessage}>{this.state.message}</Text>
                <FlatList
                    style={Styles.containList}
                    data={this.state.listData}
                    renderItem={({ item, index}) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        );
    }
    // Hien thi 1 item
    renderItem(item, index) {
        return(
            <ViewItem
                data={item} // Truyen item qua ViewItem nhu mot prop
                onPressItem={(itemPress) => {this.onPressItem(itemPress, index) }} // truyen mot ham qua de bat su kien click item
            />
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    textMessage: {
        marginTop: 16,
        color: 'green',
        fontSize: 16,
    },
    containList: {
        width: '100%',
    }
})

