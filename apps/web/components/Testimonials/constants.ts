export type Testimonial = {
  name: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ryan Mitchell",
    rating: 5,
    text: "Consistently high-quality cuts and beard trims. Easily the best barbershop in town.",
  },
  {
    name: "Ethan Parker",
    rating: 4,
    text: "Friendly staff, clean space, and exceptional results every time.",
  },
  {
    name: "Daniel Brooks",
    rating: 5,
    text: "Great team, excellent skills, and a welcoming environment. Highly recommended.",
  },
  {
    name: "James Wilson",
    rating: 4,
    text: "Best haircut I've had in years. The attention to detail and atmosphere are outstanding.",
  },
  {
    name: "Michael Carter",
    rating: 5,
    text: "Professional service from start to finish. I always leave looking sharp and feeling confident.",
  },
];
