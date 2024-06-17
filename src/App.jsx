import { useState } from "react";

import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalVisibility, setModalVisible] = useState(false);
  function showModal(){
    setModalVisible(true);
  }
  function hideModal(){
    setModalVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModal}/>
      <main>
        <PostList isVisible={modalVisibility} onStop={hideModal}/>
      </main>
    </>
  );
}

export default App;
