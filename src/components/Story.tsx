import {Link } from 'wouter';
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news';
import {story, storyHeader, storyLink, storyFooter, domainLink} from './Story.css';
import { StoryLoader } from './StoryLoader';


export const Story = (props: {
    id: number;
    index: number;
}) => {

    const {id, index} = props;
    const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id));
    //aqui va storyLoader de react-content-loader
    if(isLoading) return <StoryLoader/>
  
    const {by, kids, score, title, url} = data; 
    console.log(data);

    let domain= '';
    try{
        domain = new URL(url).hostname.replace('www.', '');
    }catch(error){
        console.log(error);
    }

    //TODO: Create relative time function


    return (
        <article className={story}>
            <header className={storyHeader}>
               <small>{index+1} .</small>
               <a className={domainLink} href={url} target='_blank' rel='noopener noreferrer'>{title } </a>
               <a className={domainLink} href={url} target='_blank' rel='noopener noreferrer'>({ domain })</a>
            </header>
            <footer className={storyFooter}>
                <span className={storyLink}>{score} points  </span>
                
                <Link className={storyLink} href={`/article/${id}`}>
                        by {by  }   
                </Link>
                <Link className={storyLink} href={`/article/${id}`}>
                        6 hours ago  
                </Link>
                <Link className={storyLink} href={`/article/${id}`}>
                        {kids?.length ?? 0  } comments  
                </Link>
            </footer>
        </article>
    )


}




