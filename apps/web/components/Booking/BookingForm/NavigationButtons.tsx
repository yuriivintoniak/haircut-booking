import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonsProps = {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
};

export function NavigationButtons({
  currentStep,
  totalSteps,
  onBack,
  onNext,
}: NavigationButtonsProps) {
  const isFirst = currentStep === 1;
  const isLast = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between gap-3 mt-16">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirst}
        className="inline-flex items-center gap-2 text-primary-foreground/60 rounded-sm border border-primary-foreground/60 px-5 py-2.5 text-sm font-medium transition-opacity cursor-pointer disabled:cursor-default hover:opacity-90 disabled:opacity-30"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        className="inline-flex items-center gap-2 bg-chart-5 rounded-sm px-6 py-2.5 text-sm font-semibold transition-opacity cursor-pointer disabled:cursor-default hover:opacity-90 disabled:opacity-30"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
