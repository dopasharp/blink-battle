// Firebase 웹 앱 설정 (프로젝트 설정 ⚙️ › 내 앱 › 웹 앱의 firebaseConfig).
// 비어 있으면 "로컬 테스트 모드": 같은 브라우저의 탭끼리만 1:1이 돼요.
// 웹 설정값은 공개돼도 되는 값이에요. 보안은 database.rules.json 규칙으로 지켜요.
// databaseURL은 Realtime Database 화면 맨 위에 보이는 주소와 같아야 해요 (싱가포르 리전).
// 분석은 도파# 허브의 GA4(analytics.js)로 통일해서 Firebase Analytics는 쓰지 않아요.
export const firebaseConfig = {
  apiKey: 'AIzaSyAuIJtZQA89Zrxj2rAXfg5Koj5BotR6r-A',
  authDomain: 'blink-battle-2348b.firebaseapp.com',
  databaseURL: 'https://blink-battle-2348b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'blink-battle-2348b',
  storageBucket: 'blink-battle-2348b.firebasestorage.app',
  messagingSenderId: '1057232714842',
  appId: '1:1057232714842:web:d0af5c61808af54b92ac63',
};
