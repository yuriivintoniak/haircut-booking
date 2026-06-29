import { Scissors, Check, ChevronRight } from "lucide-react"
import { type Service, ORANGE, GRAY, ROSE, PANEL, BORDER, DARK, TEXT } from "../constants"

type Props = {
  // selectedService: Service
  selectedService: Service | null
  // selectedStylist: string
  selectedStylist: string | null
  selectedDate: string
  selectedTime: string
  canConfirm: boolean
}

export function BookingSummary({
  selectedService,
  selectedStylist,
  selectedDate,
  selectedTime,
  canConfirm,
}: Props) {
  const rows = [
    { label: "Service", value: selectedService?.name ?? "—" },
    { label: "Stylist", value: selectedStylist ?? "—" },
    { label: "Date", value: selectedDate || "—" },
    { label: "Time", value: selectedTime || "—" },
    { label: "Duration", value: `${selectedService?.duration ?? 0} min` },
  ]

  return (
    <div
      className="h-full flex flex-col rounded-2xl border p-6 md:p-8"
      style={{ backgroundColor: PANEL, borderColor: BORDER }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Scissors className="w-5 h-5" style={{ color: ROSE }} />
        <h3 className="text-xl font-semibold" style={{ color: ORANGE }}>
          Your Booking
        </h3>
      </div>

      <ul className="flex flex-col divide-y" style={{ borderColor: BORDER }}>
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between py-3">
            <span className="text-sm" style={{ color: GRAY }}>
              {row.label}
            </span>
            <span className="text-sm font-medium" style={{ color: TEXT }}>
              {row.value}
            </span>
          </li>
        ))}
      </ul>

      {/* Spacer pushes total + button to the bottom to match form height */}
      <div className="flex-1" />

      <div className="flex items-center justify-between mt-4 pt-4 border-t" style={{ borderColor: BORDER }}>
        <span className="text-base font-semibold" style={{ color: TEXT }}>
          Total
        </span>
        <span className="text-2xl font-bold" style={{ color: ORANGE }}>
          ${selectedService?.price ?? 0}
        </span>
      </div>

      <button
        type="button"
        disabled={!canConfirm}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 mt-6 font-semibold transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ backgroundColor: ORANGE, color: DARK }}
      >
        <Check className="w-5 h-5" />
        Confirm Booking
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs mt-4" style={{ color: GRAY }}>
        <ChevronRight className="w-3 h-3" />
        Free cancellation up to 24 hours before
      </p>
    </div>
  )
}
