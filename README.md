# 📝 Personal Project: League of Legends 정보 제공 웹 애플리케이션

### 🕰️ 개발 기간

25.03.10 ~ 25.03.14

### ⚙️ 기술 스택

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tanstackquery-black">

### 🖥 데모

[League of Legends 정보 제공](https://lolpedia-lol.vercel.app/)

---

# 📢 프로젝트 소개

League of Legends의 챔피언과 아이템에 대한 정보를 제공하는 웹 애플리케이션입니다.

Next.js에서 제공하는 4가지 기법의 렌더링을 페이지마다 모두 적용해보았습니다.

## 목적

- 실무에서 자주 사용하는 Next.js와 Typescript 경험 쌇기
- 동적 라우팅, App Router, 레이아웃 구성, Route Handle 등 Next.js의 핵심 기능 다뤄보기
- TypeScript를 사용해보면서 타입 안정성 향상되는 경험해보기

## 적용한 4가지 렌더링 기법

1️⃣ SSR - 챔피언 상세 페이지

2️⃣ SSG - 전체 아이템 목록 페이지

3️⃣ ISR - 전체 챔피언 목록 페이지

4️⃣ CSR - 무료 챔피언 로테이션 페이지

## 주요 기능

1️⃣ 다크 모드

2️⃣ 로딩 및 에러 핸들링

---

# 💻 기능 소개

## 1️⃣ 다크 모드

사용자 환경에 맞춰 라이트/다크 모드 전환이 가능합니다.

상단 우측에 있는 버튼을 클릭하면 모드를 변경할 수 있습니다.

![다크모드](https://github.com/user-attachments/assets/62dac07d-867b-496a-87ec-22044765a07c)


## 2️⃣ 로딩 및 에러 핸들링

데이터가 아직 로딩 중이거나 잘 불러와지지 않았을 때,

사용자에게 발생한 상황을 시각적으로 보여줍니다.

![로딩 핸들링](https://github.com/user-attachments/assets/5bbf90ca-4d71-471a-b689-74fdf991421f)

![에러 핸들링](https://github.com/user-attachments/assets/fa418894-9870-4363-b1e0-073c097b124a)


---

# 🔥 트러블 슈팅

[다크모드 버튼을 누른 뒤 새로고침을 하면 에러가 발생하는 문제](https://home1204.tistory.com/133)

---

# 🌟 느낀점

이번 프로젝트를 통해 Next.js와 Typescript에 한걸음 가까워질 수 있었습니다. Typescript로 인해 빨간 줄을 수없이 마주했었는데, 지금은 오히려 빨간 줄을 마주하는 것을 고마워하고 있습니다. Typescript를 사용하면서 코드의 안전성이 더욱 높아졌다는 느낌을 받을 수 있었습니다. Next.js를 이용하면서 App Routing의 편리함을 느꼈습니다. 폴더와 page.tsx만 만들어 주면 바로 route를 만들 수 있으며, 페이지마다 원하는 Loading UI와 Error UI 설정할 수 있다는 점에서 편리함을 느꼈습니다. 이제 다시 React와 Javascript만 쓰던 시절로 돌아갈 수 없을 정도로 Next.js와 Typescript의 이점을 크게 느꼈습니다.

---

# 🧬 프로젝트 구조

```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📜ChampionCard.tsx
 ┃ ┃ ┗ 📜ChampionList.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜ItemCard.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜ThemeToggleButton.tsx
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜ChampionDetailLoading.tsx
 ┃ ┃ ┣ 📜ChampionsLoading.tsx
 ┃ ┃ ┣ 📜ErrorPage.tsx
 ┃ ┃ ┣ 📜Skeleton.tsx
 ┃ ┃ ┗ 📜Text.tsx
 ┣ 📂constants
 ┃ ┣ 📜number.ts
 ┃ ┣ 📜queryKeys.ts
 ┃ ┣ 📜routerPath.ts
 ┃ ┗ 📜url.ts
 ┣ 📂hooks
 ┃ ┗ 📜useQuery.ts
 ┣ 📂providers
 ┃ ┣ 📜TQProvider.tsx
 ┃ ┗ 📜ThemeProvider.tsx
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┣ 📜Item.ts
 ┃ ┗ 📜props.ts
 ┗ 📂utils
 ┃ ┗ 📜serverApi.ts
```
