import React, {Component} from 'react';
import { styles } from './Styles';
import { Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      emi: 0,
      principal: 0,
      interest: 0,
      tenure: 0
    }
    this.calculateEMI = this.calculateEMI.bind(this);
  }

  calculateEMI() {
    let emi = 0;
    let r = this.state.interest;
    let p = this.state.principal;
    let n = this.state.tenure;
    if(r === 0 || p === 0 || n === 0){
      this.setState({
        emi : 0
      });
    }
    else{
      r = (this.state.interest / 12 ) / 100;
    emi = ( p * r ) * (Math.pow(1 + r,n) / (Math.pow(1 + r , n ) - 1))
    this.setState({
      emi : emi.toFixed(3)
    });
    }
  }


  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./img/icon.png')} style={styles.logo} />
        <Text style={styles.text}>Principal Amount:</Text>
        <TextInput style={styles.input} placeholder='In Rupees' onChangeText={(val) => this.setState({principal : val})}/>
        <Text style={styles.text}>Interest Rate:</Text>
        <TextInput style={styles.input} placeholder='Percentage' onChangeText={(val) => this.setState({interest : val})}/>
        <Text style={styles.text}>Tenure of Loan:</Text>
        <TextInput style={styles.input} placeholder='In Months' onChangeText={(val) => this.setState({tenure : val})}/>
        <Text style={styles.emitext}>EMI to be paid: {'\u20B9'} {this.state.emi}</Text>
        <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={this.calculateEMI}>
            <Text style={styles.buttonText}>Calculate EMI</Text>
          </TouchableOpacity>
        </View>
    );
  }
  
}

export default App;