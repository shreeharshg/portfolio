import { useSpring } from '@react-spring/web'
import { useScroll } from 'framer-motion'
import { useEffect } from 'react'

export const useParallax = (speed: number = 0.5) => {
  const { scrollY } = useScroll()
  
  const [style, api] = useSpring(() => ({
    transform: 'translate3d(0px, 0px, 0px)'
  }))

  useEffect(() => {
    return scrollY.onChange(latest => {
      api.start({
        transform: `translate3d(0px, ${latest * speed}px, 0px)`
      })
    })
  }, [scrollY, api, speed])

  return style
}
