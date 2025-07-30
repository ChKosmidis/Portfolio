import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Elena Bonner School of Human Rights",
    description:
      "An intensive online program on the theory and practice of human rights is aimed at those who live in Russia and abroad.",
    image: "/photos/elena-bonner-school.png",
    tags: ["Civic Education", "Technology", "Youth"],
    link: "/projects/elena-bonner-school",
  },
  {
    title: "Media Literacy Course",
    description:
      "This program equips individuals with essential skills for critical and safe navigation of the digital world.",
    image: "/photos/media-literacy.png",
    tags: ["Media Literacy", "Digital Safety", "Critical Thinking"],
    link: "/projects/media-literacy-course",
  },
  {
    title: "School of Public Defender",
    description:
      "An intensive program equipping Russian activists with practical legal knowledge to navigate politically motivated charges.",
    image: "/photos/public-defender.png",
    tags: ["Legal Education", "Activism", "Community Defense"],
    link: "/projects/school-of-public-defender",
  },
  {
    title: "Online School on Human Rights - Rights in Europe",
    description:
      "A major international collaboration with the ENLIGHT+ European university consortium to address the erosion of fundamental rights.",
    image: "/photos/rights-in-europe.png",
    tags: ["Human Rights", "Academia", "International Collaboration"],
    link: "/projects/rights-in-europe",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our Projects
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We develop innovative projects to make human rights education accessible, engaging, and impactful for diverse audiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="mb-2 text-xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link href={project.link} target={(project as any).external ? "_blank" : "_self"}>
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
