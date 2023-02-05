import { Frame } from './components/Frame'
import { GButton } from './components/GButton'
import { BButton } from './components/BButton'
import { OButton } from './components/OButton'
import { useFrame } from './context/FrameContext'
import { IconContext } from 'react-icons'

// icons
import {
  IoAirplane as AirPlane,
  IoCellular as Cellular,
  IoBluetoothOutline as BT,
  IoWifiOutline as Wifi,
} from 'react-icons/io5'

const iconSetup = {
  color: 'white',
  size: '1.5em',
}

function App() {
  const { isAP, isCellular, isWifi, isBT, onAP, onCellular, onWifi, onBT } =
    useFrame()

  return (
    <Frame>
      <IconContext.Provider value={iconSetup}>
        <OButton
          onClick={onAP}
          isActive={isAP}
        >
          <AirPlane />
        </OButton>
        <GButton
          onClick={onCellular}
          isActive={isCellular}
        >
          <Cellular color={isAP ? '#F0F0F060' : 'white'} />
        </GButton>
        <BButton
          onClick={onWifi}
          isActive={isWifi}
        >
          <Wifi />
        </BButton>
        <BButton
          onClick={onBT}
          isActive={isBT}
        >
          <BT />
        </BButton>
      </IconContext.Provider>
    </Frame>
  )
}

export { App }
