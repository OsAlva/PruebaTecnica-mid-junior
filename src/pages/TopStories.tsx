import useSWRInfinite from 'swr/infinite';
// import {Link } from 'wouter';
import {getTopStories } from '../services/hacker-news';
import { Story } from '../components/Story';
// import useSWR from 'swr'




export default function TopStories() {
   // const { data, error, isLoading } = useSWR('stories', () =>  getTopStories(1,10));
   // 
   const {data, isLoading, size, setSize} = useSWRInfinite(
    (index) => `stories/${index+1}`, //key que se usa para cachear los resultados
    (key) => {
        const [, page] = key.split('/');
        return getTopStories(Number(page),10);
        // console.log(page);
    }
  );


  //el flat sirve para aplanar el array de arrays que devuelve el useSWRInfinite y asi poder iterar sobre el array de ids  [[1,2],[3,4]] => [1,2,3,4]
  const stories = data?.flat();
  console.log(stories);

 



 

   

    return (
        <>
          <ul style={{listStyle: 'none'}}>
            {/* {isLoading && <li>Loading...</li>} */}
            {/* {error && <li>Error</li>} */}
            {stories?.map((id: number, index: number) => (
                <li  key={id}>
                    <Story id={id} index={index}/>
                </li>
                ))
                
            }
          </ul>
          <div style={{paddingLeft:'40px', paddingBottom: "20px"}}>
            <button onClick={() => {setSize(size + 1 )}}>Load more</button>
          </div>
        </>
    )

}