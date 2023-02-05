function OButton({ children, isActive, onClick }) {
  const btnBG = isActive ? 'bg-[#f77f00]' : 'bg-gray-300/30'

  return (
    <button
      className={`btn--frame ${btnBG}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { OButton }
