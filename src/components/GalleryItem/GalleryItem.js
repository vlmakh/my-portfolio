import {
  Item,
  Description,
  NameLink,
  NameDiv,
  Chip,
  GithubLink,
  ProjectImg,
  Text,
} from './GalleryItem.styled';

export const GalleryItem = ({ project }) => {
  return (
    <Item>
      <ProjectImg src={project.image} alt={project.name} width="320" />

      <Description>
        <NameDiv>
          <NameLink href={project.link} target="blank">
            {project.name}
          </NameLink>
          <Chip>{project.tech}</Chip>
          <GithubLink href={project.github} target="blank">
            github code
          </GithubLink>
        </NameDiv>

        <Text>{project.descr1}</Text>
        <Text>{project.descr2}</Text>
        <Text>{project.descr3}</Text>
      </Description>
    </Item>
  );
};