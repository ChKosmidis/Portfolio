'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedLogo() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [revealedWords, setRevealedWords] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const { gsap } = window as any;
      
      // Initial setup - letters start in a line as "EBC", invisible
      gsap.set('.letter-container', {
        opacity: 0,
        scale: 0.8,
        transformOrigin: 'center'
      });

      // Position letters in a line initially (E, B, C)
      gsap.set('.E-container', { left: '35%', top: '50%' });
      gsap.set('.B-container', { left: '50%', top: '50%' });
      gsap.set('.C-container', { left: '65%', top: '50%' });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.8 });
      
      // First, make letters visible as "EBC" in a line
      tl.to('.letter-container', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      })
      // Wait a moment to show "EBC"
      .to({}, { duration: 1 })
      // Then move them to their final diagonal positions
      .to('.E-container', {
        left: '25%',
        top: '15%',
        duration: 1.2,
        ease: 'power3.out'
      })
      .to('.B-container', {
        left: '50%',
        top: '50%',
        duration: 1,
        ease: 'power3.out'
      }, '-=1.2')
      .to('.C-container', {
        left: '75%',
        top: '85%',
        duration: 1.4,
        ease: 'power3.out'
      }, '-=1.2')
      // After positioning, start revealing words permanently
      .call(() => {
        revealWordsSequentially();
      });

      // Reveal each word with letter-by-letter animation
      const revealWordsSequentially = () => {
        const sequence = [
          { letter: 'E', word: 'Elena', container: '.E-container' },
          { letter: 'B', word: 'Bonner', container: '.B-container' },
          { letter: 'C', word: 'Center', container: '.C-container' }
        ];
        
        let currentIndex = 0;
        
        const revealNextWord = () => {
          if (currentIndex < sequence.length) {
            const { letter, word, container } = sequence[currentIndex];
            revealWord(letter, word, container);
            currentIndex++;
            setTimeout(revealNextWord, 1500); // 1.5 second delay between words
          }
        };
        
        revealNextWord();
      };

      // Animate individual word reveal
      const revealWord = (letter: string, fullWord: string, container: string) => {
        setRevealedWords(prev => ({ ...prev, [letter]: true }));
        
        // Animate the additional letters appearing one by one
        const additionalLetters = fullWord.slice(1); // Remove first letter
        const letterElements = document.querySelectorAll(`${container} .additional-letter`);
        
        gsap.fromTo(letterElements, 
          { 
            opacity: 0,
            x: -20,
            scale: 0.5
          },
          { 
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: 'back.out(1.7)'
          }
        );
      };
    }
  }, []);

  const renderWord = (letter: string, fullWord: string) => {
    const isRevealed = revealedWords[letter];
    
    if (!isRevealed) {
      return letter;
    }
    
    const additionalLetters = fullWord.slice(1);
    
    return (
      <>
        {letter}
        {additionalLetters.split('').map((char, index) => (
          <span key={index} className="additional-letter">
            {char}
          </span>
        ))}
      </>
    );
  };

  return (
    <div ref={logoRef} className="relative select-none w-full h-full flex items-center justify-center min-h-[400px]">
      {/* E -> Elena */}
      <div 
        className="letter-container E-container absolute"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="letter-text text-6xl lg:text-8xl xl:text-9xl font-bold text-primary transition-all duration-500 font-sans tracking-tight">
          {renderWord('E', 'Elena')}
        </div>
      </div>

      {/* B -> Bonner */}
      <div 
        className="letter-container B-container absolute"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="letter-text text-6xl lg:text-8xl xl:text-9xl font-bold text-primary transition-all duration-500 font-sans tracking-tight">
          {renderWord('B', 'Bonner')}
        </div>
      </div>

      {/* C -> Center */}
      <div 
        className="letter-container C-container absolute"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="letter-text text-6xl lg:text-8xl xl:text-9xl font-bold text-primary transition-all duration-500 font-sans tracking-tight">
          {renderWord('C', 'Center')}
        </div>
      </div>
    </div>
  );
}
