# [TravelMaker] 개인 맞춤 여행 경로 추천 웹사이트

## 기간
- 2024.05.15 ~ 24.05.23
## 👩‍👧‍👧 팀원

| 🍀 [권성민](https://github.com/kwonja) | 🍀 [김민경](https://github.com/minkyung73) |
| :-----------------------------------: | :-----------------------------------: |
| FE/BE | FE/BE |
| <img src="https://avatars.githubusercontent.com/kwonja" alt="권성민" width="100" /> | <img src="https://avatars.githubusercontent.com/minkyung73" alt="김민경" width="100" /> |

## ✅프로젝트 목적
여행 문화가 발전하면서 다양한 형태의 유형이 나타나고 있다. 이에 따라 개인의 성향에 맞는 맞춤형 서비스에 대한 수요 또한 늘어나고 있다.
Chat-GPT를 사용하여 개인의 요구사항에 맞는 여행지 추천을 통해 계획을 짜는 시간을 단축시키고, 보다 더 개인 맞춤형 서비스를 제공하는 것을 목표로 한다.

## ✅ 실행영상
https://www.youtube.com/watch?v=WxT72q7aYyE

## ✅ 사용기술

- Vue3
- tailwind css
- bootstrap
- axios
- pinia
- Kakao Map

## ✅ 기능

### 메인페이지
![image](https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/2188e88e-3caf-4db3-9eee-c1d122776a13)

### 시,군,카테고리 별 여행지 검색
- 관광지 공공데이터 API를 사용해 시,군,카테고리 별 여행지를 검색 할 수 있습니다.
![image](https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/b0805ecc-cb17-4deb-b4db-677799c00e4e)

### 카카오맵 여행지 검색
- 음식점과 같이 관광지가 아닌 다른 장소들도 검색후, 여행경로에 추가할 수 있습니다.
![image](https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/eae0e49b-7f01-4259-9931-e2d46cafd47c)

### GPT 기반 여행지 추천
- 프롬프트에 내용을 작성하면 GPT에게 여행지를 추천받고, 추천 여행지를 클릭을 통해 바로 검색할 수 있습니다.
![image](https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/37ab0038-dd8a-4b82-947c-8c43b3463411)
### 여행 계획 생성
- 토글 버튼을 활성화하면 추가한 계획의 순서를 바꿀 수 있습니다.
- 0일차별로 일정을 생성하고 삭제할 수 있습니다
<img src="https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/f58f936f-24ce-40dd-9ec6-93f954c3df7f" style="width: 30%;"/>


### 내 여행 계획
- 생성한 내 여행 계획을 마이페이지에서 볼 수 있습니다.
<div style="display: flex; justify-content: space-between;">
  
<img src="https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/e780be44-d6d4-4d76-94a9-3cbdfdbaae03" alt="image 1" style="width: 48%;"/>
<img src="https://github.com/PassProject-Travel-Maker/Frontend/assets/42410000/2180632c-ef3a-4d75-9598-ffe172e20481" alt="image 2" style="width: 48%;"/>

</div>

## ✅ 마이그레이션
React, Typescript로 마이그레이션 진행중입니다. <br/>
https://github.com/PassProject-Travel-Maker/React_Refactoring

