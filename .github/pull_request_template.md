## 과제 체크포인트

### 배포 링크

<!--
배포 링크를 적어주세요
예시: https://<username>.github.io/front-5th-chapter1-1/

배포가 완료되지 않으면 과제를 통과할 수 없습니다.
배포 후에 정상 작동하는지 확인해주세요.
-->


### 기본과제

#### 1) 라우팅 구현:
- [ ] History API를 사용하여 SPA 라우터 구현
  - [ ] '/' (홈 페이지)
  - [ ] '/login' (로그인 페이지)
  - [ ] '/profile' (프로필 페이지)
- [ ] 각 라우트에 해당하는 컴포넌트 렌더링 함수 작성
- [ ] 네비게이션 이벤트 처리 (링크 클릭 시 페이지 전환)
- [ ] 주소가 변경되어도 새로고침이 발생하지 않아야 한다.

#### 2) 사용자 관리 기능:
- [ ] LocalStorage를 사용한 간단한 사용자 데이터 관리
  - [ ] 사용자 정보 저장 (이름, 간단한 소개)
  - [ ] 로그인 상태 관리 (로그인/로그아웃 토글)
- [ ] 로그인 폼 구현
  - [ ] 사용자 이름 입력 및 검증
  - [ ] 로그인 버튼 클릭 시 LocalStorage에 사용자 정보 저장
- [ ] 로그아웃 기능 구현
  - [ ] 로그아웃 버튼 클릭 시 LocalStorage에서 사용자 정보 제거

#### 3) 프로필 페이지 구현:
- [ ] 현재 로그인한 사용자의 정보 표시
  - [ ] 사용자 이름
  - [ ] 간단한 소개
- [ ] 프로필 수정 기능
  - [ ] 사용자 소개 텍스트 수정 가능
  - [ ] 수정된 정보 LocalStorage에 저장

#### 4) 컴포넌트 기반 구조 설계:
- [ ] 재사용 가능한 컴포넌트 작성
  - [ ] Header 컴포넌트
  - [ ] Footer 컴포넌트
- [ ] 페이지별 컴포넌트 작성
  - [ ] HomePage 컴포넌트
  - [ ] ProfilePage 컴포넌트
  - [ ] NotFoundPage 컴포넌트

#### 5) 상태 관리 초기 구현:
- [ ] 간단한 상태 관리 시스템 설계
  - [ ] 전역 상태 객체 생성 (예: 현재 로그인한 사용자 정보)
- [ ] 상태 변경 함수 구현
  - [ ] 상태 업데이트 시 관련 컴포넌트 리렌더링

#### 6) 이벤트 처리 및 DOM 조작:
- [ ] 사용자 입력 처리 (로그인 폼, 프로필 수정 등)
- [ ] 동적 컨텐츠 렌더링 (사용자 정보 표시, 페이지 전환 등)

#### 7) 라우팅 예외 처리:
- [ ] 잘못된 라우트 접근 시 404 페이지 표시

### 심화과제

#### 1) 해시 라우터 구현
- [ ] location.hash를 이용하여 SPA 라우터 구현
  - [ ] '/#/' (홈 페이지)
  - [ ] '/#/login' (로그인 페이지) 
  - [ ] '/#/profile' (프로필 페이지)
 
#### 2) 라우트 가드 구현
- [ ] 로그인 상태에 따른 접근 제어
- [ ] 비로그인 사용자의 특정 페이지 접근 시 로그인 페이지로 리다이렉션

#### 3) 이벤트 위임

- [ ] 이벤트 위임 방식으로 이벤트를 관리하고 있다.

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->

### 기술적 성장
<!-- 예시
- 새로 학습한 개념
- 기존 지식의 재발견/심화
- 구현 과정에서의 기술적 도전과 해결
-->

### 코드 품질
<!-- 예시
- 특히 만족스러운 구현
- 리팩토링이 필요한 부분
- 코드 설계 관련 고민과 결정
-->

### 학습 효과 분석
<!-- 예시
- 가장 큰 배움이 있었던 부분
- 추가 학습이 필요한 영역
- 실무 적용 가능성
-->

### 과제 피드백
<!-- 예시
- 과제에서 모호하거나 애매했던 부분
- 과제에서 좋았던 부분
-->

## 리뷰 받고 싶은 내용

<!--
피드백 받고 싶은 내용을 구체적으로 남겨주세요
모호한 요청은 피드백을 남기기 어렵습니다.

참고링크: https://chatgpt.com/share/675b6129-515c-8001-ba72-39d0fa4c7b62

모호한 질문의 예시)
- 무엇을 질문해야 할지 몰라서 코치님이 보시기에 고쳐야할것들 전반적으로 피드백 부탁드립니다.
- 코드 스타일에 대한 피드백 부탁드립니다.
- 코드 구조에 대한 피드백 부탁드립니다.
- 개념적인 오류에 대한 피드백 부탁드립니다.
- 추가 구현이 필요한 부분에 대한 피드백 부탁드립니다.

구체적인 질문의 예시)
- 파일A의 함수B와 그 안의 변수명을 보면 직관성이 떨어지는 것 같습니다. 함수와 변수 이름을 더 명확하게 지을 방법에 대해 조언해 주실 수 있나요?
- 현재 파일 단위로 코드를 분리했지만, 이번 주차 발제를 기준으로 봤을 때 모듈화나 계층화에서 부족함이 있는 것 같습니다. 특히 A와 B 부분에서 모듈화를 더 진행할지 그대로 둘지 고민하였습니다. (...구체적인 고민 사항 적기...). 코치님의 의견이 궁금합니다.
- 옵저버 패턴을 사용해 상태 관리 로직을 구현해 보려 했습니다. 제가 구현한 코드가 옵저버 패턴에 맞게 잘 구성되었는지 검토해 주시고, 보완할 부분을 제안해 주실 수 있을까요?
- 컴포넌트 A를 테스트 할 때 B와의 의존성 때문에 테스트 코드를 작성하려다 포기했습니다. A와 B의 의존성을 낮추고 테스트 가능성을 높이는 구조 개선 방안이 있을까요?
-->
