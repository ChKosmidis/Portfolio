import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Shield, Users, BookOpen, GraduationCap, Calendar, Award, Scale, Gavel, FileText, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const overallImpact = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "2,500+",
    label: "Total Graduates",
    description: "Over 9 years"
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    value: "36",
    label: "Schools Held",
    description: "Since 2016"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "15+",
    label: "Expert Faculty",
    description: "Practicing lawyers"
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    value: "9",
    label: "Years Active",
    description: "Continuous growth"
  },
];

const coreTopics = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Public Defender Rights",
    description: "Understanding the legal status that grants rights to file motions, question witnesses, and access defendants"
  },
  {
    icon: <Gavel className="h-6 w-6" />,
    title: "Court Procedures",
    description: "Practical guidance on procedural law from detention and interrogation to courtroom conduct and appeals"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Russian Legal System",
    description: "Deep dive into Criminal and Administrative Codes most often used to target activists and citizens"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Law Enforcement Tactics",
    description: "Analysis of prosecution and investigative institutions' structure, tactics, and vulnerabilities"
  }
];

const facultyExperts = [
  { name: "Maria Eismont", role: "Defense attorney for 'New Greatness,' 'Bolotnoye' cases, Vladimir Kara-Murza, and Ukrainian POWs" },
  { name: "Mikhail Biryukov", role: "Defense attorney for politician Ilya Yashin and 'Golos' movement head Grigory Melkonyants" },
  { name: "Svetlana Sidorkina", role: "Defense attorney for mathematician and anarchist Azat Miftakhov" },
  { name: "Maxim Pashkov", role: "Lawyer defending those convicted in the 'New Greatness' case" },
  { name: "Olga Romanova", role: "Founder of human rights organization 'Russia Behind Bars'" },
  { name: "Denis Shedov & Elena Makarova", role: "Lawyers with Human Rights Center 'Memorial' and OVD-Info" },
  { name: "Galina Arapova", role: "Head of Mass Media Defence Center, expert on 'foreign agent' legislation" },
  { name: "Additional Faculty", role: "Vera Goncharova, Leonid and Alkhas Abgadzhava, Anastasia Samorukova, Leonid Solovyov" },
];

const march2025Program = [
  {
    date: "March 24",
    topics: [
      { title: "Introduction to public defense", lecturer: "Alla Frolova", role: "Legal Expert" },
      { title: "Searches, interrogations, and pre-trial restrictions", lecturer: "Svetlana Sidorkina", role: "Defense Attorney" },
    ]
  },
  {
    date: "March 25", 
    topics: [
      { title: "Preliminary investigation and trial court proceedings: rights of the defender", lecturer: "Anastasia Samorukova", role: "Human Rights Lawyer" },
      { title: "Witness questioning procedures", lecturer: "Mikhail Biryukov", role: "Defense Attorney" },
    ]
  },
  {
    date: "March 26",
    topics: [
      { title: "Court records, appeals, and cassation", lecturer: "Maxim Pashkov", role: "Legal Expert" },
      { title: "Forensic linguistic analysis in court", lecturer: "Elena Novozhilova", role: "Linguistic Expert" },
    ]
  },
  {
    date: "March 27",
    topics: [
      { title: "Jury trials", lecturer: "Alkhas Abgadzhava", role: "Trial Attorney" },
      { title: "Undercover operations: distinguishing searches from inspections, interrogations from informal talks", lecturer: "Anastasia Samorukova & Leonid Abgadzhava", role: "Legal Experts" },
    ]
  },
  {
    date: "March 28",
    topics: [
      { title: "'Foreign agents,' 'undesirable organizations,' and digital security", lecturer: "Galina Arapova", role: "Mass Media Defence Center Head" },
      { title: "Article 207.3 ('fake news' law): investigation tactics and defense strategies", lecturer: "Leonid Solovyov", role: "Defense Attorney" },
    ]
  },
  {
    date: "March 29",
    topics: [
      { title: "Administrative prosecution", lecturer: "Elena Makarova", role: "Administrative Law Expert" },
      { title: "Wrap-up and Q&A", lecturer: "Faculty Panel", role: "All Instructors" },
    ]
  }
];

export default function SchoolOfPublicDefenderPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <Link href="/#projects">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
            </div>
            
            {/* Hero Section */}
            <div className="space-y-6 mb-16">
              <div className="text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl lg:text-6xl">
                  The Sergey Sharov-Delone School of Public Defender
                </h1>
                <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
                  Empowering ordinary citizens with legal knowledge to defend themselves and their loved ones in Russian courts as public defenders
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">Legal Education</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Civil Rights</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Public Defense</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Activism</Badge>
              </div>
              
              <Image
                src="/photos/public-defender.png"
                width={1200}
                height={600}
                alt="Sergey Sharov-Delone School of Public Defender"
                data-ai-hint="legal education courtroom law books"
                className="aspect-video w-full rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-16">
              <CardContent className="p-8 text-center">
                <h2 className="font-headline text-2xl font-bold mb-4">Understanding "Public Defender" in Russian Law</h2>
                <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-4">
                  Under Russian law, an individual can be defended in court not only by a professional lawyer but also by a "public defender" (общественный защитник). 
                  This legal status grants the right to file motions, question witnesses, access defendants in detention facilities, and exercise the same procedural rights as a lawyer.
                </p>
                <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                  The ShOD trains ordinary citizens without formal law degrees to become these active and knowledgeable defenders, 
                  providing practical skills to navigate administrative and criminal court cases and interactions with law enforcement.
                </p>
              </CardContent>
            </Card>

            {/* Overall Impact Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                9 Years of Impact
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {overallImpact.map((metric, index) => (
                  <Card key={metric.label} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="flex flex-col items-center gap-4 pb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        {metric.icon}
                      </div>
                      <CardTitle className="text-4xl font-extrabold text-accent">
                        {metric.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-semibold text-foreground">{metric.label}</p>
                      <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* History Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                History & Evolution
              </h2>
              <Card className="mb-6">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-primary">Founded in 2016</h3>
                      <p className="text-foreground/80 mb-4">
                        Launched by historian and human rights activist Sergey Sharov-Delone (1956-2019), 
                        the school is a joint initiative of Russia Behind Bars, OVD-Info, and the Sakharov Center.
                      </p>
                      <h3 className="font-semibold text-lg mb-3 text-primary">Format Evolution</h3>
                      <p className="text-foreground/80">
                        Until 2020, the school was held offline at the Sakharov Center, including sessions across Russian regions. 
                        Since 2021, it successfully adapted to online format, significantly expanding geographic reach.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-primary">Graduate Impact</h3>
                      <p className="text-foreground/80">
                        Hundreds of graduates have become activists, public defenders, and even professional lawyers and attorneys 
                        who are now actively working in courts across the country, creating a network of legally literate defenders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Topics Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Core Learning Areas
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {coreTopics.map((topic, index) => (
                  <Card key={topic.title} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {topic.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Faculty Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Leading Expert Faculty
              </h2>
              <p className="mb-8 text-center text-foreground/80 max-w-3xl mx-auto">
                The school's faculty consists of practicing lawyers and human rights defenders with vast experience in complex human rights cases.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {facultyExperts.map((expert, index) => (
                  <Card key={index} className="p-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-lg">{expert.name}</h3>
                      <p className="text-sm text-muted-foreground">{expert.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Program Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Recent Program: March 2025 School
              </h2>
              
              <Card className="border-2 border-primary/20 mb-8">
                <CardHeader>
                  <div className="text-center">
                    <CardTitle className="text-2xl font-bold">March 24-29, 2025 Session</CardTitle>
                    <div className="grid gap-4 md:grid-cols-3 mt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">106</div>
                        <div className="text-sm text-muted-foreground">Applications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">84</div>
                        <div className="text-sm text-muted-foreground">Invited</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">57</div>
                        <div className="text-sm text-muted-foreground">Graduates</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Daily Program & Expert Lecturers
                  </h3>
                  <div className="space-y-6">
                    {march2025Program.map((day, dayIndex) => (
                      <Card key={dayIndex} className="border border-secondary/50">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg text-primary flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            {day.date}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {day.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
                                <h4 className="font-semibold text-foreground mb-2 text-base leading-relaxed">{topic.title}</h4>
                                <div className="space-y-1">
                                  <p className="text-sm text-gray-800"><strong className="text-primary">Lecturer:</strong> {topic.lecturer}</p>
                                  <p className="text-xs text-gray-600"><strong className="text-gray-700">Role:</strong> {topic.role}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Founders & Partners Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Founding Organizations
              </h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-3 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-full bg-primary/10 mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Russia Behind Bars</h3>
                      <p className="text-sm text-muted-foreground">Human rights organization</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-full bg-primary/10 mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">OVD-Info</h3>
                      <p className="text-sm text-muted-foreground">Media project and human rights organization</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-full bg-primary/10 mb-4">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Sakharov Center</h3>
                      <p className="text-sm text-muted-foreground">Human rights organization and museum</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
