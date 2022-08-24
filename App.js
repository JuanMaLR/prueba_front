import React from 'react';
import { StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';
import {} from "@env";
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  submit(){
    //API call to recieve data
    endpoint_url = 'http://' + process.env.PUBLIC_URL + ':8080/api/v2/formulario';
    console.log("Llegué aquí con el url: " + endpoint_url);
    fetch(endpoint_url)
    .then(response => response.json())
    .then(information => console.log(information))
    .catch((e) => {
      console.log(e);
    });
  }

  render(){
    return(
    <SafeAreaView style={styles.container}>
      <TextInput placeholder = 'Enter name'
      onChangeText = {(text) => {this.setState({name: text})}}
      style = {styles.textInput}/>

      <TextInput placeholder = 'Enter email'
      onChangeText = {(text) => {this.setState({email: text})}}
      style = {styles.textInput}/>

      <TextInput placeholder = 'Enter password'
      secureTextEntry={true}
      onChangeText = {(text) => {this.setState({password: text})}}
      style = {styles.textInput}/>

      <Button title = 'Submit' onPress={() => {this.submit()}}/>
    </SafeAreaView>);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 2
  },
});

export default App;