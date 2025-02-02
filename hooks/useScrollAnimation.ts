import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, controls, variants: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  }}
}