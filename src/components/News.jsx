import React from 'react'
import NewsData from './NewsData'
import Pagination from './Pagination'
import {fetchNews} from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function News() {
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(fetchNews())
    },[])
    return (
        <div>
            <NewsData/>
            <Pagination/>
        </div>
    )
}
