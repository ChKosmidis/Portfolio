import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users, BookOpen, Handshake, Target, GraduationCap, FileText, Clock, Building } from "lucide-react";

const impactMetrics = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "1,800+",
    label: "People Trained",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    value: "7,800+",
    label: "Applications Received",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: "370+",
    label: "Hours of Educational Content",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    value: "10+",
    label: "University Partnerships",
  },
];

const testimonials = [
  {
    quote:
      "Thank you to the School team and all the lecturers! At this stage in my life, the course helped me move from stagnation to a desire to grow and enjoy learning again. It was a huge support and a driving force for me. It even helped me find new job opportunities, organize letter-writing to political prisoners, and not feel so alone in my struggles.",
    author: "Afi, Inernational Red Cross, Zurich, Switzerland",
  },
  {
    quote:
      "A huge thank you to the School for officially allowing me to dream! That one lecture on pre-trial detention centers — it might have seemed like just a lecture, but for me, it was transformative! The School is amazing; every class was fantastic. I truly felt like I was reborn as a better version of myself!",
    author: "Yulia, Activist, Istanbul, Turkey",
  },
  {
    quote:
      "The lectures on international law were the most memorable — the cases were so interesting. I also appreciated the variety of lecturers from leading human rights initiatives, especially Nasiliyu.Net (NGO that supports victims of domestic violence in Russia). I learned about many volunteer projects, including support groups for political prisoners, and the participants did an incredible job.",
    author: "Anastasia, Activist, Russia",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our Impact
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We measure our success by the positive change we inspire. Our programs have reached thousands, empowering individuals and strengthening communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4 lg:gap-8">
          {impactMetrics.map((metric) => (
            <Card key={metric.label} className="text-center">
              <CardHeader className="flex flex-col items-center gap-4">
                {metric.icon}
                <CardTitle className="text-4xl font-extrabold text-accent">
                  {metric.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto max-w-3xl">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <blockquote className="text-lg italic text-foreground">
                          "{testimonial.quote}"
                        </blockquote>
                        <cite className="mt-4 block font-semibold not-italic text-accent">
                          - {testimonial.author}
                        </cite>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
