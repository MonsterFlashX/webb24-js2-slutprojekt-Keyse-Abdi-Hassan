const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json"};

// Initialize Firebase Admin SDK
//admin.initializeApp({
//    credential: admin.credential.cert(serviceAccount),
//    databaseURL: "https://commerce-8b026-default-rtdb.europe-west1.firebasedatabase.app",
//});

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}


const db = admin.firestore();

module.exports = { db };

console.log("Firebase initialized successfully!");