function Frame({ children }) {
  return (
    <div className="fixed--center grid w-fit grid-cols-2 gap-3.5 rounded-[20px] bg-black/60 p-3 backdrop-blur">
      {children}
    </div>
  )
}

export { Frame }
