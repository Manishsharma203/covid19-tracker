import axios from 'axios'

//action types
export const CHANGE_DAYS='CHANGE_DAYS'
export const FETCH_REQUEST='FETCH_REQUEST'
export const FETCH_SUCCESS='FETCH_SUCCESS'
export const FETCH_FAILURE='FETCH_FAILURE'
export const FETCH_SUCCESS_DISTRICTWISE='FETCH_SUCCESS_DISTRICTWISE'
export const FETCH_NEWS_SUCCESS='FETCH_NEWS_SUCCESS'
export const CHANGE_PAGE='CHANGE_PAGE'
//actions

export const changeDays=(payload)=>({
    type:CHANGE_DAYS,
    payload
})

export const fetchReq=(query=null)=>({
    type:FETCH_REQUEST,
    query
})

export const fetchSuccess=(payload)=>({ 
    type:FETCH_SUCCESS,
    payload
})

export const fetchSuccessDistrictData=(payload)=>({ 
    type:FETCH_SUCCESS_DISTRICTWISE,
    payload
})

export const fetchFailure=(error)=>({
    type:FETCH_FAILURE,
    error
})

export const fetchNewsSuccess=(payload)=>({
    type:FETCH_NEWS_SUCCESS,
    payload
})

export const changePage=(payload)=>({
    type:CHANGE_PAGE,
    payload
})


export const fetchData=()=>{
    return dispatch=>{
        dispatch(fetchReq())
        return axios.get('https://api.covid19india.org/data.json')
                .then(res=>dispatch(fetchSuccess(res.data)))
                .catch(err=>console.log('err',err))
    } 
}
export const fetchStatewiseData=()=>{
    return dispatch=>{
        dispatch(fetchReq())
        return axios.get('https://api.covid19india.org/v2/state_district_wise.json')
                .then(res=>dispatch(fetchSuccessDistrictData(res.data)))
                // .then(res=>console.log(res))
                .catch(err=>console.log('err',err))
    } 
}

export const fetchNews=()=>{
    return dispatch=>{
        dispatch(fetchReq())
        return axios.get(`https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        // return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=e884df9a370b4a5d84adb6684654fa2c`,
                // {
                //     headers:{
                //     "Access-Control-Allow-Origin": '*',
                //     "Access-Control-Allow-Methods": 'GET',
                //     "Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                //         }
                // })
                .then(res=>dispatch(fetchNewsSuccess(res.data)))
                // .then(res=>console.log(res))
                .catch(err=>console.log('err',err))
    } 
}