import React from 'react'
import './Backend.css'
import * as firebase from 'firebase'

function Backend() {

  // Get elements
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');

  // Listen for file selection
  fileButton.addEventListener('change', function(e) {
    //Get file
    var file = e.target.files[0];

    // Create a storage ref
    var storageRef = firebase.storage().ref('Projects/' + file.name);

    // Upload file
    var task = storageRef.put(file);

    // Update progress bar
    task.on('state_changed',
      
      function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },

      function error(err) {

      },

      function complete() {

      }
    );
  });





  return (
    <div>
      <progress value="0" max="100" id="uploader">0%</progress>
      <input type="file" value="upload" id="fileButton" />
    </div>
  )
}

export default Backend;
