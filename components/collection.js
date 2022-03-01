import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      title: props.title,
      price: props.price,
      item: props.item,
      navigation: props.nav,
      ishorizontal: props.ishorizontal,
    };
  }
  render() {
    if (this.state.ishorizontal === false) {
      return (
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.state.navigation.navigate('ProductDetail', {
              data: this.state.item,
            });
          }}>
          <View style={styles.container}>
            <View style={styles.box1}>
              <Image style={styles.image} source={{uri: this.state.img}} />
            </View>
            <View style={styles.box2}>
              <View style={styles.title}>
                <Text style={styles.textTitle}>{this.state.title}</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.textPrice}>
                  Price: {this.state.price + ' ' + this.props.index}
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          style={styles.button}
          onPress={() =>
            this.state.navigation.navigate('ProductDetail', {
              data: this.state.item,
            })
          }>
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: this.state.img}} />
          </View>
        </TouchableHighlight>
      );
    }
  }
}
export default connect(state => ({
  isLogged: state.authReducers,
}))(Collection);
