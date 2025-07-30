import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Building, BarChart, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  "Ghent University (Eureast Platform)",
  "The Irish Centre for Human Rights at the University of Galway",
  "University of Groningen",
  "Uppsala University",
];

const curriculumThemes = [
  "Authoritarianism's Impact: Critically engaging with how institutions and political systems affect human rights protection.",
  "Modern Societal Challenges: Exploring the intersection of human rights with digital transformation and environmental policy.",
  "The Language of Human Rights: Analyzing how human rights discourse is instrumentalized and manipulated.",
  "Human Rights in Conflict: Addressing the urgent topic of rights protection during armed conflicts, given the current global landscape.",
];

const objectives = [
  "Understand human rights within diverse legal, political, and social contexts.",
  "Critically analyze and deconstruct dominant narratives surrounding human rights.",
  "Develop effective, evidence-based advocacy strategies.",
  "Conduct high-level, interdisciplinary human rights research.",
];

const keyNumbers = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        value: "450+",
        label: "Applications",
    },
    {
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        value: "40",
        label: "Students",
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        value: "11",
        label: "Classes & Workshops",
    },
];

export default function RightsInEuropePage() {
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
                Online School on Human Rights - Rights in Europe
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="secondary">Human Rights</Badge>
                <Badge variant="secondary">Academia</Badge>
                <Badge variant="secondary">International Collaboration</Badge>
              </div>
              <Image
                src="/Portfolio/photos/rights-in-europe.png"
                width={1200}
                height={600}
                alt="Rights in Europe"
                data-ai-hint="university campus europe"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <div className="prose max-w-none text-foreground/80 space-y-4">
                <p>
                  A major international collaboration between the Elena Bonner School of Human Rights and the prestigious ENLIGHT+ European university consortium. This second edition of the school, "Rights in Europe: The Risks and Impact of Authoritarianism," convenes leading academic institutions to address the erosion of fundamental rights in different political contexts.
                </p>
              </div>

               <div className="py-12">
                <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  By the Numbers
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {keyNumbers.map((metric) => (
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
                  Our Partners
                </h2>
                <div className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  {partners.map((partner) => (
                    <div key={partner} className="flex flex-col items-center justify-center gap-2 text-center">
                        <Building className="h-10 w-10 text-accent" />
                        <p className="text-sm font-semibold text-muted-foreground">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-12">
                <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Curriculum & Focus
                </h2>
                <div className="space-y-4">
                    {curriculumThemes.map((theme) => (
                        <Card key={theme}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                <p className="text-foreground/80">{theme}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
              </div>
              
              <div className="py-12">
                <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Objectives & Outcomes
                </h2>
                <p className="mb-8 text-center text-foreground/80">
                    Offered free of charge to ensure broad access, the school is designed to equip participants with the skills to:
                </p>
                 <ul className="space-y-3">
                    {objectives.map((objective) =>(
                        <li key={objective} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{objective}</span>
                        </li>
                    ))}
                    </ul>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
