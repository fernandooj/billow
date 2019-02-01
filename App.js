/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */ 

import QRCodeScanner from 'react-native-qrcode-scanner';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, TouchableOpacity, Dimensions, Modal} from 'react-native';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';
import MapView from 'react-native-maps'; 
import { RNCamera, FaceDetector } from 'react-native-camera';
import Share from 'react-native-share';
import Toast from 'react-native-simple-toast';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

import Pdf from 'react-native-pdf';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 
export default class App extends Component{
  
tomalo(){
  DocumentPicker.show({
    filetype: [DocumentPickerUtil.pdf()],
  },(error,res) => {
    // Android
    console.log(
       "fer"
    );
  });
  
}
   
  onSuccess(e) {
    console.log(e)
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }
  render() {
    const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};

    return (
      <View style={styles.container1}>
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={()=>this.tomalo()}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <Pdf
		             source={source}
		            onLoadComplete={(numberOfPages,filePath)=>{
		                console.log(`number of pages: ${numberOfPages}`);
		            }}
		            onPageChanged={(page,numberOfPages)=>{
		                console.log(`current page: ${page}`);
		            }}
		            onError={(error)=>{
		                console.log(error);
		            }}
		            style={styles.pdf}
		        />
        </View>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});