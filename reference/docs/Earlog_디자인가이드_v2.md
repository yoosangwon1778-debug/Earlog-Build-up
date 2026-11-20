# Earlog 디자인 가이드 (v2 · 라이트 기본)

코딩 작업을 할 때 보는 정리 문서예요. v2 라이트 화면에 실제로 쓴 값을 기준으로 정리했어요.

- 디자인 캔버스: https://claude.ai/artifact/Rvu7wy4bgSVSdc1jHMQ1VV
  - 라이트 화면 줄 (가장 아래, `*V2Light`) + 그 위의 달력 라이트(CalendarV2Light) + 왼쪽의 랜딩 v3(LandingV3)
  - 다크 v2 화면은 그 위 줄에 남아 있어요 (시간 남을 때 작업용)
- 서비스 기획서: https://claude.ai/artifact/LPSahR4vwNbNmgoHnNn8Jf
- 기준 화면 폭: 데스크탑 1440px

## 0. 확정된 결정

| 항목 | 결정 |
|---|---|
| 기본 테마 | **라이트**. 다크와 테마 전환은 "시간 남을 때" 항목 |
| 디자인 | **v2 음악 앱 스타일** (왼쪽 사이드바, 커버 중심 카드·목록) |
| 로고 | **B1 톤암 "l"** + LP판 "o". 심볼은 LP판 "o" |
| 랜딩 | **LandingV3** 확정. 단, 문구와 구성은 수정 여지 있음 |
| 참고 이미지 | GitHub용 `earlog-design-light/` 폴더 (아래 1번 표의 PNG) |

---

## 1. 화면 목록과 라우팅 제안

| 화면 | 캔버스 보드 | 참고 이미지 | 경로 제안 | 비고 |
|---|---|---|---|---|
| S0 랜딩 | LandingV3 | `00_landing.png` | `/` | 수정 여지 있음 (아래 2번) |
| S1 로그인 | MainV2Light | `01_login.png` | `/login` | 좌: 브랜드 소개 / 우: 폼 |
| S2 회원가입 | SignupV2Light | `02_signup.png` | `/signup` | 비밀번호 확인 오류 상태 포함 |
| S3 달력 | CalendarV2Light | `03_calendar.png` | `/calendar` | 어제의 한 곡, 월 리포트, 커버 달력 |
| S3-1 타임라인 | TimelineV2Light | `04_timeline.png` | `/timeline` | 월 플레이리스트, 검색, 장르 필터 |
| S4 기록 쓰기·수정 | WriteV2Light | `05_write.png` | `/write?date=YYYY-MM-DD` | 지역·장르·분위기 단일 선택, 상황 태그 |
| S5 하루 상세 | DetailV2Light | `06_detail.png` | `/records/:date` | 이전·다음, 같은 가수의 다른 기록 |
| S5-1 삭제 확인 | DeleteV2Light | `07_delete-confirm.png` | 상세 위 모달 | |
| S6 프로필·통계 | ProfileV2Light | `08_profile.png` | `/profile` | |
| S7 가수별 보관함 | ArtistV2Light | `09_archive-artist.png` | `/artists` (`?name=`) | 왼쪽 가수 리스트 + 오른쪽 곡 패널 |
| S7 장르별 보관함 | GenreV2Light | `10_archive-genre.png` | `/genres` (`?genre=`) | 장르 타일 + 커버 그리드, 빈 상태 |

흐름: 랜딩 → 로그인(↔ 회원가입) → 달력. 사이드바에서 달력·타임라인·가수별·장르별·프로필로 이동. 달력·타임라인·보관함에서 기록을 누르거나 쓰기에서 저장하면 상세로. 상세에서 수정(쓰기 화면) / 삭제(모달).

---

## 2. 랜딩 (LandingV3) 구성

위에서 아래 순서. 내용은 바뀔 수 있어요.

1. **앨범 진열대 히어로** — 로고, 한 줄 소개, 시작하기 버튼, 커버가 꽂힌 진열대
2. **하루는 이렇게 남아요** — 기록 하나(사진·곡·분위기·이야기·태그) 예시
3. **가수별 / 장르별** — 보관함 두 가지 미리보기
4. **한 달의 색** — 한 달 달력을 분위기 단색으로 채운 모습 (10월 기록 15개 예시)
5. **CTA** — 시작하기

---

## 3. 로고

- 확정안: **B1 톤암 "l"** (글자 로고의 "l"이 턴테이블 바늘처럼 꺾여 LP판 "o" 위에 놓임)
- 심볼(앱 아이콘·파비콘): **LP판 "o"** 만 떼어 사용
- 파일: `Earlog_logo.zip`
  - `B1_tonearm_light.svg` — **기본 (라이트 배경용)**
  - `B1_tonearm_dark_sidebar.svg`, `B1_tonearm_dark.svg` — 다크용 (시간 남을 때)
  - `A_symbol*.svg`, `A_app_icon*.svg`, `A_symbol_small.svg`(16~32px용)
- **주의**: 톤암과 LP판 사이의 틈은 배경색으로 칠해져 있어요. 로고를 놓는 배경색이 바뀌면 SVG 안의 그 색(knockout)도 같이 바꿔야 해요.
- 로고 색 (라이트): 글자 Navy `#242566` / LP `#6646AF`
- 사이드바 크기: 132 × 43px

---

## 4. 색 토큰 (라이트 기본)

### 4-1. 기본

| 토큰 | 값 | 용도 |
|---|---|---|
| `--bg` | `#F6F5FA` | 페이지 배경 |
| `--surface-side` | `#FFFFFF` | 사이드바, 로그인 폼 패널 |
| `--surface` | `#FFFFFF` | 카드, 패널, 모달 |
| `--surface-low` | `#FFFFFF` | 리스트 행, 빈 달력 칸 |
| `--field` | `#FFFFFF` | 입력칸 |
| `--border` | `#E7E5EF` | 카드·입력 테두리 |
| `--border-subtle` | `#EDEBF3` | 행 테두리, 구분선 |
| `--border-strong` | `#DCD8E8` | 보조 버튼 테두리, 점선 |
| `--text` | `#16151F` | 본문·제목 |
| `--text-2` | `#3A3848` | 라벨, 긴 본문 |
| `--text-sub` | `#5E5C6E` | 보조 정보 |
| `--text-muted` | `#6E6B80` | 메타, 날짜, 섹션 라벨 |
| `--accent` | `#5B3FD9` | 주 버튼 배경, 강조 글자, 링크 |
| `--accent-soft` | `#EFEBFD` | 활성 메뉴, 선택 배경 |
| `--danger` | `#C42B3B` | 오류 글자, 삭제 버튼, 일요일 |
| 선택 칩(반전) | 배경 `#16151F` / 글자 `#FFFFFF` | 세그먼트·필터 선택 상태 |

고정 색: 카카오 버튼 `#FEE500` / 글자 `#191919` (규정색, 테마와 무관)

### 4-2. 분위기 (커버 그라데이션 `135deg, a → b`)

| 분위기 | id | a | b |
|---|---|---|---|
| 잔잔 | CALM | `#5B74E0` | `#1F2660` |
| 설렘 | FLUTTER | `#E0689F` | `#6B2A8F` |
| 신남 | EXCITED | `#F07A35` | `#A3223F` |
| 집중 | FOCUS | `#2FA87C` | `#155552` |
| 울적 | GLOOMY | `#77829A` | `#2A303C` |

- 커버 위 글자는 반투명 어두운 칩(`rgba(10,9,16,.55)`) 위에 흰 글자로 올려요.
- 이모지는 쓰지 않아요. 분위기는 **색 점 + 이름**으로 표시.
- 랜딩 "한 달의 색"은 그라데이션 대신 a 색 단색을 써요.

### 4-3. 장르 타일 (현재 디자인 값)

| 장르 | a | b |
|---|---|---|
| K-POP | `#C2417A` | `#4A1640` |
| J-POP | `#D9622B` | `#5A1E14` |
| 발라드 | `#4B63C9` | `#1A2152` |
| 인디 | `#2E9C78` | `#0F3B33` |
| 힙합 | `#6B6F80` | `#1C1E26` |
| 재즈 | `#A9832A` | `#3D2A0C` |
| 팝 | `#8B5CF6` | `#2E1A66` |

> ⚠️ 기획(노션)과 다름: 기획은 **지역(K·J·GLOBAL) + 장르 8개(발라드·댄스·힙합·R&B·인디·록·OST·기타)** 구조예요. 구현은 기획 기준을 따르고, 장르 타일 색은 그에 맞게 다시 정해야 해요 (아래 10번).

---

## 5. 타이포그래피

- 본문·한글: **Noto Sans KR** 400 / 500 / 700
- 숫자·날짜·영문 헤드(2026. 11, SUN, 12곡 등): **Space Grotesk** 500 / 700
- 불러오기: `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap`

| 단계 | 크기 | 굵기 | 쓰인 곳 |
|---|---|---|---|
| display | 52px | 700, 자간 -1.5px | 상세 곡명 |
| hero | 40–44px | 700, 자간 -1px | 어제의 한 곡, 로그인 문구 |
| page title | 32px | 700, 자간 -0.5px | 페이지 제목, 월 표시 |
| section | 26px | 700 | 패널 제목, 장르명 |
| card title | 20–24px | 700 | 타임라인 곡명, 장르 타일 |
| h3 | 16–18px | 700 | 카드 제목 |
| body | 15px | 400–500 | 본문, 입력값, 메뉴 |
| sub | 14px | 400–500 | 보조 설명, 버튼(작은) |
| meta | 13px | 400–500 | 라벨, 날짜, 태그 |
| caption | 12px | 500–700 | 요일, 칩, 섹션 라벨(자간 1px) |
| tiny | 11px | 400–700 | 달력 칸 가수명, "오늘" 배지 |

본문 줄간격 1.6, 긴 글(상세 이야기) 1.85.

---

## 6. 간격 · 모양 · 그림자

- **모서리**: 버튼·칩·검색창·세그먼트 `999px`(알약) / 큰 카드 `24px`(상세 28px) / 카드·리스트 행·장르 타일 `20px` / 커버(큰) `16px` / 달력 칸 `14px` / 입력칸·메뉴 항목 `12px` / 작은 커버 `8–10px`
- **간격**: 메인 영역 패딩 `32px 40px 48px` / 섹션 사이 `24px` / 카드 사이 `14–20px` / 카드 안 `8–12px` / 카드 패딩 `24px`(큰 카드 28–32px)
- **크기**: 사이드바 248px / 메뉴 항목 높이 46px / 버튼 높이 48–52px / 입력칸 50px / 최소 터치 영역 44px / 달력 칸 높이 118px, 7열 간격 10px
- **그림자**: 카드에 `0 10px 30px rgba(22,21,31,.05)`
- **LP 장식**: 커버 모서리에 흰색 반투명 동심원 SVG (선 `rgba(255,255,255,.12~.2)`), 상세·로그인 배경에 은은한 동심원

---

## 7. 레이아웃 규칙

- 앱 화면: `사이드바(flex: 1 1 248px)` + `메인(flex: 999 1 560px; min-width: 0)`을 `flex-wrap: wrap`으로 배치
  - 이미지로 굳힐 때 이 비율 때문에 사이드바가 찌그러진 적이 있어요. 실제 구현에서는 `display: grid; grid-template-columns: 248px 1fr`이 더 단순해요.
- 로그인·가입: 좌우 2분할(`flex: 1 1 520px` / `1 1 480px`)
- 카드 그리드: `grid-template-columns: repeat(auto-fill, minmax(180~196px, 1fr))`
- 달력: `repeat(7, minmax(0, 1fr))`
- 높이는 `100vh` 대신 `min-height`로 (빈 여백 방지)

---

## 8. 공통 컴포넌트 목록

| 컴포넌트 | 변형 / 상태 | 쓰이는 화면 |
|---|---|---|
| `Sidebar` | 활성 메뉴(달력·타임라인·가수별·장르별·프로필), 최근 기록 카드, 프로필·로그아웃 | 앱 화면 전체 |
| `MonthNav` | 이전/다음 원형 버튼 + `2026. 11` | 달력, 타임라인 |
| `Segmented` | 선택 = 반전 칩 | 달력/타임라인 전환, 정렬 |
| `Button` | primary(보라 알약) / secondary(테두리) / danger-outline / danger / kakao | 전체 |
| `TextField` | label + input, 오류 상태(빨간 테두리 + 안내문) | 로그인, 가입, 쓰기 |
| `Chip` | 분위기 칩(색 점), 지역·장르 칩, 상황 태그(#), 필터 칩(선택=반전) | 쓰기, 상세, 타임라인 |
| `CoverArt` | 사진 또는 분위기 그라데이션 + LP 장식, 크기 22/44/48/56/76/150/200/420 | 전체 |
| `CalendarCell` | 기록 있음(커버+곡명) / 빈 날 / 오늘(+기록하기) / 다른 달 | 달력 |
| `RecordCard` | 날짜·커버·칩·곡명·이야기·태그 | 타임라인 |
| `ArtistRow` | 순위, 겹친 커버 3장, 요약, 분위기 막대, 곡 수 / 선택 상태 | 가수별 |
| `GenreTile` | 장르 그라데이션, 곡 수 / 선택 링 | 장르별 |
| `StatCard` | 큰 숫자(Space Grotesk) + 라벨 | 달력, 프로필 |
| `MoodBar` | 분위기 비율 가로 막대 + 범례 | 달력 리포트, 가수별, 프로필 |
| `Modal` | 삭제 확인 (커버 미리보기 포함) | 상세 |
| `EmptyState` | 점선 박스 + 안내 + 기록하기 버튼 | 타임라인 필터, 장르별 |

---

## 9. 데이터 모델 (기획 기준)

```ts
type Mood = 'CALM' | 'FLUTTER' | 'EXCITED' | 'FOCUS' | 'GLOOMY';
type Region = 'K' | 'J' | 'GLOBAL';
type Genre = '발라드' | '댄스' | '힙합' | 'R&B' | '인디' | '록' | 'OST' | '기타';

interface Record {
  id: string;
  userId: string;
  date: string;        // 'YYYY-MM-DD' — 사용자당 하루 1개 (userId + date 유일)
  photoUrl?: string;   // 장면 사진. 없으면 분위기 그라데이션 커버
  song: string;
  artist: string;
  region: Region;
  genre: Genre;
  mood: Mood;
  story: string;
  tags: string[];      // 상황 태그 (#출근길, #새벽 …)
  createdAt: string;
  updatedAt: string;
}
```

- 예) 아이유 「밤편지」 → `region: 'K', genre: '발라드', mood: 'CALM', tags: ['새벽']`
- 가수별·장르별 보관함, 월 리포트, 프로필 통계는 모두 Record 목록에서 계산 (별도 저장 X)
- 같은 날짜로 다시 저장하면 수정으로 처리

---

## 10. CSS 변수 (바로 붙여 넣기용)

```css
:root {
  --bg: #F6F5FA;
  --surface-side: #FFFFFF;
  --surface: #FFFFFF;
  --surface-low: #FFFFFF;
  --field: #FFFFFF;
  --border: #E7E5EF;
  --border-subtle: #EDEBF3;
  --border-strong: #DCD8E8;
  --text: #16151F;
  --text-2: #3A3848;
  --text-sub: #5E5C6E;
  --text-muted: #6E6B80;
  --accent: #5B3FD9;
  --accent-text: #5B3FD9;
  --accent-soft: #EFEBFD;
  --accent-line: #5B3FD9;
  --danger: #C42B3B;
  --danger-bg: #C42B3B;
  --sunday: #C42B3B;
  --invert-bg: #16151F;
  --invert-text: #FFFFFF;

  --mood-calm-a: #5B74E0;    --mood-calm-b: #1F2660;
  --mood-flutter-a: #E0689F; --mood-flutter-b: #6B2A8F;
  --mood-excited-a: #F07A35; --mood-excited-b: #A3223F;
  --mood-focus-a: #2FA87C;   --mood-focus-b: #155552;
  --mood-gloomy-a: #77829A;  --mood-gloomy-b: #2A303C;

  --shadow-card: 0 10px 30px rgba(22, 21, 31, .05);

  --radius-pill: 999px;
  --radius-xl: 24px;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-sm: 12px;

  --font-body: 'Noto Sans KR', sans-serif;
  --font-num: 'Space Grotesk', 'Noto Sans KR', sans-serif;
}
```

처음부터 색을 전부 변수로 쓰면, 나중에 다크를 붙일 때 `[data-theme="dark"]` 블록만 추가하면 돼요 (부록 참고).

---

## 11. 작업 순서

**작업 절차**

| 단계 | 할 일 | 상태 |
|---|---|---|
| 1 | 기획과 화면 목록 정리 | 완료 |
| 2 | 로고와 색·글꼴 결정 | 완료 |
| 3 | 화면 디자인 (라이트 11개) | 완료 |
| 4 | 공통 요소: 사이드바, 버튼, 커버 카드, 태그 | 다음 |
| 5 | 화면 마크업 (아래 순서) | |
| 6 | 기록 데이터 연결: 쓰기·수정·삭제 | |
| 7 | 자동 정리: 보관함, 월 리포트, 통계 | |
| 8 | 로그인 연결 | |
| 9 | 점검과 배포 | |

**화면 제작 순서**

| 순서 | 화면 | 이 화면에서 만드는 것 |
|---|---|---|
| 1 | S3 달력 | 사이드바, 월 이동, 커버 달력 칸, 월 리포트 |
| 2 | S4 기록 쓰기 | 입력 폼, 사진 업로드, 지역·장르·분위기 칩, 태그 |
| 3 | S5 상세, S5-1 삭제 | 큰 커버, 이전·다음, 수정·삭제, 모달 |
| 4 | S3-1 타임라인 | 기록 카드 목록, 검색, 장르 필터 |
| 5 | S7 보관함 (가수별·장르별) | 가수 리스트, 장르 타일, 빈 상태 |
| 6 | S6 프로필·통계 | 통계 카드, 분위기 막대 |
| 7 | S1 로그인, S2 회원가입 | 폼, 오류 상태, 카카오 버튼 |
| 8 | S0 랜딩 | 다른 화면 요소를 가져와 조립 |

기술: React(Vite) + React Router로 바로 시작. 데이터는 당분간 localStorage, 서버·배포는 미정.

---

## 12. 남은 작업 / 확인할 것

- [ ] 장르 체계를 기획 기준(지역 + 장르 8개)으로 맞추고, 쓰기·타임라인 필터·장르별 보관함 화면 반영
- [ ] 보관함 구성, 사이드바(기획은 상단 메뉴), 랜딩 추가 — 노션 기획과 맞추기
- [ ] 사진 업로드 시 커버를 사진으로 교체하는 규칙 (사진 위 글자는 어두운 칩 위에)
- [ ] 가수 검색, 타임라인 검색 실제 동작
- [ ] 로고 SVG 다듬기 (톤암 각도, 곡선 정리)
- [ ] 서버·데이터 저장 방식, 배포 방법 정하기

---

## 부록. 시간 남을 때

본 단계에는 넣지 않아요.

- **다크 테마** — 다크 v2 화면 디자인은 캔버스에 있어요. 아래 값을 `[data-theme="dark"]`로 추가
- **테마 전환 버튼** — 프로필에 토글, 선택은 localStorage에 저장
- **모바일 화면**, **곡 자동 입력(음악 검색)**, **한 달 플레이리스트 이미지 저장**

### 다크 토큰 (보관용)

```css
[data-theme="dark"] {
  --bg: #0E0D16;
  --surface-side: #13121D;
  --surface: #1A1826;
  --surface-low: #15141F;
  --field: #13121D;
  --border: #2C2A3B;
  --border-subtle: #24222F;
  --border-strong: #3A3650;
  --text: #F3F1FA;
  --text-2: #D9D5EA;
  --text-sub: #B4AFC8;
  --text-muted: #8F8AA6;
  --accent: #7353E8;
  --accent-text: #A58BFF;
  --accent-soft: #241F3D;
  --accent-line: #C4B3FF;
  --danger: #FF8A94;
  --danger-bg: #D23C4C;
  --sunday: #FF7A85;
  --invert-bg: #F3F1FA;
  --invert-text: #13121D;

  --mood-flutter-a: #F07FB0;
  --mood-excited-a: #FF9A52; --mood-excited-b: #B0284A;
  --mood-focus-a: #45C99A;
  --mood-gloomy-a: #8A95AA;

  --shadow-card: none;  /* 다크는 커버에만 0 14px 30px rgba(0,0,0,.4) */
}
```

- 다크 로고: 글자 `#F3F1FA` / LP `#8B6FE8`, 사이드바용 knockout `#13121D`
- 다크 분위기 칩: 잔잔 `#232B52`/`#C9D3FF`, 설렘 `#45213F`/`#FFC9E1`, 신남 `#4A2620`/`#FFD0B0`, 집중 `#173A33`/`#B5F0D8`, 울적 `#2A2F3A`/`#D5DCE8` (배경/글자)
