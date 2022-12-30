/**
 * @설명 babel로 컴파일 셋팅 조성
 * @첫번째_프리셋 JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 바벨 플러그인이 내장(리액트를 변환하기 위한 프리셋)
 * @두번째_프리셋 preset-env는 ECMAScript2015+를 변환할 때 사용한다(IE 지원을 위한 프리셋)
 * @세번째_프리셋 타입스크립트를 변환하기 위한 프리셋
 */
module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
};
