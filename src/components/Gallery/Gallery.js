import { GalleryCont, List } from './Gallery.styled';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { projectList } from 'data/projects';

export const Gallery = () => {
  return (
    <GalleryCont>
      <List>
        {projectList.map(project => (
          <GalleryItem project={project} key={project.id} />
        ))}
      </List>
    </GalleryCont>
  );
};
