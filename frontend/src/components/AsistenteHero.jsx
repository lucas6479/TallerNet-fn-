import { RobotAvatar } from 'react-live-avatar'
import 'react-live-avatar/style.css'

function AsistenteHero() {
  return (
    <RobotAvatar
      size={120}
      position="static"
      trackCursor
      autoExpression
      lang="en"
    />
  )
}

export default AsistenteHero
