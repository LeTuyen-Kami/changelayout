import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import Collection from './collection';
function Collections(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    box1: {
      flex: 1,
    },
    box2: {
      flex: 7,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            nestedScrollEnabled={true}
            data={data}
            horizontal
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Collection
                img={item.image}
                title={item.title}
                price={item.price}
                nav={props.nav}
                item={item}
                ishorizontal={true}
              />
            )}
          />
        )}
      </View>
      <View style={styles.box2}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            nestedScrollEnabled={true}
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Collection
                img={item.image}
                title={item.title}
                price={item.price}
                nav={props.nav}
                item={item}
                ishorizontal={false}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
export default Collections;
