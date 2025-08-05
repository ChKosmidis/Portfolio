import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookUser, GraduationCap, Globe, Clock, Mic, Users, Wrench, CheckCircle, Award, Calendar, TrendingUp, BookOpen, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const overallImpact = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "1,400+",
    label: "Total Graduates",
    description: "Since 2020"
  },
  {
    icon: <BookUser className="h-8 w-8 text-primary" />,
    value: "5,600+",
    label: "Total Applications",
    description: "Over 4 years"
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: "320+",
    label: "Learning Hours",
    description: "Per program cycle"
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    value: "85",
    label: "Countries & Regions",
    description: "Global reach"
  },
];

const coreTopics = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Human Rights Theory",
    description: "Comprehensive understanding of human rights mechanisms and international law foundations"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Practical Advocacy",
    description: "Real-world skills for organizing grassroots aid and community building"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Legal Navigation",
    description: "Understanding laws on organizations, documentation of violations, and courtroom conduct"
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Digital Security",
    description: "Hands-on workshops for digital safety and NGO resilience in crisis situations"
  }
];

const programComponents = [
  {
    title: "Lectures",
    icon: <Mic className="h-6 w-6 text-primary" />,
    topics: [
      { title: "Mechanisms for Human Rights Protection", lecturer: "Natalia Kravchuk", role: "Human Rights Expert" },
      { title: "The Life and Legacy of Elena Bonner", lecturer: "Natalia Samover", role: "Historian & Biographer" },
      { title: "Foundations of International Humanitarian Law & the Work of HRW", lecturer: "Tanya Lokshina", role: "Human Rights Watch" },
      { title: "Transitional Justice", lecturer: "Ekaterina Schulmann", role: "Political Scientist" },
      { title: "'Lighthouse' Charity: How to Organize Grassroots Aid", lecturer: "Lida Moniava", role: "Civil Society Leader" },
      { title: "Performance as Activism: A Pussy Riot Case Study", lecturer: "Maria Alyokhina", role: "Activist & Performer" },
    ]
  },
  {
    title: "Seminars & Debates",
    icon: <Users className="h-6 w-6 text-primary" />,
    topics: [
      { title: "Navigating Laws on 'Undesirable,' 'Extremist,' and 'Foreign Agent' Organizations", lecturer: "OVD-Info Team", role: "Legal Rights Organization" },
      { title: "How to Document War Crimes", lecturer: "Alexander Cherkasov", role: "Memorial Human Rights Center" },
      { title: "Courtroom Conduct: Insights from a Forensic Photojournalist", lecturer: "Alexandra Astakhova", role: "Forensic Photojournalist" },
      { title: "NGO Management: Community Building, Internal Communications, and Infrastructure", lecturer: "Ruslan and Khristofor", role: "NGO Management Experts" },
      { title: "Debate: Should History Be Managed?", lecturer: "Dmitry Dubrovsky", role: "Social Scientist" },
    ]
  },
  {
    title: "Workshops (Labs)",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    topics: [
      { title: "Digital Security: A two-part, hands-on workshop", lecturer: "Teplitsa of Social Technologies", role: "Digital Rights Organization" },
      { title: "NGO Resilience: Sustaining Your Organization in Crisis Situations", lecturer: "Olga Sadovskaya", role: "Organizational Development Expert" },
      { title: "Gender-Based Violence as a Human Rights Issue", lecturer: "Mari Davtyan", role: "Gender Rights Specialist" },
    ]
  }
];

export default function ElenaBonnerSchoolPage() {
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
                  Elena Bonner School of Human Rights
                </h1>
                <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
                  An intensive online program on the theory and practice of human rights, connecting like-minded people and fostering human rights advocacy
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">Civic Education</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Human Rights</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Online Learning</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Youth Empowerment</Badge>
              </div>
              
              <Image
                src="/Portfolio/photos/elena-bonner-school.png"
                width={1200}
                height={600}
                alt="Elena Bonner School of Human Rights"
                data-ai-hint="education human rights learning"
                className="aspect-video w-full rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-16">
              <CardContent className="p-8 text-center">
                <h2 className="font-headline text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                  Originally established by the Sakharov Center, the Elena Bonner School became independent after the Center's liquidation by Russian authorities. 
                  We provide a completely free intensive program that welcomes everyone interested in learning about human rights and contributing to their protection, 
                  requiring no prior knowledge and designed to be accessible to a wide audience.
                </p>
              </CardContent>
            </Card>

            {/* Overall Impact Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                4-Year Impact Overview
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

            {/* Program Components Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                Program Structure
              </h2>
              <p className="mb-8 text-center text-foreground/80 max-w-3xl mx-auto">
                A comprehensive 3-month program featuring lectures, seminars, and hands-on workshops led by leading experts in human rights, law, and civil society.
              </p>
              
              <div className="space-y-8">
                {programComponents.map((component, componentIndex) => (
                  <Card key={component.title} className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {component.icon}
                        </div>
                        {component.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {component.topics.map((topic, topicIndex) => (
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

            {/* Application Info Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                How to Join
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6 text-center">
                  <div className="p-3 rounded-full bg-green-100 w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Completely Free</h3>
                  <p className="text-sm text-muted-foreground">The program is offered at no cost to ensure broad accessibility</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="p-3 rounded-full bg-blue-100 w-fit mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Twice Yearly</h3>
                  <p className="text-sm text-muted-foreground">Applications are accepted twice a year for each 3-month cycle</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="p-3 rounded-full bg-purple-100 w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Open to All</h3>
                  <p className="text-sm text-muted-foreground">No prior knowledge required - designed for wide accessibility</p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
