import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            prefetch={false}
          >
            <Image src="/Portfolio/photos/hero.png" alt="Elena Bonner Center Logo" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            <span className="font-headline text-xl font-bold">
              Elena Bonner Center
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Championing civil and human rights through education and action.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:col-span-2 md:justify-end md:gap-8">
          <div className="grid gap-1">
            <h3 className="font-semibold">Navigate</h3>
            <Link href="#projects" prefetch={false} className="hover:text-primary">
              Projects
            </Link>
            <Link href="#impact" prefetch={false} className="hover:text-primary">
              Impact
            </Link>
            <Link href="#team" prefetch={false} className="hover:text-primary">
              Our Team
            </Link>
            <Link href="#documents" prefetch={false} className="hover:text-primary">
              Documents
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false} className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false} className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" prefetch={false}>
                <Twitter className="h-5 w-5 hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" prefetch={false}>
                <Linkedin className="h-5 w-5 hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" prefetch={false}>
                <Facebook className="h-5 w-5 hover:text-primary" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Elena Bonner Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
