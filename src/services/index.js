import config from '../../firebase/config'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const app = initializeApp(config)
const db = getFirestore(app)

export const getPoints = async () => {
  const pointsCol = collection(db, 'points')
  const pointSnapshot = await getDocs(pointsCol)
  const pointList = pointSnapshot.docs.map(doc => doc.data())
  // console.log(pointList)
  return pointList
}

export const getMaterials = async () => {
  const materialsCol = collection(db, 'materials')
  const materialsSnapshot = await getDocs(materialsCol)
  const materialsList = materialsSnapshot.docs.map(doc => doc.data())
  // console.log(materialsList)
  return materialsList
}
