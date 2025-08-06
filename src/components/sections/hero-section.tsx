'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated-logo";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const { gsap } = window as any;
      
      // Set initial states
      gsap.set('.hero-title', { opacity: 0, y: 80 });
      gsap.set('.hero-description', { opacity: 0, y: 60 });
      gsap.set('.hero-buttons', { opacity: 0, y: 40 });
      
      // Create timeline
      const tl = gsap.timeline({ delay: 1.5 });
      
      tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3');
    }
  }, []);

  return (
    <section className="w-full h-screen bg-secondary flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center h-full">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="hero-title font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Empowering Change Through Education
              </h1>
              <p className="hero-description max-w-[600px] text-foreground/80 md:text-xl">
                We are dedicated to fostering a more just and equitable world by creating and distributing educational resources on civil and human rights.
              </p>
            </div>
            <div className="hero-buttons flex w-full flex-col gap-2 min-[400px]:flex-row lg:justify-start justify-center">
              <Button asChild size="lg">
                <Link href="#projects">Explore Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#documents">View Grant Info</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:order-last h-full">
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
