import {Link } from 'wouter';
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news';


export const Story = (props: {
    id: number;
    index: number;
}) => {

    const {id, index} = props;
    const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id));

    if(isLoading) return <span>Loading...</span>
  
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
        <article className=''>
            <header className=''>
               <small>{index} .</small>
               <a className='' href={url} target='_blank' rel='noopener noreferrer'>{title } </a>
               <a className='' href={url} target='_blank' rel='noopener noreferrer'>({ domain })</a>
            </header>
            <footer className=''>
                <span>{score} points  </span>
                
                <Link className='' href={`/article/${id}`}>
                        by {by  }   
                </Link>
                <Link className='' href={`/article/${id}`}>
                        6 hours ago  
                </Link>
                <Link className='' href={`/article/${id}`}>
                        {kids?.length ?? 0  } comments  
                </Link>
            </footer>
        </article>
    )


}




