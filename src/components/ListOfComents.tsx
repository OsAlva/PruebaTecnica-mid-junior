import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import './ListOfComents.css'
import { CommentLoader } from "./CommentLoader";

export const Comment = (props: {
    id: number;
}) => {
    const {id} = props;
    const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id));
    
    if(isLoading) return <CommentLoader/>
    
    const {by, text, time, kids} = data;
    return (
    
        <div className="divComment">
            <details open>
                <summary>
                <small>
                        <span>{by}</span>
                        <span>.</span>
                        <span> {Math.floor(time / 3600)} hours ago</span>
                    </small>
                </summary>

                <p>{text}</p>
            </details>
            {/* para hacerlo recursivo el ListOfComments llamaria a Comment y Comment llamaria a ListOfComments */}
            {kids?.length && <ListOfComments ids={kids.slice(0,10)}/>}
        </div>
        // Esto funciona porque en JavaScript, true && expresión siempre evalúa a expresión, y false && expresión siempre evalúa a false.
        //Por eso, si la condición es true, el elemento justo después de && aparecerá en el resultado. Si es false, React lo ignorará.


    )
   
}

export const ListOfComments = (props: {
    ids: number[]
}) => {
    const {ids} = props;
    return (
        <ul style={{listStyle: 'none'}}>
            {ids?.map((id: number) => (
                <li key={id}>
                    <Comment id={id}/>
                </li>
            ))}
        </ul>
    )
}