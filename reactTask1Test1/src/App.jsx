import { useState } from "react";
import Layout from "./compornents/Layout";
import TodoContainer from "./compornents/todo/TodoContainer";

const App = () => {
  return (
    <Layout>
      <TodoContainer />
    </Layout>
  );
};

export default App;
