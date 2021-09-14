const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const createNotification = notification => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('notification added', doc))
}

exports.projectCreated = functions.region('europe-west2').firestore
.document('projects/{projectId}')
.onCreate(doc => {
  const project = doc.data();
  const notification = {
    content: 'added a new project',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notification)
})

exports.userJoined = functions.region('europe-west2').auth.user()
  .onCreate(user => {
      return admin.firestore().collection('users')
      .doc(user.uid).get()
      .then(doc => {
        const newUser = doc.data();
        const notification = {
          user: `${newUser.firstName} ${newUser.lastName}`,
          content: 'Joined the party',
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
      })
  })