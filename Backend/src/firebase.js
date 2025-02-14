const admin = require("firebase-admin");
const serviceAccount = require("./config/firebaseServiceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://commerce-8b026-default-rtdb.europe-west1.firebasedatabase.app/",
});

const db = admin.firestore();

module.exports = { db };

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid token" });
    }
};

module.exports = { db, verifyToken };
