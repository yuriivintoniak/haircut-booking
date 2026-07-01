import { Check } from "lucide-react";
import { type Service, services } from "../constants";

type StepServiceProps = {
  selectedService: Service | null;
  onSelect: (service: Service) => void;
};

export function StepService({ selectedService, onSelect }: StepServiceProps) {
  return (
    <div>
      <h4 className="font-display text-chart-5 text-3xl mb-6 uppercase tracking-tight">
        Choose Your Service
      </h4>
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s) => {
          const isSelected = selectedService?.name === s.name;

          return (
            <button
              key={s.name}
              type="button"
              onClick={() => onSelect(s)}
              className={`text-left p-5 cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? "border-chart-5 bg-chart-5/10"
                  : "border-muted-foreground/30 bg-transparent"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`font-display text-xl uppercase tracking-tight ${
                    isSelected ? "text-chart-5" : "text-primary-foreground/60"
                  }`}
                >
                  {s.name}
                </span>
                {isSelected && <Check size={18} className="text-chart-5" />}
              </div>

              <div className="flex items-center justify-between text-primary-accent text-xs mt-3 uppercase tracking-widest">
                <span>{s.duration} min</span>
                <span className="text-chart-5">
                  ${s.price}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
