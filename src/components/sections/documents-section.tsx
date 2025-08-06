'use client';

'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect } from "react";

const documents = [
  {
    title: "Full Grant Proposal",
    description: "Our comprehensive proposal outlining project goals, methodology, and budget.",
    file: "/documents/grant-proposal.pdf",
  },
  {
    title: "Annual Impact Report 2023",
    description: "A detailed report on our activities, achievements, and financial performance last year.",
    file: "/documents/annual-report-2023.pdf",
  },
  {
    title: "Budget Overview",
    description: "A summarized, one-page document of our proposed budget and funding allocation.",
    file: "/documents/budget-overview.pdf",
  },
];

export default function DocumentsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
      const { gsap, ScrollTrigger } = window as any;
      
      // Animate section title
      gsap.fromTo('.documents-title', 
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
            trigger: '.documents-title',
            start: 'top 80%',
          }
        }
      );

      // Animate document cards
      gsap.fromTo('.document-card', 
        { 
          opacity: 0, 
          x: -60,
          rotationY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.documents-grid',
            start: 'top 70%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="documents" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 documents-title">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Grant Documents
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access all the necessary documentation for your grant application review process.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2 documents-grid">
          {documents.map((doc) => (
            <Card key={doc.title} className="document-card flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 p-6">
                 <FileText className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                 <div>
                    <CardTitle className="hover:text-primary transition-colors">{doc.title}</CardTitle>
                    <CardDescription className="mt-1">{doc.description}</CardDescription>
                 </div>
              </div>
              <div className="p-6 pt-0">
                <Button asChild className="w-full sm:w-auto">
                    <a href={doc.file} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}