import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import Collection from './collection';
function Collections(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [isLoadMore, setIsLoadMore] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${20}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoadMore(false));
  }, []);
  React.useEffect(() => {
    if (isLoadMore === true) {
      // setIsLoading(true);
      fetch(`https://fakestoreapi.com/products?limit=${20}`)
        .then(response => response.json())
        .then(json => {
          setData([...data, ...json]);
          // setIsLoading(false);
        })
        .catch(error => console.error(error))
        .finally(() => setIsLoadMore(false));
    }
  }, [isLoadMore]); // eslint-disable-line

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
            keyExtractor={(item, index) => `${index}-${item.id}`}
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
            keyExtractor={(item, index) => `${index}-${item.id}`}
            renderItem={({item}) => (
              <Collection
                img={item.image}
                title={item.title}
                price={item.price}
                nav={props.nav}
                item={item}
                index={`${item.id}-${1}`}
                ishorizontal={false}
              />
            )}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => {
              if (data.length < 100) {
                return <ActivityIndicator />;
              } else {
                return null;
              }
            }}
            onEndReached={() => {
              if (data.length < 100) {
                setIsLoadMore(true);
              }
            }}
          />
        )}
      </View>
    </View>
  );
}
export default Collections;
