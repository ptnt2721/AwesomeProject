import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from'react-native';
import { Colors } from '../configs/colorStyle';

export default class ViewItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {color: Colors.white}
    }

    onPressItem(){
        // Xu ly su kien doi mau Item
        let newColor = Colors.white;
        if(this.state.color == Colors.white){
            newColor = Colors.primary
        }
        this.setState({
            color: newColor
        })
        // Hoac chuyen viec xu ly do ra ngoai thong qua ham truyen vao
        // Co the truyen du lieu ra ngoai de ham phia ngoai xu ly
        this.props.onPressItem(this.props.data)
    }
    render(){
        // in ra prop duoc truyen qua de kiem tra
        console.log(this.props.data)
        // render ra man hinh item duoc truyen vao thong qua props
        return(
            <TouchableOpacity style={[Styles.containerItem, {backgroundColor: this.state.color}]}
                            onPress={() => this.onPressItem()}>
                                <Image style = { Styles.imgLogo}
                                resizeMode={'contain'}
                                source={this.props.data.image} //su dung prop duoc truyen 
                                />
                                <Text>{this.props.data.title}</Text> 
                            </TouchableOpacity>
        )
    }
}
const Styles = StyleSheet.create({
    imgLogo: {
        width: 50,
        height: 50,
        margin: 4
    },
    containerItem: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
