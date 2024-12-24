
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { Models } from 'react-native-appwrite'

type fetchFunctionType = () => Promise<Models.Document[]>


export default function fetchData(fetchFunction: fetchFunctionType) {
  const [data, setData] = useState<Models.Document[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetchFunction()
        setData(response)
      } catch (error) {
        Alert.alert('Error', (error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, [])
  return { data, isLoading }
}