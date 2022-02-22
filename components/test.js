/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input,
    };
  }

  handleChangeInput = text => {
    this.setState({input: text});
  };

  render() {
    const {input} = this.state;

    return (
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={this.handleChangeInput}
          value={input}
        />
      </View>
    );
  }
}
export default Form;
