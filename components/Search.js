import React from "react"
import style from "../Style"
import {Button, Image, TextInput, View} from 'react-native'
import { StackNavigator } from 'react-navigation'
import List from './List'

class Search extends React.Component{

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{width:20, height:20}}/>
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            city: 'Montpellier'
        }
    }

    setCity(city){
        this.setState({city})
    }

    submit(){
        this.props.navigation.navigate('Result',{city: this.state.city})
    }

    render() {
        return(
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={style.input}
                    value={this.state.city}
                />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher"/>
            </View>
        )
    }

}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({
    Result:{
    screen: List,
        navigationOptions
    },
    Search:{
        screen: Search,
        navigationOptions
    }
})