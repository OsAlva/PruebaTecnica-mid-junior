import {Link } from 'wouter';
import {getTopStories } from '../services/hacker-news';
import { Story } from '../components/Story';
import useSWR from 'swr'




export default function TopStories() {
    const { data, error, isLoading } = useSWR('stories', () =>  getTopStories(1,10));

 

   

    return (
        <>
          <ul style={{listStyle: 'none'}}>
            {/* {isLoading && <li>Loading...</li>} */}
            {error && <li>Error</li>}
            {data?.map((id: number, index: number) => (
                <li  key={id}>
                    <Story id={id} index={index}/>
                </li>
                ))
                
            }
          </ul>
        </>
    )

}