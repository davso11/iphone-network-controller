import { useFrame } from '../context/FrameContext'

function GButton({ children, isActive, onClick }) {
  const { isAP } = useFrame()

  const btnBG = isActive ? 'bg-green-500' : 'bg-gray-300/30'

  return (
    <button
      className={`btn--frame ${btnBG}`}
      onClick={onClick}
      disabled={isAP}
    >
      {children}
    </button>
  )
}

export { GButton }
