import { ChevronLeft, ChevronRight } from "lucide-react"
import { ORANGE, GRAY, BORDER, PANEL, DARK, TEXT } from "../constants"

type Props = {
  currentStep: number
  totalSteps: number
  onBack: () => void
  onNext: () => void
}

export function NavigationButtons({ currentStep, totalSteps, onBack, onNext }: Props) {
  const isFirst = currentStep === 1
  const isLast = currentStep === totalSteps

  return (
    <div className="flex items-center justify-between gap-3 mt-10 pt-6 border-t" style={{ borderColor: BORDER }}>
      <button
        type="button"
        onClick={onBack}
        disabled={isFirst}
        className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ backgroundColor: PANEL, borderColor: BORDER, color: TEXT }}
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {!isLast && (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: ORANGE, color: DARK }}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
