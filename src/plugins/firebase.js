import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCBobBI6_TOHVplwdcTyV45F1DjVvAA0mI',
  authDomain: 'comercio-a5ed6.firebaseapp.com',
  projectId: 'comercio-a5ed6',
  storageBucket: 'comercio-a5ed6.appspot.com',
  messagingSenderId: '446379373873',
  appId: '1:446379373873:web:bbc4bca62a2cd04c1d6c10'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// db
export async function getProducts () {
  const productsCol = collection(db, 'products')
  const productsSnapshot = await getDocs(productsCol)
  const productsList = []
  productsSnapshot.docs.forEach(doc => {
    const product = doc.data()
    product.id = doc.id
    productsList.push(product)
  })
  return productsList
}
