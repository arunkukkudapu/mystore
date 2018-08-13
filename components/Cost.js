import React from 'react';
import {View,Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default class Cost extends React.Component{
    constructor(props){
        super(props);
        this.state={cost:2000}
    }
    render(){
        const {cost} = this.state;
        return(
            <View>
                {/* <FontAwesome name="rupee" size={32}/> */}
                <Text>{cost}</Text>
            </View>
        )
    }

}