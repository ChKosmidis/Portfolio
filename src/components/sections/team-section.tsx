'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { useEffect } from "react";

const teamMembers: {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  initials: string;
}[] = [
  {
    name: "Anna Semenova",
    role: "Project Curator",
    bio: "More than 20 years experience in education and civic engagement.",
    initials: "AS",
  },
  {
    name: "Chris Kosmidis",
    role: "Project Manager",
    bio: "MA in Comparative History, CEU, expertise in modern educational design, history of human rights and IT for NGOs.",
    initials: "CK",
  },
  {
    name: "Ruslan Dzhan",
    role: "Project Manager",
    bio: "Expertise in PR and GR for NGOs, crisis management and resilience expert.",
    initials: "RD",
  },
];

export default function TeamSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
      const { gsap, ScrollTrigger } = window as any;
      
      // Animate section title
      gsap.fromTo('.team-title', 
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
            trigger: '.team-title',
            start: 'top 80%',
          }
        }
      );

      // Animate team cards
      gsap.fromTo('.team-card', 
        { 
          opacity: 0, 
          y: 60,
          rotationY: 15
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 70%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="team" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 team-title">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our work is driven by a passionate team of experts dedicated to advancing civil and human rights education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 team-grid">
          {teamMembers.map((member) => (
            <Card key={member.name} className="team-card flex flex-col sm:flex-row items-center p-4 gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Avatar className="h-24 w-24">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardHeader className="p-0">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
