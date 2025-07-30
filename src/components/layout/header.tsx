"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#impact", label: "Impact" },
    { href: "#team", label: "Team" },
    { href: "#documents", label: "Documents" },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src="/Portfolio/photos/hero.png" alt="Elena Bonner Center Logo" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
          <span className="font-headline text-xl font-bold tracking-tight">
            Elena Bonner Center
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link
              href="/"
              className="mb-6 flex items-center gap-2"
              prefetch={false}
              onClick={handleLinkClick}
            >
              <Image src="/Portfolio/photos/hero.png" alt="Elena Bonner Center Logo" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
              <span className="font-headline text-xl font-bold tracking-tight">
                Elena Bonner Center
              </span>
            </Link>
            <nav className="grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  prefetch={false}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
