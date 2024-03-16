import {
    Descriptions,
    DescriptionsProps,
  } from 'antd';
  
  import styles from './Styles.module.css';
  
  interface Props {
    title?: string;
    original_title?: string;
    original_title_romanised?: string;
    movie_banner?: string;
    description?: string;
    release_date?: string;
    running_time?: string;
    actor?: string;
    rt_score?:string;
  }
  
  const FilmDescriptions: React.FC<Props> = ({
    title,
    original_title,
    original_title_romanised,
    movie_banner,
    description,
    release_date,
    running_time,
    actor,
    rt_score,
  }) => {
    
    const items: DescriptionsProps['items'] = [
      {
        key: '1',
        label: 'Title',
        children: <p>{title}</p>,
      },
      {
        key: '2',
        label: 'Original Title',
        children: <p>{original_title}</p>,
      },
      {
        key: '3',
        label: 'Original Title Romanised',
        children: <p>{original_title_romanised}</p>,
      },
      {
        key: '4',
        label: 'Movie Banner',
        children: <p>{movie_banner}</p>,
      },
      {
        key: '5',
        label: 'Description',
        children: <p>{description}</p>,
      },
      {
        key: '6',
        label: 'Release Date',
        children: <p>{release_date}</p>,
      },
      
      {
        key: '7',
        label: 'Running Time',
        children: <p>{running_time}</p>,
      },
      {
        key: '8',
        label: 'Actor',
        children: <p>{actor}</p>,
      },
      {
        key: '9',
        label: ' Rt Score',
        children: <p>{rt_score}</p>,
      },
    ];
    
    return <Descriptions className={styles.filmDetails} title="Film Details" bordered items={items} />;
  };
  
  export default FilmDescriptions;
  