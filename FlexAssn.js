import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class FlexAssn extends React.Component{
    render(){
        return(
            <View style={[{flex: 1}, styles.elementsContainer]}> 
                <View style={{flex: 1, backgroundColor: '#EE2C38'}} /> 
                <View style={{flex: 2, backgroundColor: '#FAA030'}} /> 
                <View style={{flex: 3, backgroundColor: '#32B76C'}} >    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });