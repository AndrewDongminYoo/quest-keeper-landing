"use client";

import { useEffect, useRef, useState } from "react";

type HeroGender = "male" | "female";
type HeroHairColor = "black" | "brown" | "blue" | "red";
type BattlePhase = "idle" | "windUp" | "strike" | "victory";

const GENDERS = ["male", "female"] as const;
const HAIR_COLORS = ["black", "brown", "blue", "red"] as const;
const MONSTERS = [
  "slime",
  "bat",
  "mushroom",
  "skeleton",
  "orc",
  "mimic",
  "dragon",
  "golem",
  "lich",
] as const;
const PHASES = ["idle", "windUp", "strike", "victory"] as const;
const BATTLE_DELAYS = { strike: 180, victory: 420, reset: 1050 } as const;

type BattleShowcaseProps = {
  content: {
    title: string[];
    body: string;
    genderLabel: string;
    genders: string[];
    hairLabel: string;
    hairColors: string[];
    heroLabel: string;
    attack: string;
    battleStates: string[];
    monstersTitle: string;
    monstersBody: string;
    monsterNames: string[];
  };
};

function spriteStyle(path: string) {
  return {
    backgroundImage: `url(${path})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    imageRendering: "pixelated" as const,
  };
}

export function BattleShowcase({ content }: BattleShowcaseProps) {
  const [gender, setGender] = useState<HeroGender>("male");
  const [hairColor, setHairColor] = useState<HeroHairColor>("blue");
  const [phase, setPhase] = useState<BattlePhase>("idle");
  const [monsterIndex, setMonsterIndex] = useState(0);
  const timeoutIds = useRef<number[]>([]);

  const genderIndex = GENDERS.indexOf(gender);
  const hairColorIndex = HAIR_COLORS.indexOf(hairColor);
  const phaseIndex = PHASES.indexOf(phase);
  const monster = MONSTERS[monsterIndex];
  const heroFrame = phase === "strike" ? "strike" : "idle";
  const heroPath = `/sprites/v1-1/hero/${gender}-${hairColor}-${heroFrame}.png`;
  const monsterPath = `/sprites/v1-1/monsters/${monster}.png`;
  const appearanceLabel = `${content.genders[genderIndex]} ${content.hairColors[hairColorIndex]} ${content.heroLabel}`;
  const battleState = content.battleStates[phaseIndex];

  function clearBattleTimeouts() {
    timeoutIds.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutIds.current = [];
  }

  function attack() {
    if (phase !== "idle") return;

    clearBattleTimeouts();
    setPhase("windUp");
    timeoutIds.current = [
      window.setTimeout(() => setPhase("strike"), BATTLE_DELAYS.strike),
      window.setTimeout(() => setPhase("victory"), BATTLE_DELAYS.victory),
      window.setTimeout(() => setPhase("idle"), BATTLE_DELAYS.reset),
    ];
  }

  useEffect(() => {
    return () => {
      timeoutIds.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 pt-24 sm:px-6"
      aria-labelledby="battle-showcase-title"
    >
      <div className="pixel-panel overflow-hidden p-6 sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
          <div>
            <h2
              id="battle-showcase-title"
              className="font-pixel text-xl leading-relaxed font-bold sm:text-2xl"
            >
              {content.title[0]}
              <br />
              <span className="text-accent">{content.title[1]}</span>
            </h2>
            <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-muted sm:text-base">
              {content.body}
            </p>

            <div
              className="mt-8 flex justify-center border-y-2 border-line py-6"
              role="img"
              aria-label={appearanceLabel}
            >
              <span
                className="battle-showcase__preview"
                style={spriteStyle(heroPath)}
                aria-hidden="true"
              />
            </div>

            <fieldset className="mt-7">
              <legend className="font-pixel text-sm font-bold">
                {content.genderLabel}
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {GENDERS.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={gender === option}
                    onClick={() => setGender(option)}
                    className="battle-showcase__choice font-pixel text-sm"
                  >
                    {content.genders[index]}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="font-pixel text-sm font-bold">
                {content.hairLabel}
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {HAIR_COLORS.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={hairColor === option}
                    onClick={() => setHairColor(option)}
                    className="battle-showcase__choice font-pixel text-xs"
                  >
                    {content.hairColors[index]}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="border-t-2 border-line pt-8 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-10">
            <div
              className={`battle-stage battle-stage--${phase}`}
              aria-hidden="true"
            >
              <span
                className="battle-stage__hero"
                style={spriteStyle(heroPath)}
              />
              <span
                className="battle-stage__monster"
                style={spriteStyle(monsterPath)}
              />
              <span
                className="battle-stage__impact"
                style={spriteStyle("/sprites/v1-1/impact.png")}
              />
              <span className="battle-stage__victory font-pixel">
                {content.battleStates[3]}
              </span>
            </div>
            <p className="sr-only" aria-live="polite">
              {battleState}
            </p>
            <button
              type="button"
              onClick={attack}
              disabled={phase !== "idle"}
              className="pixel-btn font-pixel mt-5 inline-flex h-11 items-center bg-accent px-5 text-sm font-bold text-bg transition-transform enabled:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {content.attack}
            </button>

            <div className="mt-8">
              <h3 className="font-pixel text-base font-bold text-accent">
                {content.monstersTitle}
              </h3>
              <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-muted">
                {content.monstersBody}
              </p>
              <ul
                className="mt-5 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5"
                aria-label={content.monstersTitle}
              >
                {MONSTERS.map((monsterName, index) => (
                  <li key={monsterName}>
                    <button
                      type="button"
                      aria-pressed={monsterIndex === index}
                      onClick={() => setMonsterIndex(index)}
                      disabled={phase !== "idle"}
                      className="battle-showcase__monster-choice"
                    >
                      <span
                        className="battle-showcase__monster"
                        style={spriteStyle(
                          `/sprites/v1-1/monsters/${monsterName}.png`,
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-pixel text-[0.65rem]">
                        {content.monsterNames[index]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
