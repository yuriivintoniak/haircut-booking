import type { StaticImageData } from "next/image";

import g1 from "../../public/large-vecteezy_ai-generated-barber-trimming-a-client-s-hair-with-electric_35454570_large.jpg";
import g2 from "../../public/large-vecteezy_trendy-hairdressing-tools-on-a-wooden-table-in-a-stylish-and_44598445_large.jpg";
import g3 from "../../public/large-vecteezy_ai-generated-minimalist-vivid-advertisment-background-with_38805336_large.jpg";
import g4 from "../../public/large-vecteezy_ai-generated-barber-s-face-as-he-applies-shaving-cream-to-a_35677310_large.jpg";
import g5 from "../../public/large-vecteezy_vintage-barber-chair-in-traditional-style-interior-design_69634395_large.jpg";
import g6 from "../../public/large-vecteezy_ai-generated-young-handsome-barber-gives-a-haircut-to-a_38809058_large.jpg";

type GalleryItem = {
  src: StaticImageData;
  alt: string;
  title: string;
  span: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: g1,
    alt: "Barber trimming hair",
    title: "Haircut in progress",
    span: "lg:col-span-3",
  },
  {
    src: g2,
    alt: "Barber tools",
    title: "Tools setup",
    span: "lg:col-span-5",
  },
  {
    src: g3,
    alt: "Stylish haircut and beard",
    title: "Modern look",
    span: "lg:col-span-4",
  },
  {
    src: g4,
    alt: "Shaving cream application",
    title: "Shave prep",
    span: "lg:col-span-5",
  },
  {
    src: g5,
    alt: "Vintage barber chair",
    title: "Barber chair",
    span: "lg:col-span-4",
  },
  {
    src: g6,
    alt: "Finished stylish haircut",
    title: "Fresh cut",
    span: "lg:col-span-3",
  },
];
