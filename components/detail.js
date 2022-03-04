import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {like} from '../app/Actions/authActions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  box1: {
    flexDirection: 'row',
  },
  box2: {
    paddingTop: 10,
  },
  box3: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 20,
  },
  img: {
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  info: {
    flex: 2,
    margin: 5,
    paddingLeft: 10,
  },
  height: {
    lineHeight: 30,
    fontSize: 18,
  },
  Bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  border: {
    borderColor: 'black',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    alignSelf: 'flex-start',
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
const ShowRating = rate => {
  let result = [];
  for (let i = 0; i < Math.floor(rate); i++) {
    result.push(<Icon key={i} name="star" size={25} color="yellow" />);
  }
  return result;
};

function BlogDetail(props) {
  const data = props.route.params.data;
  const [name, setName] = React.useState('like2');
  React.useEffect(() => {
    const listLike = props.isLogged.liked;
    listLike.find(item => {
      return item.id === data.id && item.name === props.isLogged.username;
    })
      ? setName('like1')
      : setName('like2');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.img}>
            <Image style={styles.image} source={{uri: data.image}} />
          </View>
          <View style={styles.info}>
            <Text style={styles.height}>
              <Text style={styles.Bold}>{data.title}</Text>
            </Text>
            <Text style={styles.height}>
              <Text style={styles.Bold}>Price: </Text>
              {data.price} USD
            </Text>
            <Text style={styles.height}>
              <Text style={styles.Bold}>Rate: </Text>
              {ShowRating(data.rating.rate)}
            </Text>
            <Text style={styles.height}>
              <Text style={styles.Bold}>Rate Count: </Text>
              {data.rating.count}
            </Text>
            <View style={styles.border}>
              <Text style={styles.height}>{data.category}</Text>
            </View>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={styles.Bold}>Description: </Text>
          <Text style={styles.height}>{data.description}</Text>
          <Text style={styles.Bold} onPress={() => console.log(props.isLogged)}>
            {props.isLogged.isLogin ? 'Buy' : 'Login to buy'}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.box3}>
        <Icon
          name={name}
          size={45}
          color="blue"
          onPress={() => {
            if (name === 'like2') {
              if (props.isLogged.isLogin) {
                props.addToCart({
                  id: data.id,
                  name: props.isLogged.username,
                });
                setName('like1');
                Alert.alert('Success', 'You liked this product');
              } else {
                Alert.alert(
                  'Please Login',
                  'You nêd to login to like this product',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () =>
                        props.navigation.navigate('SigninAndup', {
                          color: 'green',
                        }),
                    },
                  ],
                  {cancelable: false},
                );
              }
            }
          }}
        />
      </View>
    </View>
  );
  // : (
  //   <Account navigation={props.navigation} color="green" />
  // );
}
export default connect(
  state => ({
    isLogged: state.authReducers,
  }),
  dispatch => ({
    addToCart: data => dispatch(like(data)),
  }),
)(BlogDetail);
