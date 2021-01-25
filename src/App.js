import { AppWrapper } from "./components/styles";
import InstructorTag from "./components/InstructorTag";
import data from "./data";

const App = () => {
  const instr = data.map((e) => (
    <InstructorTag
      key={e.id}
      name={e.name}
      github={e.github}
      emoji={e.emoji}
    ></InstructorTag>
  ));

  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {instr}
    </AppWrapper>
  );
};

export default App;
