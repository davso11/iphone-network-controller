import { createContext, useContext, useEffect, useState } from 'react'

const FrameContext = createContext()

const useFrame = () => {
  return useContext(FrameContext)
}

const FrameProvider = ({ children }) => {
  const [isAP, setIsAP] = useState(false)
  const [isCellular, setIsCellular] = useState(false)
  const [wasCellular, setWasCellular] = useState(false)
  const [isWifi, setIsWifi] = useState(false)
  const [isBT, setIsBT] = useState(false)

  useEffect(() => {
    if (isAP) {
      setIsCellular(false)
      setIsWifi(false)
      setIsBT(false)
    } else {
      setIsWifi(true)
      setIsBT(true)
      if (wasCellular) {
        setIsCellular(true)
      }
    }
  }, [isAP])

  const handleClickAP = () => {
    setIsAP(!isAP)
  }

  const handleClickCellular = () => {
    if (isAP) {
      return setIsCellular(false)
    }
    setIsCellular(!isCellular)
    setWasCellular(!wasCellular)
  }

  const handleClickWifi = () => {
    setIsWifi(!isWifi)
  }

  const handleClickBT = () => {
    setIsBT(!isBT)
  }

  const toShare = {
    isAP,
    isCellular,
    isWifi,
    isBT,
    onAP: handleClickAP,
    onCellular: handleClickCellular,
    onWifi: handleClickWifi,
    onBT: handleClickBT,
  }

  return (
    <FrameContext.Provider value={toShare}>{children}</FrameContext.Provider>
  )
}

export { FrameProvider, useFrame }
