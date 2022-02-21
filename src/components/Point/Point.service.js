import {db} from '../../services/index'
import { collection, getDocs } from 'firebase/firestore/lite'

export const getPoints = async () => {
    const pointsCol = collection(db, 'points')
    const pointSnapshot = await getDocs(pointsCol)
    const pointList = pointSnapshot.docs.map(doc => doc.data())
    // console.log(pointList)
    return pointList
}