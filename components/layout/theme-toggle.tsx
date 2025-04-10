import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'

const ThemeToggle = () => {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode('dark')
  }, [setColorMode])

  return null
}

export default ThemeToggle
