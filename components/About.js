import React from "react";
import {Text, View, StyleSheet, Image, Button} from 'react-native'
import style from '../Style'
import * as globalStyle from "react-native";
export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/user.png')} style={{width:20, height:20}}/>
        }
    }

    search(){
        this.props.navigation.navigate('Search')
    }

    render() {
        return(
            <View style={style.container}>
                <Text style={style.title}>A propos de l'application</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville"/>
            </View>
        )
    }

}