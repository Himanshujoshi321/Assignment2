// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: 'blue',
//         flex: 1,
//         // alignItems: 'center',
//         // justifyContent: 'space-between',
//       }}>
//       <View
//         style={{
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//         }}>
//         <View>
//           <Text style={{backgroundColor: 'yellow', width: 50, height: 50}}>
//             gff
//           </Text>
//         </View>
//         <Text style={{backgroundColor: 'green', width: 50, height: 50}}>
//           HED
//         </Text>
//       </View>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: 'white',
//         flex: 1,
//         justifyContent: 'space-between',
//       }}>
//       <View
//         style={{
//           backgroundColor: 'yellow',
//           width: 100,
//           height: 100,
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignSelf: 'center',
//         }}>
//         <Text>hh</Text>
//       </View>
//       {/* 2 */}
//       <View
//         style={{
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//   }}>
//   <View
//     style={{
//       backgroundColor: 'red',
//       width: 100,
//       height: 100,
//       flexDirection: 'row',

//       alignSelf: 'left',
//     }}></View>
//   <View
//     style={{
//       backgroundColor: 'green',
//       width: 100,
//       height: 100,
//       flexDirection: 'row',

//       alignSelf: 'center',
//     }}></View>
// </View>

// {/* 3 */}
// <View
//   style={{
//   justifyContent: 'space-between',
//   flexDirection: 'row',
// }}>
// <View
//   style={{
//     backgroundColor: 'purple',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',

//     alignSelf: 'center',
//   }}></View>
// <View
//   style={{
//     backgroundColor: 'indigo',
//     width: 100,
//     height: 100,
//     flexDirection: 'row',

//     alignSelf: 'center',
//   }}></View>
//   <View
//     style={{
//       backgroundColor: 'black',
//       width: 100,
//       height: 100,
//       flexDirection: 'row',

//       alignSelf: 'center',
//     }}></View>
// </View>

// {/* 4 */}
// <View
//   style={{
//     justifyContent: 'flex-end',
//     flexDirection: 'row',
//     gap: 60,
//   }}>
//   <View
//     style={{
//       backgroundColor: 'blue',
//       width: 100,
//       height: 100,
//       flexDirection: 'row',

//       alignSelf: 'center',
//     }}></View>
//   <View
//     style={{
//       backgroundColor: 'orange',
//       width: 100,
//       height: 100,
//       flexDirection: 'row',

//       alignSelf: 'center',
//     }}></View>
// </View>

// {/* 5 */}
//       <View
//         style={{
//           justifyContent: 'flex-start',
//           flexDirection: 'row',
//           gap: 60,
//         }}>
//         <View
//           style={{
//             backgroundColor: 'blue',
//             width: 100,
//             height: 100,
//             flexDirection: 'row',

//             alignSelf: 'center',
//           }}></View>
//         <View
//           style={{
//             backgroundColor: 'red',
//             width: 100,
//             height: 100,
//             flexDirection: 'row',

//             alignSelf: 'center',
//           }}></View>
//       </View>
//     </View>
//   );
// }

// import {Styles} from './Styles';

// export default function App() {
//   return (
//     <View style={Styles.body}>
//       <Image
//         style={{height: 200, width: 200}}
//         source={{
//           uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwlHr4C0nJF3vS84iwMH4hO7ot6hjMWVbGQ&usqp=CAU',
//         }}
//       />
// <View style={Styles.row1block1}></View>
// <View style={Styles.row2container}>
//   <View style={Styles.row2block1}></View>
//   <View style={Styles.row2block2}></View>
// </View>
// {/* {row3} */}
// <View style={Styles.container1}>
//   <View style={Styles.row3block1}></View>
//   <View style={Styles.row3block2}></View>
//   <View style={Styles.row3block3}></View>
// </View>
// {/*  row4 */}
// <View style={Styles.container2}>
//   <View style={Styles.row4block1}></View>
//   {/* <View style={Styles.row4block2}></View> */}
// </View>
/*  row5 */
/* <View style={Styles.container3}>
        <View style={Styles.row4block1}></View>
        <View style={Styles.row4block2}></View> */
/* </View> */
//     </View>
//   );
// }

// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {Styles} from './Styles';

// function App() {
//   // const [name, setName] = useState('');
//   return (
//     <View style={Styles.container}>
//       <View style={Styles.container1}>
//         <Text style={Styles.biohacker}>BIOHACKER</Text>
//       </View>
//       <View style={Styles.login}>
//         <Text style={{fontSize: 40, color: 'darkblue', textAlign: 'center'}}>
//           Login
//         </Text>
//   <Text style={{color: 'rgba(72, 72, 72, 1)', textAlign: 'center'}}>
//     Login To Your Account
//   </Text>
// </View>

// <View>
//   <View style={{justifyContent: 'space-between', gap: 18}}>
//     <View>
//       <TextInput
//         placeholder="Enter Your Email"
//         style={Styles.email}></TextInput>
//     </View>
//     <View style={Styles.pass}>
//       <TextInput
//         placeholder="Password"
//         textContentType="password"

//         </Text>
//       </View>
//       <View style={Styles.btn}>
//         <Button
//           title="Login"
//           color={'rgba(0, 25, 101, 1)'}
//           onPress={() => Alert.alert('Login')}
//         />
//       </View>
//       <View>
//         <Text style={Styles.account}>
//           If you don't have an account?{' '}
//           <Text style={Styles.Signup}> Sign up</Text>
//         </Text>
//       </View>
//     </View>
//   );
// }

// import {Styles} from './Styles1';

// function App() {

//   return (

//   ) ;

// };
// export default App;
