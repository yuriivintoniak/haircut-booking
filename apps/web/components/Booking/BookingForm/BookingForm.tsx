import { StepIndicator } from "./StepIndicator";
import { StepService } from "./StepService";
import { StepBarber } from "./StepBarber";
import { StepDateTime } from "./StepDateTime";
import { NavigationButtons } from "./NavigationButtons";
import { steps, type Service, PANEL, BORDER } from "../constants";

type Props = {
  currentStep: number;
  // selectedService: Service;
  selectedService: Service | null;
  // selectedStylist: string;
  selectedStylist: string | null;
  selectedDate: string;
  selectedTime: string;
  onServiceSelect: (service: Service) => void;
  onStylistSelect: (stylist: string) => void;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onBack: () => void;
  onNext: () => void;
};

export function BookingForm({
  currentStep,
  selectedService,
  selectedStylist,
  selectedDate,
  selectedTime,
  onServiceSelect,
  onStylistSelect,
  onDateChange,
  onTimeChange,
  onBack,
  onNext,
}: Props) {
  const activeStep = steps.find((s) => s.step === currentStep);

  return (
    <div
      className="h-full flex flex-col rounded-2xl border p-6 md:p-8"
      style={{ backgroundColor: PANEL, borderColor: BORDER }}
    >
      <StepIndicator currentStep={currentStep} />

      <h3 className="text-lg font-semibold mb-5" style={{ color: "#e5e5e5" }}>
        {activeStep?.title}
      </h3>

      {/* Step content fills available space so column height stays consistent */}
      <div className="flex-1">
        {currentStep === 1 && (
          <StepService
            selectedService={selectedService}
            onSelect={onServiceSelect}
          />
        )}
        {currentStep === 2 && (
          <StepBarber
            selectedStylist={selectedStylist}
            onSelect={onStylistSelect}
          />
        )}
        {currentStep === 3 && (
          <StepDateTime
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={onDateChange}
            onTimeChange={onTimeChange}
          />
        )}
      </div>

      <NavigationButtons
        currentStep={currentStep}
        totalSteps={steps.length}
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  );
}
