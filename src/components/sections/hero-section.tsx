'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const { gsap } = window as any;
      
      // Set initial states
      gsap.set('.hero-title', { opacity: 0, y: 80 });
      gsap.set('.hero-description', { opacity: 0, y: 60 });
      gsap.set('.hero-buttons', { opacity: 0, y: 40 });
      
      // Logo animation setup
      gsap.set('.logo-word', {
        opacity: 0,
        y: 50,
        scale: 0.9
      });
      
      // Create timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      // First animate text content
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
      }, '-=0.3')
      // Then animate logo words after main content
      .to('.logo-word', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.3
      }, '-=0.2');
    }
  }, []);

  // НАСТРОЙКИ ПОЗИЦИЙ СЛОВ (легко редактировать)
  const logoConfig = {
    elena: {
      top: '32%',
      left: '17%',
      size: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
    },
    bonner: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      size: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
    },
    center: {
      bottom: '32%',
      right: '17%',
      size: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
    }
  };

  return (
    <section className="w-full min-h-screen lg:h-screen bg-secondary flex items-center py-8 lg:py-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center min-h-screen lg:h-full">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="hero-title font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl xl:text-6xl/none">
                Empowering Change Through Education
              </h1>
              <p className="hero-description max-w-[600px] text-foreground/80 text-lg md:text-xl mx-auto lg:mx-0">
                We are dedicated to fostering a more just and equitable world by creating and distributing educational resources on civil and human rights.
              </p>
            </div>
            <div className="hero-buttons flex w-full flex-col gap-3 sm:flex-row lg:justify-start justify-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#projects">Explore Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#documents">View Grant Info</Link>
              </Button>
            </div>
          </div>
          
          {/* LOGO SECTION - легко редактируемые позиции */}
          <div className="flex items-center justify-center order-1 lg:order-2 h-[50vh] lg:h-full min-h-[300px] lg:min-h-[500px] relative">
            <div className="relative w-full h-full">
              
              {/* Elena */}
              <div 
                className="logo-word absolute" 
                style={{
                  top: logoConfig.elena.top,
                  left: logoConfig.elena.left
                }}
              >
                <div className={`${logoConfig.elena.size} font-bold text-primary font-sans tracking-tight`}>
                  Elena
                </div>
              </div>

              {/* Bonner */}
              <div 
                className="logo-word absolute" 
                style={{
                  top: logoConfig.bonner.top,
                  left: logoConfig.bonner.left,
                  transform: logoConfig.bonner.transform
                }}
              >
                <div className={`${logoConfig.bonner.size} font-bold text-primary font-sans tracking-tight`}>
                  Bonner
                </div>
              </div>

              {/* Center */}
              <div 
                className="logo-word absolute" 
                style={{
                  bottom: logoConfig.center.bottom,
                  right: logoConfig.center.right
                }}
              >
                <div className={`${logoConfig.center.size} font-bold text-primary font-sans tracking-tight`}>
                  Center
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
