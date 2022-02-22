import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '97%',
    height: 70,
    borderRadius: 5,
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  containerDetail: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 4,
    paddingRight: 15,
  },
  box3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '97%',
    height: 70,
    borderRadius: 5,
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 5,
    elevation: 5,
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    width: 50,
    height: 50,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    flex: 3,
    color: '#000',
    paddingRight: 5,
  },
  price: {
    flex: 1,
    color: '#000',
  },
  textPrice: {
    fontSize: 10,
    color: '#000',
  },
  textTitle: {
    fontSize: 16,
  },
});

export default styles;
