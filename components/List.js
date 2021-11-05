import React from "react";
import style from "../Style";
import axios from 'axios'
import {ActivityIndicator, Text} from 'react-native'

export default class List extends React.Component{

    static navigationOptions = ({navigation}) => {
        return{
            //title : 'Météo / ' + navigation.state.params.city
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            city: 'Montpellier',//this.props.navigation.state.params.city,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather(){
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&callback=test&appid=5d05cb2cbb5bd4d0d890ee238a796769')
            .then((response) => {
                this.setState({report: response.data})
            })
    }

    render() {
        if(this.state.report === null){
            return (
                <ActivityIndicator color={style.color} size="large"/>
            )
        }
        else {
            return (
                <Text>Salut les gens</Text>
            )
        }
    }

}