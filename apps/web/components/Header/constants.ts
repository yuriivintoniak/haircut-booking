type NavItem = {
  label: string;
  href: string;
};

type HeaderAction = {
  label: string;
  href: string;
  variant: "primary-accent" | "accent";
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
    label: "Log in",
    href: "/auth/login",
    variant: "primary-accent"
  },
  {
    label: "Book",
    href: "/booking",
    variant: "accent"
  }
];
