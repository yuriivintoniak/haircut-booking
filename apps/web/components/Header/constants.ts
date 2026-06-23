type NavItem = {
  label: string;
  href: string;
};

type HeaderAction = {
  label: string;
  href: string;
  variant: "accent" | "primary-accent";
};

export const headerNavigation: NavItem[] = [
  {
    label: "Services",
    href: "#services"
  },
  {
    label: "Gallery",
    href: "#gallery"
  },
  {
    label: "Testimonials",
    href: "#testimonials"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

export const headerActions: HeaderAction[] = [
  {
    label: "Book",
    href: "/booking",
    variant: "accent"
  },
  {
    label: "Sign in",
    href: "/sign-in",
    variant: "primary-accent"
  }
];
