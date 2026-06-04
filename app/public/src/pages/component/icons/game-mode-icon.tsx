import { useTranslation } from "react-i18next"
import type { GameMode } from "../../../../../types/enum/Game"
import { cc } from "../../utils/jsx"

export function GameModeIcon(props: { gameMode: GameMode | undefined }) {
  const { t } = useTranslation()
  // Defensive default: historical game records may reach the client without a
  // gameMode (either due to legacy DB rows or future schema additions).
  // Rendering a broken profile page because of a missing optional field is
  // worse than picking a sane fallback.
  const gameMode = props.gameMode ?? GameMode.CUSTOM_LOBBY
  return (
    <img
      alt={t(`game_modes.${gameMode}`)}
      title={t(`game_modes.${gameMode}`)}
      className={cc(gameMode.toLowerCase(), "gamemode icon")}
      src={`/assets/ui/${gameMode.toLowerCase()}.png`}
      draggable="false"
    />
  )
}
