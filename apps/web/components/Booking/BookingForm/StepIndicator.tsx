import { steps } from "../constants";

export function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-2 md:gap-6 mb-6">
      {steps.map((s, i) => {
        const active = currentStep === s.step;
        const done = currentStep > s.step;

        return (
          <div
            key={s.step}
            className="flex items-center gap-2 md:gap-6 flex-1"
          >
            <div className="flex items-center gap-3">
              <span
                className={`font-display text-2xl ${
                  active || done ? "text-chart-5" : "text-muted-foreground/60"
                }`}
              >
                {String(s.step).padStart(2, "0")}
              </span>

              <span
                className={`hidden md:inline text-xs uppercase tracking-widest ${
                  active ? "text-chart-5" : "text-primary-foreground/60"
                }`}
              >
                {s.title}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px ${
                  done ? "bg-chart-5" : "bg-muted-foreground/30"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
