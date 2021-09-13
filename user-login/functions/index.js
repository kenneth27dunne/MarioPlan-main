const functions = require("firebase-functions");
const admin = require("firebase-admin");

//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, Ninjas");
});

const createNotification = notification => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('notification added', doc))
}

exports.projectCreated = functions.firestore
.document('project/{projectId}')
.onCreate(doc => {
  const project = doc.data();
  const notification = {
    content: 'added a new project',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimeStamp()
  }
  return createNotification(notification)
})