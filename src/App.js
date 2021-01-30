import { AppWrapper } from "./components/styles";
import InstructorTag from "./components/InstructorTag";
import data from "./data";

const App = () => {
  const Instructors = data.map((instructor) => (
    <InstructorTag
      key={instructor.id}
      name={instructor.name}
      github={instructor.github}
      emoji={instructor.emoji}
    />
    
  ));

  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {Instructors}

    </AppWrapper>
  );
};

export default App;
