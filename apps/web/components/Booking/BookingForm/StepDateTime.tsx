import { Calendar, Clock } from "lucide-react"
import { timeSlots, GRAY, ROSE, PANEL_ALT, DARK, TEXT } from "../constants"

type Props = {
  selectedDate: string
  selectedTime: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
}

export function StepDateTime({ selectedDate, selectedTime, onDateChange, onTimeChange }: Props) {
  return (
    <>
      <div className="mb-5">
        <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: GRAY }}>
          <Calendar className="w-4 h-4" style={{ color: ROSE }} />
          Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-[#C08081] [color-scheme:dark]"
          style={{ backgroundColor: PANEL_ALT, borderColor: "#2e2e2e", color: TEXT }}
        />
      </div>
      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-3" style={{ color: GRAY }}>
          <Clock className="w-4 h-4" style={{ color: ROSE }} />
          Available times
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {timeSlots.map((time) => {
            const active = selectedTime === time
            return (
              <button
                key={time}
                type="button"
                onClick={() => onTimeChange(time)}
                className="rounded-lg border py-2 text-sm font-medium transition-all"
                style={
                  active
                    ? { backgroundColor: ROSE, borderColor: ROSE, color: DARK }
                    : { backgroundColor: PANEL_ALT, borderColor: "#2e2e2e", color: GRAY }
                }
              >
                {time}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
