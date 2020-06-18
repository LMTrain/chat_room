const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();

exports.onUserStatusChanged = functions.database.ref('/status/{uid}').onUpdate(
  async (change, context) => {
    const eventStatus = change.after.val()

    const userFirestoreRef = firestore.doc(`/profiles/${context.params.uid}`)

    const statusSnapshot = await change.after.ref.once('value')
    const status = statusSnapshot.val()

    if (status.last_changed > eventStatus.last_changed) {
      return null
    }

    eventStatus.last_changed = new Date(eventStatus.last_changed)
    return userFirestoreRef.update(eventStatus)
  }
)


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

