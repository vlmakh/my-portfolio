import { FaReact, FaHtml5, FaSass, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { nanoid } from 'nanoid';
import {
  foodsta,
  movieteka,
  barbershop,
  filmoteka,
  mynotes,
  webstudio,
} from 'images';

export const projectList = [
  {
    id: nanoid(4),
    name: 'My movies',
    tech: <FaReact size="24" />,
    link: 'https://vlmakh.github.io/my-movies/',
    github: 'https://github.com/vlmakh/my-movies/',
    image: movieteka,
    descr1: 'Own project. Website for searching movies and actors',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1280px). Free themoviedb.org API is used as backend. Added libraries: emotions, styled-system, date-fns, react-loader-spinner, axios, react-slick, slick-carousel, react-paginate, i18next. Favorites in Library and Photoalbum are persisted using localStorage',
    descr3: 'Design: own. Assembly: Create React App',
  },
  {
    id: nanoid(4),
    name: 'My notes',
    tech: (
      <>
        <FaReact size="24" />
        <FaNodeJs size="24" />
        <SiMongodb size="24" />
      </>
    ),
    link: 'https://vlmakh.github.io/my-notes-react/',
    github: 'https://github.com/vlmakh/my-notes-react/',
    github2: 'https://github.com/vlmakh/my-notes-nodejs/',
    image: mynotes,
    descr1: 'Own project. Simple app for private notes',
    descr2:
      'Implemented user registration to access only personal data. Implemented autosave of current data online to the database. Application is written using React hooks. Attached libraries: emotions, styled-system, react-icons, nanoid, framer-motion, react-colorful, react-masonry-css, formik, yup',
    descr3: 'Design: own. Frontend: React, backend: Node.js, database: MongoDB',
  },
  {
    id: nanoid(4),
    name: 'Filmoteka',
    tech: (
      <>
        <FaHtml5 size="24" /> <FaSass size="24" /> <SiJavascript size="24" />
      </>
    ),
    link: 'https://github.com/vlmakh/goit-team-project-02/',
    github: 'https://vlmakh.github.io/goit-team-project-02/',
    image: filmoteka,
    descr1: 'Team-project #2. Role: teamlead. Group: 14 students',
    descr2:
      'Adaptive layout with three breakpoints (320px, 768px, 1280px). For screen width below 320px - responsive layout. Free themoviedb.org API is used as backend. Connected libraries: axios, tui-pagination, basicLightbox',
    descr3: 'Design: Figma. Assembly: Parcel',
  },
  {
    id: nanoid(4),
    name: 'Barbershop',
    tech: (
      <>
        <FaHtml5 size="24" /> <FaSass size="24" /> <SiJavascript size="24" />
      </>
    ),
    link: 'https://vlmakh.github.io/goit-barbershop/',
    github: 'https://github.com/vlmakh/goit-barbershop/',
    image: barbershop,
    descr1: 'Project for own practice',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1280px). For screen width below 480px - responsive layout. The menu is implemented with anchor links that lead to the corresponding sections of the page. Images are optimized for retina displays',
    descr3: 'Design: Figma. Assembly: Parcel',
  },
  {
    id: nanoid(4),
    name: 'Foodsta',
    tech: (
      <>
        <FaHtml5 size="24" /> <FaSass size="24" /> <SiJavascript size="24" />
      </>
    ),
    link: 'https://github.com/vlmakh/goit-team-project-01/',
    github: 'https://vlmakh.github.io/goit-team-project-01/',
    image: foodsta,
    descr1: 'Team-project #1. Role: teamlead. Group: 6 students',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1280px). For screen width below 480px - responsive layout. The menu is implemented with anchor links that lead to the corresponding sections of the page. Images are optimized for retina displays, also added images in webp format for faster loading. Validation is enabled in the fields of the modal window and Subscribe sections',
    descr3: 'Design: Figma. Assembly: Parcel',
  },
  {
    id: nanoid(4),
    name: 'Webstudio',
    tech: (
      <>
        <FaHtml5 size="24" /> <FaSass size="24" /> <SiJavascript size="24" />
      </>
    ),
    link: 'https://vlmakh.github.io/goit-markup-hw-08/',
    github: 'https://github.com/vlmakh/goit-markup-hw-08/',
    image: webstudio,
    descr1: 'Practical markup task',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1200px). For screen width below 480px - responsive layout. The menu is implemented with anchor links that lead to the corresponding sections of the page. Images are optimized for retina displays, also added images in webp format for faster loading',
    descr3: 'Design: Figma',
  },
];
