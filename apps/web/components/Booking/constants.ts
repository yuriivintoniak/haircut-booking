export type Service = {
  name: string
  duration: number
  price: number
}

export const services: Service[] = [
  { name: "Classic Haircut", duration: 45, price: 40 },
  { name: "Beard Trim & Shape", duration: 30, price: 35 },
  { name: "The Full Package", duration: 75, price: 75 },
  { name: "Hair Styling", duration: 40, price: 50 },
  { name: "Hot Towel Shave", duration: 30, price: 30 },
  { name: "Facial Treatment", duration: 35, price: 45 },
]

export const stylists = ["No preference", "Alex Romero", "Mia Chen", "Jordan Blake"]

export const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
]

export const steps = [
  { step: 1, title: "Choose a service" },
  { step: 2, title: "Pick your stylist" },
  { step: 3, title: "Select date & time" },
]

// Shared palette
export const ORANGE = "#FE9A00"
export const GRAY = "#9F9F9F"
export const ROSE = "#C08081"
export const PANEL = "#1c1c1c"
export const PANEL_ALT = "#1f1f1f"
export const BORDER = "#2a2a2a"
export const TEXT = "#e5e5e5"
export const DARK = "#171717"
