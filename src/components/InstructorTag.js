import { TagWrapper, Emoji, Name, GoToGithub } from "./styles";

const InstructorTag = (props) => {
  return (
    <TagWrapper
      onClick={() => window.open(`https://github.com/${props.github}`)}
    >
      <Emoji>{props.emoji}</Emoji>
      <Name>{props.name}</Name>
      <GoToGithub>Go To Github</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
