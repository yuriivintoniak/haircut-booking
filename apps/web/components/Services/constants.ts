export type Service = {
  title: string;
  price: string;
  duration: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Classic Haircut",
    price: "$40",
    duration: "45 min",
    description: "Precision cut with consultation, shampoo, and styling. Tailored to your look.",
  },
  {
    title: "Beard Trim & Shape",
    price: "$35",
    duration: "30 min",
    description: "Expert trimming, hot towel treatment, and beard oil finish for a clean shape.",
  },
  {
    title: "The Full Package",
    price: "$75",
    duration: "75 min",
    description: "Haircut, beard trim, hot towel shave, and facial treatment. The complete experience.",
  },
  {
    title: "Hair Styling",
    price: "$50",
    duration: "40 min",
    description: "Blow-dry and style with premium products. Perfect for events or a fresh new look.",
  },
  {
    title: "Hot Towel Shave",
    price: "$30",
    duration: "30 min",
    description: "Traditional straight razor shave with hot towel prep and aftershave balm.",
  },
  {
    title: "Facial Treatment",
    price: "$45",
    duration: "35 min",
    description: "Deep cleansing facial with exfoliation, mask, and moisturizer. Rejuvenate your skin.",
  },
];
