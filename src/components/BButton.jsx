function BButton({ children, isActive, onClick }) {
  const btnBG = isActive ? 'bg-blue-500' : 'bg-gray-300/30'

  return (
    <button
      className={`btn--frame ${btnBG}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { BButton }
