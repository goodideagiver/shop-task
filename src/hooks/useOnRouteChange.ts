import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useOnRouteChange = (callback: () => void) => {
  const { events } = useRouter()

  useEffect(() => {
    events.on('routeChangeComplete', callback)

    return () => {
      events.off('routeChangeComplete', callback)
    }
  }, [callback, events])
}
