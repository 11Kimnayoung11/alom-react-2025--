import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * 과제1-2: 이곳에 assignments 폴더 내 작성한 코드를 불러오는 코드를 작성해주세요.
 * 예시:
 * import Woojin from "./assignments/woojin";
 */

import Example from "./assignments/example";

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 안내 페이지 */}
        <Route path="/" element={<div>App.js와 example.js를 확인해주세요.</div>} />
        {/* example 컴포넌트 라우트 */}
        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
