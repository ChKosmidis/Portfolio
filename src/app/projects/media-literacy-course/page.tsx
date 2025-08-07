import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, CheckCircle, Award, Users, Calendar, GraduationCap, TrendingUp, BookOpen, Mic, Brain, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const overallImpact = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "1,427",
    label: "Total Applications",
    description: "Over 3 years"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    value: "835",
    label: "Participants Accepted",
    description: "Acceptance rate: 58%"
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "390",
    label: "Graduates",
    description: "Completion rate: 47%"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "6",
    label: "Cohorts Completed",
    description: "Continuous growth"
  },
];

const latestCohorts = [
  {
    title: "Media Literacy Course 6",
    period: "June 4 - 25, 2025",
    applications: 180,
    accepted: 142,
    graduates: 67,
    status: "Latest",
    topics: [
      { title: "Disinformation in the Digital Age", lecturer: "Ilya Ber", role: "Founder & Editor-in-Chief, Provereno.media" },
      { title: "Scrolling into the Abyss: Digital Media & Propaganda Vulnerability", lecturer: "Irina Yakutenko", role: "Biologist & Science Journalist" },
      { title: "Reader vs. Text: Who Is in Control?", lecturer: "Oksana Stanevich", role: "Open & Decentralized Science Enthusiast" },
      { title: "Newspeak: How Language Constructs Reality", lecturer: "Alexandra Arkhipova", role: "Social Anthropologist" },
      { title: "Legal Risks for Social Media Users in Russia", lecturer: "Galina Arapova", role: "Media Lawyer, Mass Media Defence Centre" },
      { title: "AI in Media: Optimist vs Pessimist Debate", lecturer: "Andrey Goryanov & Leonid Yuldashev", role: "BBC Eye & eQualitie, Internet History Researcher" },
      { title: "Information Wars: Propaganda & Manipulation", lecturer: "Vasily Gatov", role: "USC Annenberg Center Senior Fellow" },
    ]
  },
  {
    title: "Media Literacy Course 5",
    period: "February 19 - March 15, 2025",
    applications: 129,
    accepted: 162,
    graduates: 63,
    status: "Recent",
    topics: [
      { title: "Disinformation in the Digital Age", lecturer: "Ilya Ber", role: "Provereno.media" },
      { title: "How Media in Exile Survive and Thrive", lecturer: "Polina Filippova", role: "Producer, Radio Sakharov" },
      { title: "Urban Legends: How They Arise and Why We Believe", lecturer: "Alexandra Arkhipova", role: "Social Anthropologist" },
      { title: "Digital Environment's Impact on Cognition", lecturer: "Maria Falikman", role: "PhD Psychology, University of the South" },
      { title: "AI as a Tool for Media: Risks and Opportunities", lecturer: "Andrey Goryanov", role: "Executive Producer, BBC Eye" },
      { title: "Information Wars: Propaganda & Censorship", lecturer: "Vasily Gatov", role: "USC Annenberg" },
      { title: "Will Tomorrow Be Worse? How We Read News", lecturer: "Alexander Amzin", role: "Media Consultant" },
      { title: "Traveling in Disguise: Internet Trust", lecturer: "Leonid Yuldashev", role: "eQualitie, Internet History Researcher" },
    ]
  }
];

const archiveCohorts = [
  { title: "Media Literacy Cource 4", applications: 611, accepted: 172, graduates: 69 },
  { title: "Media Literacy Cource 3", applications: 185, accepted: 124, graduates: 66 },
  { title: "Media Literacy Cource 2", applications: 153, accepted: 117, graduates: 52 },
  { title: "Media Literacy Cource 1", applications: 169, accepted: 118, graduates: 73 },
];

const coreTopics = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Disinformation Detection",
    description: "Master techniques for identifying and combating fake news in digital environments"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Digital Psychology",
    description: "Understand how digital media affects perception, memory, and decision-making"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Media Ethics",
    description: "Navigate the ethical landscape of modern journalism and content creation"
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Information Wars",
    description: "Analyze propaganda techniques and manipulation strategies in media"
  }
];

export default function MediaLiteracyCoursePage() {
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
                  Media Literacy Course
                </h1>
                <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
                  Empowering individuals to navigate the complex modern information landscape through critical media consumption skills
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">Media Literacy</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Digital Safety</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Critical Thinking</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Information Warfare</Badge>
              </div>
              
              <Image
                src="/photos/media-literacy.png"
                width={1200}
                height={600}
                alt="Media Literacy Course"
                data-ai-hint="media literacy digital education"
                className="aspect-video w-full rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-16">
              <CardContent className="p-8 text-center">
                <h2 className="font-headline text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                  In an era of information overload and digital manipulation, the Media Literacy Course serves as a beacon of critical thinking. 
                  We empower individuals with the skills to navigate complex information landscapes, distinguish truth from manipulation, 
                  and become informed, resilient digital citizens capable of making thoughtful decisions in an interconnected world.
                </p>
              </CardContent>
            </Card>

            {/* Overall Impact Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                3-Year Impact Overview
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

            {/* Recent Cohorts Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Recent Cohorts
              </h2>
              <div className="relative">
                <Tabs defaultValue="cohort-6" className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-6 p-3 bg-muted rounded-lg gap-3 sm:gap-1 sticky top-[64px] z-10 shadow-sm">
                    <TabsTrigger 
                      value="cohort-6" 
                      className="flex flex-col sm:flex-row items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-base sm:text-lg py-4 px-3 text-center min-h-[60px] sm:min-h-[50px]"
                    >
                      <Badge variant="outline" className="text-xs bg-green-100 text-green-800 border-green-300 shrink-0">Latest</Badge>
                      <span className="text-sm sm:text-base font-medium">Media Literacy Course 6</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="cohort-5"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-base sm:text-lg py-4 px-3 text-center min-h-[60px] sm:min-h-[50px]"
                    >
                      <span className="text-sm sm:text-base font-medium">Media Literacy Course 5</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  {latestCohorts.map((cohort, index) => (
                    <TabsContent key={index} value={`cohort-${6-index}`} className="space-y-6">
                      <Card className="border-2 border-primary/20">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-2xl font-bold">{cohort.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{cohort.period}</span>
                              </div>
                            </div>
                            <Badge variant={cohort.status === "Latest" ? "default" : "secondary"}>
                              {cohort.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-6 md:grid-cols-3 mb-6">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-primary">{cohort.applications}</div>
                              <div className="text-sm text-muted-foreground">Applications</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-600">{cohort.accepted}</div>
                              <div className="text-sm text-muted-foreground">Accepted</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600">{cohort.graduates}</div>
                              <div className="text-sm text-muted-foreground">Graduates</div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                              <BookOpen className="h-5 w-5" />
                              Curriculum & Expert Lecturers
                            </h3>
                            <div className="space-y-4">
                              {cohort.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                  <h4 className="font-semibold text-foreground mb-3 text-lg leading-relaxed">{topic.title}</h4>
                                  <div className="space-y-1">
                                    <p className="text-base text-gray-800"><strong className="text-primary">Expert:</strong> {topic.lecturer}</p>
                                    <p className="text-sm text-gray-600"><strong className="text-gray-700">Role:</strong> {topic.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            {/* Archive Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Previous Performance
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Previous Cohorts Archive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {archiveCohorts.map((cohort, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                        <div>
                          <h3 className="font-semibold">{cohort.title}</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-lg font-bold">{cohort.applications}</div>
                            <div className="text-xs text-muted-foreground">Applications</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-600">{cohort.accepted}</div>
                            <div className="text-xs text-muted-foreground">Accepted</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-blue-600">{cohort.graduates}</div>
                            <div className="text-xs text-muted-foreground">Graduates</div>
                          </div>
                        </div>
                      </div>
                    ))}
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
