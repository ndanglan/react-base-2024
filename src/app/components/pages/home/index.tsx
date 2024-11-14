import useBoundStore from '@/app/store'
import React, { useEffect } from 'react'

type Props = {}

const Home = (props: Props) => {
  const fetchTodos = useBoundStore(state => state.fetchTodos);
  useEffect(() => {
    fetchTodos()
    return () => {

    }
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home
