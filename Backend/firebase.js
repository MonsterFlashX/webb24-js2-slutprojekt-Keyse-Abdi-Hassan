const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

//admin.initializeApp({
 //   credential: admin.credential.cert(serviceAccount),
 //   databaseURL: "https://commerce-8b026-default-rtdb.europe-west1.firebasedatabase.app/",
//});

// firebase private key
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsqxE00ZyT1m9d\nYLB1AC6JF9VHydm+71+ykSeYb7w5GVnngYCxpioWtBulb6ZemQ8p7j3XhvMGxw8q\neRH3VUMtTm2F8eiCQl9pRkkZRZrkKWqfdb8HfcBtCpGm0n6dbaivO0w32ORIfRuk\n2SPKxywR1Gf1WROU9QEDbKQ8zHu1sw29573nIzR00ujOtXbK4gSIQ+SSCqy3BulT\nkTCerXYWJcEK18N/N8QRATYB3nJb4YebgVRYlPZCUBiCRRKWBdz7IROdcLBj4khz\ncJTk+SVj+l0jP0tkwNz+jXjkCBzMs0hDPIN6SjU+oRjrzRXFheJlDB4uVPQLdpVk\nCVIiv9jTAgMBAAECggEAGreDe409cYCaDbRCyW/EQ5Es/qUkbI9EWvBr1IHheWJL\nT29x1ssTsxyeNHxwnS2Is5+58OngG7ncRmGiXodSVCXQ+4tBQzp64eKut9rVyxz/\ncvn4m3OhPR4ICGyEi95mXerKcc+9DtxQ1TKF/7/OuVmI1mU4ivFX/Uwno4KuV6BC\nXBPXGtdL0cCD8D2qge4dW7jPf0tD7iKef4R2rJ/v6T2BFqBENPda6yEA2l/26qxC\nNrSHH5lHIOTMiGQsTGH67mtShUMnd4l5hXU35zx0pNPeCFdkUxwaVlusWUUMTUWY\n0OKz57sY7+4o2MRKZtb0iiHBKpJKPtBpnqyh5sKC6QKBgQDU5WG2of8VM+ajdi7k\nvVhYSOcWH5SAXW70ozL+y6wfmBvkgGsLK18+2rVRvQe3+D8SP5iol3gvVKSjOxv5\nFW6Yb8AGP7HPqNvPRycQjzr2tG7B+NuIO4JHvDDQS821eNZ3erkfJVc8gbpE6zut\nkECTzXf/Xsczhruz9p6ZDhEqSQKBgQDPoKNVZlQb/ukffyK+i5jc/Nl5jqD1V8zH\nOzfUXShHIEeT9QoNj/qA4geUDhYZW8qgZzZxgp7CZ7hSjFpMROqlIrFsEmJMK3Tr\niTJLdVqEVfzCVBJUVY1C6PfS2Ba3s1fFRZczv7lbjBzYmUX7gtpop9q5VDtEgst0\nrlqjygJKOwKBgA/hwMVYFmhlg8oj8eGcgm+rmJmc534f+jwDxLUfSorc1Q/ZyKJ/\nrM5KkIY1fNLrkQDyf5fsHMojHVkT+sU9JQ/4HjIZJFGifitbWn2wwaxPz4dm4jGq\nhtCFKHsRfJoSFqW5IQBCz9wyrUug5MXQ4hBknpQNZPziCzSkrDYsx3kJAoGBAILR\nJ5gLHTt2ZNOfevirY+j4tt1L7EYox7FPsmFvQI1v3Slv3qGk8aR6xWOXbH0VxJlD\n7p2eOwEp8IyyOcKMOXtKXJdHDgAH8WblznaUvi9bLiISbmoMbTCXMG38EHQ13ztA\nGYBVcCgqI5KlH97UF2CRQdI7LAyCjEY8BIfmI4M5AoGBAMFM+6n6IDEPPiMg1aWS\nTAbwwoe08uejcpM0EoF8PNK+9GhPIFVP/s32ridmwCR3lfdjNalU9XQUm7cqCLvG\nqYAMrrIw3/HcXTc6YTkRdRgc3X2ESnBAS5qKw5hbln5r7FyrPAZ+Ht/q3w4QAmWM\n5KzaOSQ2sVFRSLFp71xxIt2v\n-----END PRIVATE KEY-----\n",

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
