'use client';

import { useEffect, useState, useRef } from 'react';
import { Widget } from '@/components/Widget';
import { WidgetEvents } from '@/components/WidgetEvents';

const quotes = [
  "Jumping galaxies is easy—landing gracefully is the tricky part.",
  "Ever feel lost in the galaxy? Superposition Jump knows the feeling.",
  "It's a big Superposition universe out there... and you're parked illegally.",
  "Space-time waits for no app—jump right in.",
  "The shortest distance between two galaxies? One Superposition Jump.",
  "If the galaxy feels crowded, remember: there's always another universe next door.",
  "Our apps orbit smoothly—gravity not included.",
  "Don't panic: the answer is always Superposition Jump.",
  "Quantum leaps available—just bring your own Schrödinger's cat.",
  "We're your first jump-off point to the galaxy; return ticket optional.",
  "In space, no one can hear you refresh.",
  "Because 'Home Galaxy' is just a placeholder.",
  "A billion stars, countless planets, and somehow your app still crashes.",
  "Superposition Jump: Your cosmic coffee break.",
  "Out here, no one judges your app updates.",
  "Infinite universes, zero loading screens—mostly.",
  "Escape velocity achieved—productivity not guaranteed.",
  "Lost in space? That's just called user onboarding.",
  "Jump in—the dark matter's fine!",
  "The final frontier was taken, so we chose the first.",
  "One small step for devs, one giant leap for your workflow.",
  "The universe expands. Your patience shouldn't.",
  "Beware of space bugs—they bite harder.",
  "Our superposition's bigger than yours.",
  "If the universe is infinite, why do we always bump into bugs?",
  "You can't hear screams in space, but you sure can hear user feedback.",
  "Apps in superposition—twice the functionality, half the confusion.",
  "We jump galaxies so you don't have to.",
  "To infinity and beyond… pending network availability.",
  "Superposition Jump: Like space travel, but with fewer snacks.",
  "Quantum mechanics made simple-ish.",
  "You can't fold space-time without creasing a few bugs.",
  "This galaxy rated 4.2 stars. Blame the black holes.",
  "Our teleportation tech? Mostly reliable.",
  "It's lonely at the center of the galaxy—join us!",
  "Space: it's bigger on the inside of our apps.",
  "No hyperdrive? No problem.",
  "At least your app problems aren't universal… yet.",
  "We didn't invent galaxy hopping—we perfected it.",
  "An entire galaxy at your fingertips—and you're still doom-scrolling.",
  "Be kind, rewind your warp drive.",
  "First contact protocol: tap, swipe, launch.",
  "Bridging galaxies: faster than fixing bugs.",
  "Keep calm and carry on quantum tunneling.",
  "Ever crash a galaxy? Yeah, us neither.",
  "Superposition Jump: because manual warp drive is so last century.",
  "Universal truth #42: there's always another bug.",
  "Space dust is just glitter for advanced civilizations.",
  "Apps that boldly go—occasionally nowhere.",
  "Our apps are faster than the speed of dark.",
  "Beam your app up, Scotty.",
  "A wormhole a day keeps the stagnation away.",
  "Light-years ahead, except on Mondays.",
  "Gravity optional, fun mandatory.",
  "Infinite galaxies and you chose ours. We’re flattered!",
  "In the Superposition galaxy, debugging is an art form.",
  "Light speed delivery—bugs delivered even faster!",
  "In case of galactic emergency, refresh twice.",
  "Superposition Jump: Navigating galaxies, mostly successfully.",
  "Our singularity is friendlier than theirs.",
  "Traveling the galaxy—like a commute, just less traffic.",
  "Warp factor fun—engage!",
  "Our app launch: smoother than a planetary landing, mostly.",
  "If aliens built apps, they'd use Superposition Jump too.",
  "There's a galaxy of possibilities—and bugs—awaiting you.",
  "Quantum glitches sold separately.",
  "Less existential dread, more galactic exploration.",
  "Don't blame cosmic rays for app crashes. Actually, do.",
  "Superposition Jump: Your wormhole to productivity.",
  "May your jumps always land in friendly galaxies.",
  "Navigating galaxies—easier than assembling IKEA furniture.",
  "Where the universe ends, Superposition Jump begins.",
  "We solve problems at quantum scale—mostly.",
  "Bugs here are quantum: sometimes they exist, sometimes they don't.",
  "Because the Milky Way was getting crowded anyway.",
  "Trust us, you look great in zero gravity.",
  "Our galaxy: low latency, high amusement.",
  "Teleport responsibly—galactic etiquette applies.",
  "Relax—you're only one jump away from clarity.",
  "Superposition Jump: making galaxy-hopping a casual affair.",
  "Our apps are in orbit—watch your head.",
  "The galaxy's first stop, but feel free to linger.",
  "Infinite parallel universes, infinite parallel apps.",
  "Warning: quantum entanglement might improve your workflow.",
  "Galactic travel insurance not included.",
  "Where apps meet black holes—briefly.",
  "Galaxies loaded—ready player one.",
  "If you thought your desktop was cluttered, wait till you see a galaxy.",
  "Wormholes? We call that UX design.",
  "Escape reality, jump into Superposition.",
  "Galactic command center—coffee strongly recommended.",
  "Apps, galaxies, and existential questions—what’s not to love?",
  "The universe is expanding. Your productivity should too.",
  "Universe not found—redirecting you to Superposition Jump.",
  "Our black holes are decorative, mostly.",
  "Why settle for Earth-based apps?",
  "Superposition Jump: It’s not rocket science—except it is.",
  "Need more space? Literally, we’ve got galaxies.",
  "Superposition Jump: it's like teleportation, without the nausea.",
  "One jump for apps, one giant leap for app-kind.",
];

const songs = ["galaxy-1.mp3", "galaxy-2.mp3"];

export default function Home() {
  const [quote, setQuote] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    if (audioRef.current) {
      audioRef.current.src = songs[Math.floor(Math.random() * songs.length)];
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main>
      <WidgetEvents />
      <audio ref={audioRef} />
      <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/logo.svg" width="100%" />
        </div>
        <div>
          <Widget />
          <div className="quote">
            {quote}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
          <button onClick={togglePlay} style={{ padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </button>
          <a href="https://unsplash.com/photos/cluster-of-star-illustration-f7YQo-eYHdM" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '15px',  padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'white',  }}>
            Image credits
          </a>
        </div>
      </div>
    </main>
  );
}
