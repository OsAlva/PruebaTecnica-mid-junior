import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news';
import { ListOfComments } from '../components/ListOfComents';


export default function Detail(props: {
    params: {
        id: string;
    }
}) {
    const {id} = props.params;
    const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(Number(id)));

    return (
        <div className=''>
           {
                isLoading ? <p>'Loading...'</p> : <ListOfComments ids={data?.kids}/>
           }
        </div>
    )

} 