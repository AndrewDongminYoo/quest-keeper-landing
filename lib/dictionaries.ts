import type { Locale } from "./site";

export const dict = {
  ko: {
    meta: {
      title: "Quest Keeper | 할 일을 사냥하는 픽셀 RPG 투두",
      description:
        "미룬 할 일이 몬스터가 되어 자라납니다. 마감 전에 완료하면 용사가 단칼에 처치! 계정도 광고도 없는 완전한 오프라인 픽셀 RPG 투두 앱.",
    },
    nav: { langLabel: "언어 선택", brand: "Quest Keeper" },
    hero: {
      title: ["할 일을 사냥하는", "픽셀 RPG 투두"],
      sub: "미룬 할 일은 몬스터가 되어 자라나고, 마감 전에 끝내면 용사가 단칼에 처치합니다.",
      primary: "App Store에서 다운로드",
      secondary: "동작 방식 보기",
      sceneLabel: "픽셀 용사가 슬라임 몬스터와 마주보고 있는 장면",
    },
    growth: {
      title: "몬스터는 마감을 먹고 자랍니다",
      body: "중요도와 남은 시간이 몬스터의 세기를 정합니다. 여유로울 땐 슬라임이지만, 미룰수록 스켈레톤이 되고 드래곤이 됩니다.",
      stages: [
        { name: "슬라임", label: "여유", sprite: "slime" },
        { name: "스켈레톤", label: "임박", sprite: "skeleton" },
        { name: "드래곤", label: "위험", sprite: "dragon" },
      ],
    },
    loop: {
      title: "하루가 곧 던전입니다",
      cells: [
        {
          title: "마감 전 완료는 원히트킬",
          body: "제때 끝낸 할 일은 용사가 단칼에 베어냅니다. 완료의 손맛을 픽셀 연출로 돌려드립니다.",
        },
        {
          title: "놓친 일은 오늘의 무덤으로",
          body: "실패는 잠깐 보였다가, 다음 날엔 깔끔히 초기화됩니다.",
        },
        {
          title: "내일 도전하기",
          body: "부담 없이 마감을 미루고 새 던전에서 다시 도전하세요.",
        },
      ],
    },
    features: {
      title: ["가볍고, 조용하고,", "오프라인"],
      rows: [
        {
          title: "홈 화면 위젯",
          body: "앱을 열지 않아도 오늘의 던전과 용사 상태를 확인할 수 있습니다.",
        },
        {
          title: "마감 알림",
          body: "필요한 순간에만 울리는 로컬 알림. 원격 푸시는 쓰지 않습니다.",
        },
        {
          title: "계정도 광고도 없음",
          body: "완전한 오프라인, 단일 기기. 모든 데이터는 기기 안에만 저장됩니다.",
        },
      ],
    },
    privacy: {
      title: "데이터는 당신의 기기를 떠나지 않습니다",
      body: "계정 없음, 서버 없음, 광고 없음, 추적 없음. Apple 기준 “수집된 데이터 없음”에 해당하는 앱입니다.",
      link: "개인정보처리방침 읽기",
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          q: "계정이 필요한가요?",
          a: "아니요. 회원가입도 로그인도 없습니다. 앱을 설치하면 바로 사용할 수 있습니다.",
        },
        {
          q: "데이터는 어디에 저장되나요?",
          a: "모든 데이터는 기기 안에만 저장됩니다. 서버로 전송되지 않으며, Apple 기준 “수집된 데이터 없음”에 해당합니다.",
        },
        {
          q: "어떤 기기에서 쓸 수 있나요?",
          a: "iOS용 앱으로, App Store에서 다운로드할 수 있습니다.",
        },
        {
          q: "할 일을 제때 못 끝내면 어떻게 되나요?",
          a: "미룰수록 몬스터가 강해집니다. 마감을 놓친 할 일은 오늘의 무덤에 잠깐 보였다가 다음 날 깔끔히 초기화되고, 부담 없이 다시 도전할 수 있습니다.",
        },
      ],
    },
    footer: {
      developer: "만든 사람",
      developerName: "Dongmin Yu (Andrew)",
      contact: "문의",
      links: "문서",
      privacy: "개인정보처리방침",
      terms: "서비스 이용약관",
      fontCredit: "Galmuri 폰트 (SIL OFL)",
    },
    legal: {
      privacyTitle: "개인정보처리방침",
      termsTitle: "서비스 이용약관",
      back: "홈으로 돌아가기",
    },
  },
  en: {
    meta: {
      title: "Quest Keeper | The pixel RPG to-do list",
      description:
        "Procrastinated tasks grow into monsters. Finish before the deadline and your hero slays them in one strike. A fully offline pixel RPG to-do app with no accounts and no ads.",
    },
    nav: { langLabel: "Select language", brand: "Quest Keeper" },
    hero: {
      title: ["Hunt your to-dos in", "a pixel RPG"],
      sub: "Procrastinated tasks grow into monsters. Finish before the deadline and your hero slays them in one strike.",
      primary: "Download on the App Store",
      secondary: "See how it works",
      sceneLabel: "A pixel hero facing a slime monster",
    },
    growth: {
      title: "Monsters feed on your deadline",
      body: "Importance and time remaining decide how strong a monster is. With time to spare it stays a slime. Keep stalling and it becomes a skeleton, then a dragon.",
      stages: [
        { name: "Slime", label: "Calm", sprite: "slime" },
        { name: "Skeleton", label: "Closing in", sprite: "skeleton" },
        { name: "Dragon", label: "Danger", sprite: "dragon" },
      ],
    },
    loop: {
      title: "Every day is a dungeon",
      cells: [
        {
          title: "Finish in time for a one-hit kill",
          body: "Complete a task before its deadline and your hero cuts it down in a single strike, with pixel flair.",
        },
        {
          title: "Missed tasks rest in today's grave",
          body: "Failures show briefly, then reset cleanly the next day.",
        },
        {
          title: "Retry tomorrow",
          body: "Push a deadline without guilt and take it on again in a fresh dungeon.",
        },
      ],
    },
    features: {
      title: ["Light, quiet,", "offline"],
      rows: [
        {
          title: "Home screen widget",
          body: "Check today's dungeon and your hero's state without opening the app.",
        },
        {
          title: "Deadline alerts",
          body: "Local notifications that fire only when needed. No remote push.",
        },
        {
          title: "No accounts, no ads",
          body: "Fully offline, single device. All your data stays on your device.",
        },
      ],
    },
    privacy: {
      title: "Your data never leaves your device",
      body: "No accounts, no servers, no ads, no tracking. Under Apple's App Privacy standards this app qualifies as “Data Not Collected.”",
      link: "Read the privacy policy",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need an account?",
          a: "No. There is no sign-up and no login. Install the app and start right away.",
        },
        {
          q: "Where is my data stored?",
          a: "Everything stays on your device. Nothing is sent to a server, and the app qualifies as “Data Not Collected” under Apple's App Privacy standards.",
        },
        {
          q: "Which devices are supported?",
          a: "Quest Keeper is available for iOS on the App Store.",
        },
        {
          q: "What happens if I miss a deadline?",
          a: "The longer you stall, the stronger the monster grows. A missed task rests briefly in today's grave, resets cleanly the next day, and you can take it on again.",
        },
      ],
    },
    footer: {
      developer: "Developer",
      developerName: "Dongmin Yu (Andrew)",
      contact: "Contact",
      links: "Documents",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      fontCredit: "Galmuri font (SIL OFL)",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
      back: "Back to home",
    },
  },
} satisfies Record<Locale, unknown>;

export type Dict = (typeof dict)[Locale];
