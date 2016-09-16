import React from 'react';
import UserProfile from './userprofile';
import _ from 'lodash';

//Firebase
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const provider = new firebase.auth.GoogleAuthProvider();

export default class Profile extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: undefined
    };
  }

  componentDidMount () {
    let that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.setState({ currentUser: user });
      } else {
        // no user signed in
      }
    });
  }

  addUserToDB (user) {
    firebase.database().ref('users/' + user.uid).set({
      username: user.displayName,
      id: user.uid
    });
  }


  initiateSignIn () {
    let that = this;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      that.addUserToDB(user);
      that.setState({ currentUser: user });

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("sign in error", error);
    });
  }

  checkCurrentUser () {
    var user = firebase.auth().currentUser;
    if (user) {
      console.log("current user", user);
    }
  }

  signOutUser () {
    let that = this;
    firebase.auth().signOut().then(function() {
      that.setState({ currentUser: undefined });
    }, function(error) {
    });
  }

  render () {
    if (this.state.currentUser !== undefined) {
      return (
        <div>
          <UserProfile
            user={this.state.currentUser}
            signOutUser={this.signOutUser.bind(this)}
            />
        </div>
      );
    } else {
      return (
        <div className="profile-container">
          <div className="auth-button"
               onClick={() => this.initiateSignIn()}>
            sign in with google
          </div>
        </div>
      );
    }
  }
}
