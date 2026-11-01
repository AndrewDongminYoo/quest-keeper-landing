"use client";

import { useState } from "react";
import { Sprite } from "@/components/Sprite";
import type { Locale } from "@/lib/site";

const copy = {
  ko: { demo: "체험용 던전 · 저장되지 않아요", hero: "용사: Leo", wins: "누적 승리", titles: ["책 두 페이지 읽기", "산책 다녀오기", "프로젝트 첫 줄 쓰기", "팔굽혀펴기 한 번"], complete: "완료", retry: "내일 도전하기", tomorrow: "내일의 던전에서 만나요", left: "3시간 남음", calm: "천천히 시작해도 괜찮아요", guide: "한 달짜리 퀘스트? 오늘 할 만큼만 나눠봐요, 용사님!", reset: "다시 체험하기", hint: "완료를 눌러 작은 승리를 만나보세요." },
  en: { demo: "Interactive demo · not saved", hero: "Hero: Leo", wins: "Total victories", titles: ["Read two pages", "Go for a walk", "Write the first line", "Do one pushup"], complete: "Complete", retry: "Try again tomorrow", tomorrow: "See you in tomorrow’s dungeon", left: "3 hours left", calm: "It’s okay to start small", guide: "Month-long quest? Chunk it into a little win for today, hero!", reset: "Reset demo", hint: "Complete a quest. Meet your next small win." },
};

export function DungeonPreview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [completed, setCompleted] = useState<number[]>([3]);
  const [retried, setRetried] = useState(false);
  return (
    <div className="dungeon-preview">
      <div className="flex items-center justify-between gap-3 px-5 py-3 text-[11px] text-muted">
        <span>{t.demo}</span><span aria-hidden="true">◆ ◆ ◆</span>
      </div>
      <div className="dungeon-hud">
        <p className="font-pixel text-lg font-bold">TODO SLAYER</p>
        <div className="mt-3 flex items-center justify-between gap-3 text-xs">
          <span className="flex items-center gap-2"><Sprite name="hero" size={32} />{t.hero}</span>
          <span className="text-victory" aria-live="polite">{t.wins}: {12 + completed.length}</span>
        </div>
      </div>
      <ul>
        {t.titles.map((title, index) => {
          const won = completed.includes(index);
          const missed = index === 1;
          return (
            <li key={title} className={`dungeon-floor ${won ? "dungeon-floor--won" : ""}`}>
              <span className="dungeon-floor__rail" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-medium ${won ? "text-victory" : missed ? "text-muted" : "text-ink"}`}>{title}</p>
                <div className="mt-2 min-h-8 flex items-center">
                  {won ? <span className="font-pixel text-xs text-victory">{t.complete} +1</span> : missed ? (
                    retried ? <span className="text-xs text-guide">{t.tomorrow}</span> : <button type="button" onClick={() => setRetried(true)} className="dungeon-action text-guide">{t.retry}</button>
                  ) : <button type="button" className="dungeon-action text-hero" onClick={() => setCompleted((current) => [...current, index])} aria-label={`${title} — ${t.complete}`}>{t.complete}</button>}
                </div>
              </div>
              <div className="flex w-20 shrink-0 flex-col items-center gap-1">
                <Sprite name={won ? "coin" : missed ? retried ? "hero" : "grave" : index === 2 ? "dragon" : "slime"} size={48} />
                <span className={`font-pixel text-[10px] ${index === 2 && !won ? "text-danger" : "text-muted"}`}>{won ? "+1 WIN" : missed ? "—" : index === 2 ? "LEVEL 5" : "LEVEL 1"}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mx-4 my-4 border-l-2 border-guide bg-bg p-3 text-xs leading-relaxed text-guide">{t.guide}</div>
      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 text-[11px] text-muted">
        <span>{t.hint}</span>
        <button type="button" className="shrink-0 underline underline-offset-4 hover:text-ink" onClick={() => { setCompleted([3]); setRetried(false); }}>{t.reset}</button>
      </div>
    </div>
  );
}
