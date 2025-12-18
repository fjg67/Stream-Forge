import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Configuration Firebase Stream Forge
const firebaseConfig = {
  apiKey: "AIzaSyDv9gw6BuptwjhpHPJ8zRhbmgbLxMXnzFc",
  authDomain: "stream-forge-ed041.firebaseapp.com",
  projectId: "stream-forge-ed041",
  storageBucket: "stream-forge-ed041.firebasestorage.app",
  messagingSenderId: "953245108732",
  appId: "1:953245108732:web:2434172df3266324c9ca79",
  measurementId: "G-Q6PNCCENEZ"
}

// Initialise Firebase seulement si pas déjà fait
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

// Export des services
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
