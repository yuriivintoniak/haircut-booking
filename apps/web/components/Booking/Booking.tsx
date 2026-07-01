"use client";

import { useState } from "react";
import { BookingForm } from "./BookingForm/BookingForm";
import { BookingSummary } from "./BookingSummary/BookingSummary";
import { services, stylists, steps, type Service, ORANGE, GRAY, ROSE, Barber } from "./constants";

export function Booking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length))
  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1))

  const canConfirm = Boolean(selectedDate && selectedTime)

  return (
    <section id="booking" className="py-20 px-4 md:px-8 bg-primary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex flex-col items-start gap-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="h-[3px] w-8 sm:w-12 bg-chart-5" />
            <h2 className="font-display text-chart-5 text-5xl sm:text-7xl uppercase tracking-tight">
              Schedule Visit
            </h2>
          </div>
          <p className="text-primary-foreground/60 sm:text-lg">
            Please select your service, barber and time below.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-8">
            <BookingForm
              currentStep={currentStep}
              selectedService={selectedService}
              selectedBarber={selectedBarber}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onServiceSelect={setSelectedService}
              onBarberSelect={setSelectedBarber}
              onDateChange={setSelectedDate}
              onTimeChange={setSelectedTime}
              onBack={handleBack}
              onNext={handleNext}
            />
          </div>

          <div className="lg:col-span-4">
            <BookingSummary
              selectedService={selectedService}
              selectedBarber={selectedBarber}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              canConfirm={canConfirm}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
