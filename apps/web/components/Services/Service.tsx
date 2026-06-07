import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@repo/ui/components/card";
import type { Service } from "./constants";
import { ArrowRight, Clock } from "lucide-react";

export function Service({ service }: { service: Service }) {
  return (
    <Card className="group gap-8 hover:border-accent hover:shadow-lg">
      <CardHeader className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-3xl font-bebas mb-1 uppercase tracking-wide leading-none">
            {service.title}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>
        </div>
        <div className="text-accent text-4xl font-bebas">
          {service.price}
        </div>
      </CardHeader>
      <CardContent className="text-muted-foreground leading-relaxed">
        {service.description}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="text-rose uppercase transition-colors hover:text-chart-5">
          Book Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
