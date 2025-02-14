const admin = require("firebase-admin");

// Load service account key from Firebase
const serviceAccount = require("./serviceAccountKey.json"); // Downloading this from Firebase

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Firestore instance 

module.exports = { db };
