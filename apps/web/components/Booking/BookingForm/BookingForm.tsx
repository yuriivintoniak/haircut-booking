import { StepIndicator } from "./StepIndicator";
import { StepService } from "./StepService";
import { StepBarber } from "./StepBarber";
import { StepDateTime } from "./StepDateTime";
import { NavigationButtons } from "./NavigationButtons";
import { steps, type Service, Barber } from "../constants";

type BookingFormProps = {
  currentStep: number;
  selectedService: Service | null;
  selectedBarber: Barber | null;
  selectedDate: string | null;
  selectedTime: string | null;
  onServiceSelect: (service: Service) => void;
  onBarberSelect: (barber: Barber) => void;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onBack: () => void;
  onNext: () => void;
};

export function BookingForm({
  currentStep,
  selectedService,
  selectedBarber,
  selectedDate,
  selectedTime,
  onServiceSelect,
  onBarberSelect,
  onDateChange,
  onTimeChange,
  onBack,
  onNext,
}: BookingFormProps) {
  return (
    <div className="h-full min-h-[44.375rem] flex flex-col rounded-sm border border-muted-foreground/30 p-6 md:p-8">
      <StepIndicator currentStep={currentStep} />

      <div className="flex-1">
        {currentStep === 1 && (
          <StepService
            selectedService={selectedService}
            onSelect={onServiceSelect}
          />
        )}
        {currentStep === 2 && (
          <StepBarber
            selectedBarber={selectedBarber}
            onSelect={onBarberSelect}
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
