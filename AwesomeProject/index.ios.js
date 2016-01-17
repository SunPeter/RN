/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var AwesomeProject = React.createClass({
  getInitialState: function(){
    return {
      movies: null
    }
  },
  componentDidMount: function(){
    this.fetchData();
  },
  fetchData: function(){
    var url = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        "movies": data.movies
      });
    })
    .done();
  },
  renderLoading: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.font}>
              加载中...
        </Text>
      </View>
    );
  },
  render: function() {
    var movies = this.state.movies;
    if(movies) {
        var movie = movies[0];
        return (
        <View style={styles.container}>
          <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
          <View style={styles.text}>
              <Text style={styles.font}>
                {movie.title}
              </Text>
              <Text style={styles.font}>
                {movie.year}
              </Text>
          </View>
        </View>
      );
    } else {
      return this.renderLoading();
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  text: {
    flex: 1
  },
  font: {
    textAlign: "center"
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
