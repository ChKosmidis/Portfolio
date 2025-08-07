import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, CheckCircle, Award, Users, Calendar, GraduationCap, TrendingUp, BookOpen, Building, BarChart, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const overallImpact = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "556+",
    label: "Total Applications",
    description: "Across both editions"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    value: "70",
    label: "Total Participants",
    description: "Pilot + Current"
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "28",
    label: "Pilot Graduates",
    description: "93% completion rate"
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    value: "4",
    label: "Partner Universities",
    description: "European consortium"
  },
];

const projectEditions = [
  {
    title: "2025 Flagship School",
    period: "Autumn 2025",
    applications: 450,
    accepted: 40,
    graduates: "In Progress",
    status: "Current",
    academicHours: 30,
    ects: 3,
    weeks: 6,
    description: "In-Depth, In-Demand, High-Impact edition with expanded partnerships and enhanced curriculum",
    blocks: [
      {
        title: "Block 1: The mechanisms of human rights and their interaction with the nature of the political regime",
        topics: [
          { title: "Human rights, democracy and freedom: singing in unison?", lecturer: "Dr. Prof. Ekaterina Yahyaoui Krivenko", role: "Associate Professor, Irish Centre for Human Rights, University of Galway" },
          { title: "The Implementation Gap: Challenges in Realising Human Rights", lecturer: "Dr. Joyce De Coninck", role: "Ghent University" },
          { title: "Interdisciplinary research on human rights (Methodological Workshop)", lecturer: "Dr. Prof. Roisin Mulgrew & Iana Ovsiannikova", role: "University of Galway & Ghent University" },
          { title: "Economic, social and cultural rights: retreat in the age of neo-liberal ideology?", lecturer: "To be confirmed", role: "Expert Speaker" },
        ]
      },
      {
        title: "Block 2: New frontiers of human rights in a contested context",
        topics: [
          { title: "Digital rights in the era of post-truth", lecturer: "Dr. Prof. Rashid Gabdulhakov", role: "Assistant Professor, University of Groningen" },
          { title: "Women's and LGBTQI+ rights versus 'traditional values'?", lecturer: "Dr. Laura Luciani", role: "Ghent University" },
          { title: "Climate justice: climate accountability for state and private companies", lecturer: "Dr. Prof. Hendrik Schoukens", role: "Ghent University" },
        ]
      },
      {
        title: "Block 3: Human rights and conflicts",
        topics: [
          { title: "State of emergencies and human rights in conflict", lecturer: "Dr. Prof. Laima Vaige", role: "Associate Professor, Uppsala University" },
          { title: "Justice and accountability for human rights violations", lecturer: "Dr. Gleb Bogush", role: "Research Fellow, Institute for International Peace and Security Law, University of Cologne" },
        ]
      },
      {
        title: "Block 4: From theory to practice: citizens' engagement with human rights",
        topics: [
          { title: "Critical approaches to human rights: appropriation and abuse of human rights by authoritarian regimes", lecturer: "Dr. Prof. Elizaveta Gaufman", role: "Assistant Professor, University of Groningen" },
          { title: "Human rights advocacy: citizens participation in human rights promotion and accountability", lecturer: "Dan Storev", role: "English Managing Editor, OVD-Info" },
        ]
      }
    ]
  },
  {
    title: "Pilot Online School on Human Rights",
    period: "Autumn 2024",
    applications: 106,
    accepted: 30,
    graduates: 28,
    status: "Completed",
    academicHours: 30,
    ects: 5,
    weeks: 6,
    description: "Bridging Perspectives: Human Rights Dialogues Between Russia and Europe - The foundational project that established dialogue between expert communities",
    mission: "Conceived as a response to growing academic isolation, designed to build bridges between expert communities in Russia and Europe. The project's mission was to provide a vital platform for discussion and the search for common values.",
    support: "Co-funded by the European Commission 'EU Public Diplomacy - Russia Project' and the ENLIGHT European University Alliance",
    practiceComponent: "Participants were divided into 6 teams of 5 students. Each team conducted original research and prepared a 10-minute presentation on topics such as comparative analysis of human rights in the EU and Russia or deep dives into specific rights-based issues.",
    blocks: [
      {
        title: "Cluster 1: Human Rights in Russia: New Heights of Repressions",
        topics: [
          { title: "Modern Russia: a Reversal from Human Rights to Traditional Values", lecturer: "Dr. Natasza Krawczuk", role: "Senior Researcher and Lawyer" },
          { title: "Prosecution of Russia's War of Aggression against Ukraine and the Limits of International Law", lecturer: "Dr. Gleb Bogush", role: "University of Cologne" },
          { title: "The Geo-politics of Gender and Sexuality in an Era of EU-Russia Competition", lecturer: "Dr. Laura Luciani", role: "Ghent University" },
          { title: "Human Rights and Russian Society (Sociological Explorations)", lecturer: "Dr. Dmitry Dubrovsky", role: "Charles University" },
          { title: "Russia's Other War: The Fight over Freedom of Expression", lecturer: "Prof. Dr. Ilya Yablokov", role: "University of Sheffield" },
        ]
      },
      {
        title: "Cluster 2: Human Rights from the European perspective: a beacon of hope?",
        topics: [
          { title: "Human Rights in Europe and its Institutions: Between Powers and Obligations", lecturer: "Dr. Joyce De Coninck", role: "Ghent University" },
          { title: "Human Rights Restoration in Europe: A Retrospective from Post-Dictatorship Spain and Portugal", lecturer: "Dr. Filipa Raimundo", role: "ISCTE-Lisbon University Institute" },
          { title: "The Nexus between Democracy, Human Rights and Peace", lecturer: "Dr. Alina Cherviatsova", role: "Ghent University" },
          { title: "Human Rights Aspects of International Migration Flows to Europe", lecturer: "Dr. Ciara Smyth", role: "University of Galway" },
          { title: "Climate Change and Human Rights", lecturer: "Dr. Hendrik Schoukens", role: "Ghent University" },
        ]
      }
    ]
  }
];

const partners = [
  "Ghent University (Eureast Platform)",
  "The Irish Centre for Human Rights at the University of Galway",
  "University of Groningen",
  "Uppsala University",
];

const learningOutcomes = [
  "Evaluate political systems and their impact on human rights protection",
  "Deconstruct dominant narratives surrounding human rights discourse",
  "Apply interdisciplinary research methodologies to human rights issues",
  "Create evidence-based advocacy plans and strategies",
];

const coreTopics = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Authoritarianism's Impact",
    description: "Critically engaging with how institutions and political systems affect human rights protection"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Modern Societal Challenges",
    description: "Exploring the intersection of human rights with digital transformation and environmental policy"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Language of Human Rights",
    description: "Analyzing how human rights discourse is instrumentalized and manipulated"
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Human Rights in Conflict",
    description: "Addressing rights protection during armed conflicts in the current global landscape"
  }
];

export default function RightsInEuropePage() {
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
                  Online School - Rights in Europe: the risks and impact of authoritarianism
                </h1>
                <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
                  A major international collaboration establishing vital dialogue between scholars and students on human rights in the face of growing authoritarianism
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">Human Rights</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Academia</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">International Collaboration</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Bridge Building</Badge>
              </div>
              
              <Image
                src="/photos/rights-in-europe.png"
                width={1200}
                height={600}
                alt="Rights in Europe - Online School"
                data-ai-hint="university campus europe human rights"
                className="aspect-video w-full rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-16">
              <CardContent className="p-8 text-center">
                <h2 className="font-headline text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                  In partnership with prestigious European universities, we aim to rebuild intellectual and cultural bridges eroded by the political climate. 
                  Our mission is to provide a vital platform for constructive dialogue between scholars and students from different backgrounds, 
                  enabling participants to find common ground and reaffirm shared humanistic values in human rights education.
                </p>
              </CardContent>
            </Card>

            {/* Overall Impact Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Project Impact Overview
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

            {/* Project Editions Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Project Editions
              </h2>
              <div className="relative">
                <Tabs defaultValue="edition-2025" className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-6 p-3 bg-muted rounded-lg gap-3 sm:gap-1 sticky top-[64px] z-10 shadow-sm">
                    <TabsTrigger 
                      value="edition-2025" 
                      className="flex flex-col sm:flex-row items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-base sm:text-lg py-4 px-3 text-center min-h-[60px] sm:min-h-[50px]"
                    >
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-300 shrink-0">Current</Badge>
                      <span className="text-sm sm:text-base font-medium">2025 Flagship</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="edition-2024"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-base sm:text-lg py-4 px-3 text-center min-h-[60px] sm:min-h-[50px]"
                    >
                      <span className="text-sm sm:text-base font-medium">2024 Pilot</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  {projectEditions.map((edition, index) => (
                    <TabsContent key={index} value={`edition-${edition.period.includes('2025') ? '2025' : '2024'}`} className="space-y-6">
                      <Card className="border-2 border-primary/20">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-2xl font-bold">{edition.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{edition.period}</span>
                              </div>
                            </div>
                            <Badge variant={edition.status === "Current" ? "default" : "secondary"}>
                              {edition.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-6 md:grid-cols-3 mb-6">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-primary">{edition.applications}</div>
                              <div className="text-sm text-muted-foreground">Applications</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-600">{edition.accepted}</div>
                              <div className="text-sm text-muted-foreground">Accepted</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600">{edition.graduates}</div>
                              <div className="text-sm text-muted-foreground">Graduates</div>
                            </div>
                          </div>

                          {edition.academicHours && (
                            <div className="grid gap-4 md:grid-cols-3 mb-6 p-4 bg-secondary/20 rounded-lg">
                              <div className="text-center">
                                <div className="text-xl font-bold text-accent">{edition.academicHours}</div>
                                <div className="text-xs text-muted-foreground">Academic Hours</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xl font-bold text-accent">{edition.ects}</div>
                                <div className="text-xs text-muted-foreground">ECTS Credits</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xl font-bold text-accent">{edition.weeks}</div>
                                <div className="text-xs text-muted-foreground">Weeks Duration</div>
                              </div>
                            </div>
                          )}

                          {edition.support && (
                            <Card className="mb-6 bg-blue-50 border-blue-200">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-blue-900 mb-2">Funding & Support</h4>
                                <p className="text-sm text-blue-800">{edition.support}</p>
                              </CardContent>
                            </Card>
                          )}

                          {edition.practiceComponent && (
                            <Card className="mb-6 bg-green-50 border-green-200">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-green-900 mb-2">Practice-Oriented Learning: Collaborative Group Projects</h4>
                                <p className="text-sm text-green-800">{edition.practiceComponent}</p>
                              </CardContent>
                            </Card>
                          )}
                          
                          <div className="mb-6">
                            <p className="text-foreground/80 italic">{edition.description}</p>
                            {edition.mission && (
                              <p className="text-foreground/80 mt-4">{edition.mission}</p>
                            )}
                          </div>
                          
                          {edition.blocks && (
                            <div>
                              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Curriculum Blocks & Expert Lecturers
                              </h3>
                              <div className="space-y-6">
                                {edition.blocks.map((block, blockIndex) => (
                                  <Card key={blockIndex} className="border border-secondary/50">
                                    <CardHeader className="pb-4">
                                      <CardTitle className="text-lg text-primary">{block.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="space-y-4">
                                        {block.topics.map((topic, topicIndex) => (
                                          <div key={topicIndex} className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
                                            <h4 className="font-semibold text-foreground mb-2 text-base leading-relaxed">{topic.title}</h4>
                                            <div className="space-y-1">
                                              <p className="text-sm text-gray-800"><strong className="text-primary">Expert:</strong> {topic.lecturer}</p>
                                              <p className="text-xs text-gray-600"><strong className="text-gray-700">Role:</strong> {topic.role}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            {/* Partners Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                European University Consortium
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    ENLIGHT+ Partnership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {partners.map((partner, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                        <Building className="h-8 w-8 text-primary mb-3" />
                        <p className="font-semibold text-foreground text-sm">{partner}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Learning Outcomes Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Learning Outcomes
              </h2>
              <p className="mb-8 text-center text-foreground/80 max-w-3xl mx-auto">
                Upon completion, participants will be equipped with advanced skills to engage with human rights in theory and practice:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {learningOutcomes.map((outcome, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-foreground/80">{outcome}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
