import { PRODUCT_NAME, type Locale } from "./site";

export const dict = {
  ko: {
    meta: {
      title: `${PRODUCT_NAME} | 할 일을 사냥하는 픽셀 RPG 투두`,
      description:
        "미룬 할 일이 몬스터가 되어 자라납니다. 마감 전에 완료하면 용사가 단칼에 처치! 계정도 광고도 없고 데이터가 기기 안에 머무는 픽셀 RPG 투두 앱.",
    },
    nav: { langLabel: "언어 선택", brand: PRODUCT_NAME },
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
    showcase: {
      title: ["나만의 용사로,", "오늘의 퀘스트에 맞서세요"],
      body: "직접 성별과 머리색을 고른 용사가, 완료 순간 검을 휘둘러 몬스터를 처치합니다.",
      genderLabel: "성별",
      genders: ["남성", "여성"],
      hairLabel: "머리색",
      hairColors: ["검정", "갈색", "파랑", "빨강"],
      heroLabel: "용사",
      attack: "공격",
      battleStates: ["전투 준비", "공격 준비 중", "공격 중", "승리"],
      monstersTitle: "9종의 몬스터가 기다립니다",
      monstersBody:
        "퀘스트의 난이도에 따라 슬라임부터 리치까지, 서로 다른 몬스터가 던전에 나타납니다. 몬스터를 누르면 왜 그 모습이 되었는지 알려 줍니다.",
      monsterNames: [
        "슬라임",
        "박쥐",
        "버섯",
        "스켈레톤",
        "오크",
        "미믹",
        "드래곤",
        "골렘",
        "리치",
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
      title: ["가볍고, 조용하고,", "기기 안에서"],
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
          title: "단축어와 Siri",
          body: "iOS 단축어와 Siri로 앱을 열지 않고도 퀘스트를 만들 수 있습니다.",
        },
        {
          title: "한국어와 영어",
          body: "모든 화면과 알림, 위젯이 기기 언어에 맞춰 표시됩니다.",
        },
        {
          title: "계정도 광고도 없음",
          body: "단일 기기에서 사용하며, 모든 앱 데이터는 기기 안에만 저장됩니다.",
        },
      ],
    },
    privacy: {
      title: "앱 데이터는 기기 안에 남습니다",
      body: "계정 없음, 개발자 서버 없음, 광고 없음, 추적 없음. 선택적 후원은 가격 조회와 결제 처리에만 Apple App Store와 통신합니다.",
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
          q: "용사 외형을 바꿀 수 있나요?",
          a: "네. 성별과 네 가지 머리색을 직접 골라 나만의 용사 외형을 만들 수 있습니다.",
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
      title: `${PRODUCT_NAME} | The pixel RPG to-do list`,
      description:
        "Procrastinated tasks grow into monsters. Finish before the deadline and your hero slays them in one strike. A local-first pixel RPG to-do app with no accounts and no ads.",
    },
    nav: { langLabel: "Select language", brand: PRODUCT_NAME },
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
    showcase: {
      title: ["Your hero, your way,", "ready for today's quest"],
      body: "Choose your hero's gender and hair color directly, then watch them swing their sword when you complete a quest.",
      genderLabel: "Gender",
      genders: ["Male", "Female"],
      hairLabel: "Hair color",
      hairColors: ["Black", "Brown", "Blue", "Red"],
      heroLabel: "hero",
      attack: "Attack",
      battleStates: ["Ready to fight", "Winding up", "Attacking", "Victory"],
      monstersTitle: "Nine monsters await",
      monstersBody:
        "From slimes to liches, different monsters appear in your dungeon as quests become more challenging. Tap a monster to find out why it looks the way it does.",
      monsterNames: [
        "Slime",
        "Bat",
        "Mushroom",
        "Skeleton",
        "Orc",
        "Mimic",
        "Dragon",
        "Golem",
        "Lich",
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
      title: ["Light, quiet,", "on-device"],
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
          title: "Shortcuts and Siri",
          body: "Create a quest from Shortcuts or Siri without opening the app.",
        },
        {
          title: "Korean and English",
          body: "Every screen, notification, and widget follows your device language.",
        },
        {
          title: "No accounts, no ads",
          body: "Built for one device. All your app data stays on your device.",
        },
      ],
    },
    privacy: {
      title: "Your app data stays on your device",
      body: "No accounts, developer servers, ads, or tracking. The optional Tip Jar contacts Apple's App Store only to load prices and process purchases.",
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
          a: `${PRODUCT_NAME} is available for iOS on the App Store.`,
        },
        {
          q: "Can I customize my hero?",
          a: "Yes. You can choose your hero's gender and one of four hair colors to make the appearance your own.",
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
