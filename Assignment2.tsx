import {Text, View} from 'react-native';
import React from 'react';
import {Styles} from './Styles1';

function Assignment2() {
  return (
    <View style={Styles.main}>
      <View style={Styles.row1}>
        <View style={Styles.box1}></View>
        <View style={Styles.box2}></View>
        <View style={Styles.box3}></View>
        <View style={Styles.box4}></View>
      </View>

      {/* row2 */}
      <View style={Styles.row2}>
        <View style={Styles.row2box1}></View>
        <View style={Styles.row2box2}></View>
      </View>

      {/* row3 */}
      <View style={Styles.row3}>
        <View style={Styles.row3box1}></View>
        <View style={Styles.row3box2}></View>
      </View>
      {/* row4 */}
      {/* <View style={Styles.combo}> */}
      <View style={Styles.row4}></View>
      {/* row5  */}
      <View style={Styles.row5}></View>
      {/* row6  */}
      <View style={Styles.row6}></View>
    </View>
    // </View>
  );
}
export default Assignment2;
