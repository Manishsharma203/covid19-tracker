import React from 'react';
import styles from './newsdata.module.css'
import { useSelector } from 'react-redux';

export default function NewsData() {
    const currentPage= useSelector(state=>state.currentPage)
    const dataPerPage= useSelector(state=>state.dataPerPage)
    const articles= useSelector(state=>state.newsData.articles)
    const apiExhausted= useSelector(state=>state.apiExhausted)
    const newsLoading= useSelector(state=>state.newsLoading)
    return (
        <>
        {!newsLoading?
        articles.filter((e,i)=>i>=(currentPage-1)*dataPerPage && i<=(currentPage*dataPerPage)-1)
        .map(e=>
            <div className='my-5 d-flex flex-wrap' key={e.title}>
            <div className='col-12 d-flex flex-sm-row flex-column align-items-center justify-content-center mx-auto border rounded'>
            <div className='col-sm-4'>
                <img className='col-sm-12 col-10' src={e.urlToImage} alt='NoImage' />
            </div>
            <div className='col-sm-8 mt-3'>
                <div className={styles.title}>{e.title}</div>
                <div className={styles.author}>Author :  {e.author}</div>
                <div className={styles.des}>{e.description} ...</div>
                <div className='btn btn-success my-2'><a className='text-white' href={e.url} target='blank'>Read it here</a></div>
                <div className='d-flex justify-content-between my-3'>
                    <div className={styles.footer}>Source : {e.source.name}</div>
                    <div className={styles.footer}>{new Date(Date.parse(e.publishedAt)).toDateString()}</div>
                </div>
            </div>
        </div>
        </div>
        ):
        (apiExhausted?<div className='text-center my-5'>YOUR API KEY IS EXHAUSTED .. TRY AGAIN AFTER 11:59 PM</div>:<div className='text-center my-5'>LOADING.....</div>)
        }
        </>
    )
}
