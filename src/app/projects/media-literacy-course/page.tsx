import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Award, Users, Repeat, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const keyAchievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "6",
    label: "Successful Courses",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "300+",
    label: "Graduates",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    value: "1,000+",
    label: "Applications Received",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    value: "35+",
    label: "Media Experts Engaged",
  },
];

const courseContent = [
    "Detect and Counter Disinformation: Master practical techniques for identifying and combating fake news.",
    "Protect Digital Identity: Enhance skills in personal data protection and digital hygiene.",
    "Analyze New Technologies: Understand the influence of Artificial Intelligence on media.",
    "Resist Manipulation: Explore the psychology of information perception and protect against manipulative tactics.",
    "Navigate Media Ethics and understand future trends shaping the industry.",
]

export default function MediaLiteracyCoursePage() {
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
                Media Literacy Course Series
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="secondary">Media Literacy</Badge>
                <Badge variant="secondary">Digital Safety</Badge>
                <Badge variant="secondary">Critical Thinking</Badge>
              </div>
              <Image
                src="/photos/media-literacy.png"
                width={1200}
                height={600}
                alt="Media Literacy Course"
                data-ai-hint="media literacy"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <div className="prose max-w-none text-foreground/80 space-y-4">
                <p>
                  In an era of information overload, this program equips individuals with essential skills for critical and safe navigation of the digital world. The course is designed to be highly adaptive, with a new curriculum developed for each cycle to confront the latest trends and threats in media.
                </p>
                <Card className="bg-secondary">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl text-accent"><Repeat className="h-6 w-6" /> Dynamic Curriculum</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>The 8-session online program provides a comprehensive deep-dive into key aspects of modern media literacy.</p>
                        <ul className="mt-4 space-y-2">
                            {courseContent.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Format: Classes are held twice a week on Zoom (weekday evenings and weekends), offering a flexible format for working professionals and students.
                        </p>
                    </CardContent>
                </Card>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
