import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
// import FlexExamples from './Flex';
import FlexAssn from './FlexAssn';
// import FlexExamples from './Flex';
import ProductList from './components/ProductList';

export default class App extends React.Component {
  
  handlePress(e){
    console.log(e);
  }
  render() {

    return (
    
      <ProductList/>
     
    );
  }
}


