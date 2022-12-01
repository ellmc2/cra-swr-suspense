import { Suspense } from "react";
import "./App.css";
import ImageList from "./ImageList";

function App() {
  return (
    <div className="App">
      <h1>基于swr的Suspense</h1>
      <Suspense fallback={<div>加载中。。。</div>}>
        <ImageList />
      </Suspense>
    </div>
  );
}

export default App;
