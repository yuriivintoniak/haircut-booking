import { Barber, barbers } from "../constants";

type StepBarberProps = {
  selectedBarber: Barber | null;
  onSelect: (barber: Barber) => void;
};

export function StepBarber({ selectedBarber, onSelect }: StepBarberProps) {
  return (
    <div>
      <h4 className="font-display text-chart-5 text-3xl mb-6 uppercase tracking-tight">
        Choose Your Barber
      </h4>
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-6">
        {barbers.map((b) => {
          const isSelected = selectedBarber?.id === b.id;

          return (
            <button
              key={b.id}
              onClick={() => onSelect(b)}
              className={`p-5 text-center cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? "border-chart-5 bg-chart-5/10"
                  : "border-muted-foreground/30 bg-transparent"
              }`}
            >
              <div
                className={`font-display text-xl uppercase tracking-tight ${
                  isSelected ? "text-chart-5" : "text-primary-foreground/60"
                }`}
              >
                {b.name}
              </div>

              <div className="text-[#9F9F9F] text-xs mt-1 uppercase tracking-widest">
                {b.role}
              </div>

              <div className="text-primary-accent text-xs mt-2">
                {b.years} experience
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
