import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Empowering Change Through Education
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                We are dedicated to fostering a more just and equitable world by creating and distributing educational resources on civil and human rights.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 min-[400px]:flex-row lg:justify-start justify-center">
              <Button asChild size="lg">
                <Link href="#projects">Explore Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#documents">View Grant Info</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/photos/hero.png"
            width="600"
            height="600"
            alt="Hero Image"
            data-ai-hint="community diversity"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
