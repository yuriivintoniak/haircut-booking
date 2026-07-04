export type Service = {
  name: string;
  duration: number;
  price: number;
};

export const services: Service[] = [
  { name: "Classic Haircut", duration: 45, price: 40 },
  { name: "Beard Trim & Shape", duration: 30, price: 35 },
  { name: "The Full Package", duration: 75, price: 75 },
  { name: "Hair Styling", duration: 40, price: 50 },
  { name: "Hot Towel Shave", duration: 30, price: 30 },
  { name: "Facial Treatment", duration: 35, price: 45 },
];

export type Barber = {
  id: number;
  name: string;
  role: string;
  years: string;
};

export const barbers: Barber[] = [
  { id: 1, name: "Marcus Johnson", role: "Master Barber", years: "7 years" },
  { id: 2, name: "Alex Rodriguez", role: "Stylist", years: "8 years" },
  { id: 3, name: "David Kim", role: "Master Barber", years: "4 years" },
  { id: 4, name: "Alex Romero", role: "Senior Barber", years: "7 years" },
  { id: 5, name: "Mia Chen", role: "Stylist", years: "5 years" },
  { id: 6, name: "Jordan Blake", role: "Senior Barber", years: "10 years" },
];

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
];

export const steps = [
  { step: 1, title: "Service" },
  { step: 2, title: "Barber" },
  { step: 3, title: "Date & Time" },
];
