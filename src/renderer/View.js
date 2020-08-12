import React from 'react'
import * as firebase from 'firebase'
export default class View extends React.Component {
  onclick() {
    console.log('kalaaa')
    firebase.database().ref('users/' + '102').set({
      username: 'name',
      email: 'email',
      profile_picture: 'imageUrl'
    })
  }

  render() {
    return (
      <div>
        <h1>Kala</h1>
        <div><p>Name :</p><input type={'text'}/></div>
        <div><p>Age :</p><input type={'number'}/></div>
        <input type={'button'} value={'Submit'} onClick={this.onclick} />
      </div>
    )
  }
}
