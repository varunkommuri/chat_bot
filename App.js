import React  from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import ChatBot from 'react-native-chatbot';
import styled from 'styled-components';
 
const steps = [
  {
    id: '0',
    message: 'Hi ',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Are you Varun\'s friend ?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Yes', trigger: '4' },
      { value: 2, label: 'No', trigger: '5' }]
  },
  {
    id: '4',
    message: 'great ! I\'ll let him know  ',
    trigger:'6',
  },
  {
    id: '5',
    message: 'Thanks for visiting, have a nice day',
    trigger:'6'
  },
  {
    id: '6',
    message: 'Bye :)',
    end:true
  },
];
export default class App extends React.Component{
  render(){
    return(
      <View style = {{flex:1,marginTop:50}}>
         <ChatBot
         botBubbleColor = "#0078FF"
         botAvatar = 'https://www4.lunapic.com/do-not-link-here-use-hosting-instead/15887792205248240?2388483450'
         
          steps={steps} />
      </View>
      
    )
  }
}


 

