import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookUser, GraduationCap, Globe, Clock, Mic, Users, Wrench, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const impactMetrics = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "1400+",
    label: "Graduates since 2020",
  },
  {
    icon: <BookUser className="h-8 w-8 text-primary" />,
    value: "5600+",
    label: "Applications in 4 years",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: "320+",
    label: "Hours of learning",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    value: "85",
    label: "Countries & Regions",
  },
];

const programDetails = [
  {
    title: "Lectures",
    icon: <Mic className="h-6 w-6 text-primary" />,
    items: [
        "Mechanisms for Human Rights Protection with Natalia Kravchuk",
        "The Life and Legacy of Elena Bonner with Natalia Samover",
        "Foundations of International Humanitarian Law & the Work of HRW with Tanya Lokshina",
        "Transitional Justice with Ekaterina Schulmann",
        "'Lighthouse' Charity: How to Organize Grassroots Aid with Lida Moniava",
        "Performance as Activism: A Pussy Riot Case Study with Maria Alyokhina",
    ]
  },
  {
    title: "Seminars & Debates",
    icon: <Users className="h-6 w-6 text-primary" />,
    items: [
        "Navigating Laws on 'Undesirable,' 'Extremist,' and 'Foreign Agent' Organizations with OVD-Info",
        "How to Document War Crimes with Alexander Cherkasov",
        "Courtroom Conduct: Insights from a Forensic Photojournalist with Alexandra Astakhova",
        "NGO Management: Community Building, Internal Communications, and Infrastructure with Ruslan and Khristofor",
        "Debate: Should History Be Managed? with Dmitry Dubrovsky",
    ]
  },
  {
    title: "Workshops (Labs)",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    items: [
        "Digital Security: A two-part, hands-on workshop led by Teplitsa of Social Technologies.",
        "NGO Resilience: Sustaining Your Organization in Crisis Situations: A two-part workshop with Olga Sadovskaya.",
        "Gender-Based Violence as a Human Rights Issue: A two-part workshop on international and Russian practices with Mari Davtyan.",
    ]
  }
]

export default function ElenaBonnerSchoolPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Link href="/#projects">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                Elena Bonner School of Human Rights
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="secondary">Civic Education</Badge>
                <Badge variant="secondary">Technology</Badge>
                <Badge variant="secondary">Youth</Badge>
              </div>
              <Image
                src="/photos/elena-bonner-school.png"
                width={1200}
                height={600}
                alt="Elena Bonner School of Human Rights"
                data-ai-hint="education technology"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <div className="prose max-w-none text-foreground/80 space-y-4">
                <p>
                  The Elena Bonner School of Human Rights was originally established by the Sakharov Center. After its liquidation by Russian authorities the School became an independent project. Our intensive online program on the theory and practice of human rights is aimed at those who live in Russia and abroad. We provide a space to connect with like-minded people and take the first steps toward human rights advocacy.
                </p>
                <p>
                  The program is completely free. Fill out an application form and wait for our feedback. Applications are accepted twice a year. The School runs for three months, offering lectures, seminars, and hands-on workshops.
                </p>
                <p>
                  No prior in-depth knowledge of human rights is required to join. The program is designed to be accessible to a wide audience. We welcome everyone interested in learning more about human rights and contributing to their protection!
                </p>
              </div>

               <div className="py-12">
                <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Our Numbers
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              </div>
              
              <div className="py-12">
                 <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Program Overview
                </h2>
                <p className="mb-8 text-center text-foreground/80">
                  A curated program featuring lectures, seminars, and practical workshops led by leading experts in human rights, law, and civil society.
                </p>
                 <Accordion type="multiple" className="w-full">
                    {programDetails.map((category) => (
                      <AccordionItem key={category.title} value={category.title}>
                        <AccordionTrigger className="font-headline text-xl text-accent hover:no-underline">
                           <div className="flex items-center gap-4">
                            {category.icon}
                            {category.title}
                           </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <ul className="space-y-3 pl-6 pt-2">
                            {category.items.map((item) =>(
                               <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="text-foreground/80">{item}</span>
                               </li>
                            ))}
                           </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
