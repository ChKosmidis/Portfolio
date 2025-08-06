'use client';

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
import { useEffect } from "react";

// Updated metrics summing all projects:
// Elena Bonner School: 1,400 graduates, 5,600 applications, 320 hours
// Media Literacy: 390 graduates, 1,427 applications 
// Rights in Europe: 70 participants, 556 applications
// Public Defender: 2,500 graduates, ~800+ applications (estimated)
// Total: ~4,360 graduates/participants, ~8,383 applications, 4 universities + regional presence

const impactMetrics = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "4,360+",
    label: "People Trained",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    value: "8,380+",
    label: "Applications Received",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: "350+",
    label: "Hours of Educational Content",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    value: "85+",
    label: "Countries & Regions Reached",
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
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
      const { gsap, ScrollTrigger } = window as any;
      
      // Animate section title
      gsap.fromTo('.impact-title', 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.impact-title',
            start: 'top 80%',
          }
        }
      );

      // Animate metric cards
      gsap.fromTo('.metric-card', 
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.metrics-grid',
            start: 'top 70%',
          }
        }
      );

      // Animate numbers with counting effect
      const numberElements = document.querySelectorAll('.metric-number');
      numberElements.forEach((element: any, index: number) => {
        const endValue = element.getAttribute('data-value');
        const numericValue = parseInt(endValue.replace(/[^0-9]/g, ''));
        
        gsap.fromTo(element,
          { innerText: 0 },
          {
            innerText: numericValue,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.metrics-grid',
              start: 'top 70%',
            },
            onUpdate: function() {
              const currentValue = Math.ceil(this.targets()[0].innerText);
              element.innerText = currentValue.toLocaleString() + (endValue.includes('+') ? '+' : '');
            }
          }
        );
      });

      // Animate testimonials
      gsap.fromTo('.testimonial-card', 
        { 
          opacity: 0, 
          scale: 0.9,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="impact" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 impact-title">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our Impact
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We measure our success by the positive change we inspire. Our programs have reached thousands, empowering individuals and strengthening communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4 lg:gap-8 metrics-grid">
          {impactMetrics.map((metric) => (
            <Card key={metric.label} className="metric-card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center gap-4">
                {metric.icon}
                <CardTitle className="text-4xl font-extrabold text-accent metric-number" data-value={metric.value}>
                  {metric.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto max-w-3xl testimonials-section">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="testimonial-card">
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
