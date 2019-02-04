import {Platform, AsyncStorage} from 'react-native'
import firebaseClient from  "./FirebaseClient";
import axios from 'axios'
import firebase from 'react-native-firebase';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////	ENVIO LA NOTIFICACION						
//////////////	tipo 1==> quiere ser amigo, tipo 2 ==> acepta ser amigo	, tipo 3 ==> quiere acceder a un item, tipo 4 ==> Aceptaron a un usuario dentro de un item						
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sendRemoteNotification = (tipo, token, targetScreen, titulo, mensaje, imagen, parameter)=> {
	
	let body;

    if(Platform.OS === 'android'){
      body = {
        "to": token,
      	"data":{
					"title": "Simple FCM Client",
          "body": "Click me to go to detail",
          targetScreen: 'Home',
          now: new Date().toISOString()
    		},
    		"priority": 10
      }
    } else {
			body = {
				"to": token,
				"notification":{
					"title": "Simple FCM Client",
					"body": "Click me to go to Home",
					"sound": "default"
        },
        data: {
          targetScreen: 'Home',
          now: new Date().toISOString()
        },
				"priority": 10
			}
		}

	firebaseClient.send(JSON.stringify(body), "notification");
	
	// axios.get('/x/v1/user/profile') 
	// .then((res)=>{
	//     let body;
	//     let nombre = tipo==14 ?'' :res.data.user.user.nombre
	//     let photo  = res.data.user.user.photo
	//     imagen = imagen==null ? photo :imagen
	//    	console.log(token)
	//     if(Platform.OS === 'android'){
	//     	console.log("android")
	//     	bodyIos = {
	// 	        to: token,
	// 	        notification: {
	// 	         	title: titulo,
	// 				body : `${nombre} ${mensaje}`,
	// 				priority:"high",
	// 				icon:"ic_notif",
	// 				targetScreen:targetScreen,
	// 				color:"#00ACD4",
	// 				big_picture:imagen,
	// 				picture:imagen,
	// 				image:imagen,
	// 				large_icon: imagen,
	// 				sound: "default",
	// 				parameter,
	// 				// group: "GROUP",
	// 				// badge:33,
	// 				show_in_foreground: true
	// 	        },
	// 	        data: {
	// 				targetScreen:targetScreen,
	// 				parameter,
	// 				// group: "GROUP",
	// 				// badge:54,
	// 	        },
	// 	        priority: 10
	// 	    };
	// 	    firebaseClient.send(JSON.stringify(bodyIos), "notification");			
	//     }else{
	//     	console.log("ios")
	// 		bodyIos = {
	// 	        to: token,
	// 	        notification: {
	// 	         	title: titulo,
	// 				body : `${nombre} ${mensaje}`,
	// 				priority:"high",
	// 				icon:"ic_notif",
	// 				targetScreen:targetScreen,
	// 				color:"#00ACD4",
	// 				big_picture:imagen,
	// 				picture:imagen,
	// 				image:imagen,
	// 				large_icon: imagen,
	// 				sound: "default",
	// 				parameter,
	// 				group: "GROUP",
	// 				// badge:1,
	// 				show_in_foreground: true
	// 	        },
	// 	        data: {
	// 				targetScreen:targetScreen,
	// 				parameter,
	// 				group: "GROUP",
	// 	        },
	// 	        priority: 10
	// 	    };
	// 	    firebaseClient.send(JSON.stringify(bodyIos), "notification");
	//     }
    // })
}