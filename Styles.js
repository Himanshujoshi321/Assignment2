// import {StyleSheet, View, Text} from 'react-native';
// import React from 'react';

// export const Styles = StyleSheet.create({
//   body: {
//     backgroundColor: 'white`',
//     flex: 1,
//     justifyContent: 'space-between',
//   },

//   row1block1: {
//     backgroundColor: 'yellow',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignSelf: 'center',
//   },
//   row2container: {justifyContent: 'space-between', flexDirection: 'row'},
//   row2block1: {
//     backgroundColor: 'red',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//   },
//   row2block2: {
//     backgroundColor: 'indigo',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//   },
//   container1: {justifyContent: 'space-between', flexDirection: 'row'},
//   row3block1: {
//     backgroundColor: 'purple',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   row3block2: {
//     backgroundColor: 'black',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   row3block3: {
//     backgroundColor: 'yellow',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//     alignSelf: '',
//   },
//   container2: {justifyContent: 'space-between', flexDirection: 'row', gap: 60},
//   row4block1: {
//     backgroundColor: 'blue',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
// });
import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biohacker: {
    fontSize: 35,
    color: 'blue',
    fontFamily: 'poppins',
    marginBottom: 60,
  },

  loginContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  login: {},
  email: {},
  pass: {},
  button: {},
  loginContainer: {},

  down: {gap: 30},
});
