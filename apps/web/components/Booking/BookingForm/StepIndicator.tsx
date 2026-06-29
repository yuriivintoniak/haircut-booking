import { Check } from "lucide-react"
import { steps, ROSE, GRAY, BORDER, PANEL, DARK, TEXT } from "../constants"

export function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {steps.map((s, i) => {
        const isActive = currentStep === s.step
        const isDone = currentStep > s.step
        return (
          <div key={s.step} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className="flex items-center gap-3">
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold shrink-0 transition-colors"
                style={
                  isActive || isDone
                    ? { backgroundColor: ROSE, color: DARK }
                    : { backgroundColor: PANEL, color: GRAY, border: `1px solid ${BORDER}` }
                }
              >
                {isDone ? <Check className="w-4 h-4" /> : s.step}
              </span>
              <span
                className="text-sm font-semibold hidden sm:block whitespace-nowrap"
                style={{ color: isActive || isDone ? TEXT : GRAY }}
              >
                {s.title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span
                className="hidden sm:block flex-1 h-px mx-2"
                style={{ backgroundColor: currentStep > s.step ? ROSE : BORDER }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
