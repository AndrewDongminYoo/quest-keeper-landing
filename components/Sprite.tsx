// 4x2 스프라이트 시트(public/sprites/dungeon-sheet.png)의 셀 좌표.
const SPRITES = {
  hero: [0, 0],
  fallen: [1, 0],
  slime: [2, 0],
  skeleton: [3, 0],
  dragon: [0, 1],
  grave: [1, 1],
  coin: [2, 1],
  hit: [3, 1],
} as const;

export type SpriteName = keyof typeof SPRITES;

export function Sprite({
  name,
  size = 96,
  className = "",
  label,
}: {
  name: SpriteName;
  size?: number;
  className?: string;
  /** 의미 있는 이미지일 때만 지정. 없으면 장식으로 취급해 스크린리더에서 숨김. */
  label?: string;
}) {
  const [col, row] = SPRITES[name];
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: "url(/sprites/dungeon-sheet.png)",
        backgroundSize: "400% 200%",
        backgroundPosition: `${(col * 100) / 3}% ${row * 100}%`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
      }}
    />
  );
}
