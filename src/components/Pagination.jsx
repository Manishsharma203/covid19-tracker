import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changePage} from '../redux/actions'

export default function Pagination() {
    const dispatch = useDispatch()

    const currentPage= useSelector(state=>state.currentPage)
    const totalPages= useSelector(state=>state.totalPages)
 
    const newsLoading= useSelector(state=>state.newsLoading)

    const paginationTabs=[]

    for(let  i = currentPage-1; i<=currentPage+4 && i>=0 &&  i<=totalPages;i++){
        if(i===currentPage-1){
            if(i!==0){
                paginationTabs.push(<button className='btn btn-primary mr-1' key={i} onClick={()=>dispatch(changePage(currentPage-1))}>{`<`}</button>)
            }            
            continue;
        }
        if(i===currentPage+4){
            paginationTabs.push(<button className='btn btn-primary mr-1' key={i} onClick={()=>dispatch(changePage(currentPage+1))}>{`>`}</button>)
            continue;
        }
        paginationTabs.push(<button key={i} className='btn btn-outline-primary mr-1' style={{background:`${currentPage===i?'lightblue':''}`}} onClick={()=>dispatch(changePage(i))}>{i}</button>)
    }
    return (
        <div>
            <div className='my-4 d-flex justify-content-center'>
                {!newsLoading? paginationTabs:<div></div>}
            </div>
        </div>
    )
}
