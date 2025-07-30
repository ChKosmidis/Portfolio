import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Shield, Users, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const keyAchievements = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "120+",
    label: "Activists Trained",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "800+",
    label: "Applications Received",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    value: "15+",
    label: "Expert Defense Lawyers",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    value: "50+",
    label: "Hours of Study",
  },
];

const curriculumOverview = [
    "Navigating Russian Law: A deep dive into the specifics of the Criminal and Administrative Codes most often used to target activists.",
    "Mastering Legal Procedure: Practical, step-by-step guidance on procedural law, covering everything from detention and interrogation to courtroom conduct and appeals.",
    "Understanding the Opposition: An in-depth analysis of the structure, tactics, and vulnerabilities of prosecution and investigative institutions.",
]

export default function SchoolOfPublicDefenderPage() {
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
                School of Public Defender
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="secondary">Legal Education</Badge>
                <Badge variant="secondary">Activism</Badge>
                <Badge variant="secondary">Community Defense</Badge>
              </div>
              <Image
                src="/photos/public-defender.png"
                width={1200}
                height={600}
                alt="School of Public Defender"
                data-ai-hint="legal books courtroom"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <div className="prose max-w-none text-foreground/80 space-y-4">
                <Card className="bg-secondary">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-accent">Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                        In a climate of increasing legal pressure on civil society, the School of Public Defender was created to build resilience from within. This intensive two-week online program equips Russian activists with practical legal knowledge, empowering them to navigate politically motivated administrative and criminal charges. Our mission is to create a network of legally literate activists capable of providing initial support and defense for themselves and their comrades.
                        </p>
                    </CardContent>
                </Card>

                <p>
                    The curriculum is developed and taught by a core group of 15+ of Russia's most respected defense lawyers, all with firsthand experience defending clients in high-stakes, politically motivated cases. The program goes beyond theory to deliver actionable strategies for survival and defense.
                </p>
              </div>

               <div className="py-12">
                <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Key Achievements
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {keyAchievements.map((metric) => (
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
                  Curriculum Overview
                </h2>
                 <p className="mb-8 text-center text-foreground/80">
                  During the two-week intensive, participants undertake over 50 hours of study, focusing on:
                </p>
                <div className="grid gap-6 md:grid-cols-1">
                    {curriculumOverview.map((item, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                                    <p>{item}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
