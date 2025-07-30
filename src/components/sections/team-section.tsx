import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const teamMembers: {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  initials: string;
}[] = [
  {
    name: "Anna Semenova",
    role: "Project Curator",
    bio: "More than 20 years experience in education and civic engagement.",
    initials: "AS",
  },
  {
    name: "Chris Kosmidis",
    role: "Project Manager",
    bio: "MA in Comparative History, CEU, expertise in modern educational design, history of human rights and IT for NGOs.",
    initials: "CK",
  },
  {
    name: "Ruslan Dzhan",
    role: "Project Manager",
    bio: "Expertise in PR and GR for NGOs, crisis management and resilience expert.",
    initials: "RD",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our work is driven by a passionate team of experts dedicated to advancing civil and human rights education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col sm:flex-row items-center p-4 gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardHeader className="p-0">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
