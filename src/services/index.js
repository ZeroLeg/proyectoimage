import config from '../../firebase/config'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export const app = initializeApp(config)
export const db = getFirestore(app)

export const getMaterials = async () => {
  const materialsCol = collection(db, 'materials')
  const materialsSnapshot = await getDocs(materialsCol)
  const materialsList = materialsSnapshot.docs.map(doc => doc.data())
  // console.log(materialsList)
  return materialsList
}
