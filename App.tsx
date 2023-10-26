// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   Button,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   useColorScheme,
//   View,
//   Alert,
//   Pressable,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

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

import {
  Alert,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './Styles';

function App() {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  // const [] = useState('');

  function showDetails() {
    Alert.alert('Your Details', 'Email: ' + email + '\n Password' + password);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <View style={Styles.main}>
      <View style={Styles.container}>
        <Text style={Styles.biohacker}>BIOHACKER</Text>
      </View>
      <View style={Styles.loginContainer}>
        <View style={Styles.login}></View>
        <Text style={{fontSize: 45, color: 'blue', textAlign: 'center'}}>
          Login
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: 'rgba(72, 72, 72, 1)',
            textAlign: 'center',
          }}>
          Login to your account
        </Text>
        <View>
          <TextInput
            onChangeText={text => setEmail(text)}
            placeholder="Enter your email"
            style={Styles.email}
          />
        </View>
        <View>
          <TextInput
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            style={Styles.pass}
          />
          <TouchableOpacity onPress={togglePassword}>
            <Image
              style={{
                flexDirection: 'row',

                // flex: 0.1,
                // position: 'absolute',
                // left: 320,
                // top: 10,
                // height: 20,
                // width: 20,
              }}
              source={
                showPassword
                  ? require('./Images/eye.png')
                  : require('./Images/eye.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{textAlign: 'right'}}>Forgot Password</Text>
        </View>
      </View>
      {/* <View style={Styles.button}></View> */}
      <View style={Styles.down}>
        <View>
          <Button onPress={showDetails} title="Login" color="#001965" />
        </View>
        <View>
          <Text style={{color: 'rgba(0, 25, 101, 1)', textAlign: 'center'}}>
            If You Dont Have an Account?{' '}
            <Text style={{color: 'rgba(79,168,216,1)'}}>SignUp</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
export default App;
