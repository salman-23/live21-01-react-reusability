import { AppWrapper2, Emoji, Name, GoToGithub } from "./styles";

const InstructorTag = (props) => {
  return (
    <AppWrapper
      onClick={() => window.open(`https://github.com/${props.goToGithub}`)}
    >
      <TagWrapper>
        <Emoji>props.emoji</Emoji>
        <Name>props.name</Name>
        <GoToGithub>props.goToGithub</GoToGithub>
      </TagWrapper>
    </AppWrapper>
  );
};

// const InstructorTag = () => {
//   // Create the InstructorTag component here

//   return (
//     <div className="timeline-container">
//       {data.map((data, id) => (
//         <InstructorItem data={data} key={id}></InstructorItem>
//       ))}
//     </div>
//   );
// };

export default InstructorTag;
