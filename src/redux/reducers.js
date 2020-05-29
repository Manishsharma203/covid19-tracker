import {CHANGE_DAYS,FETCH_SUCCESS,FETCH_SUCCESS_DISTRICTWISE,FETCH_NEWS_SUCCESS,CHANGE_PAGE} from './actions'

var initialState={
    daysVariable:7,
    isloading:true,
    statewiseLoading:true,
    newsLoading:true,
    apiExhausted:false,
    data:[],
    cases_time_series:[],
    statewise:[],
    tested:[],
    districtwise:[],
    newsData:{},
    currentPage: 1,
    dataPerPage: 5,
    totalPages: 0,
}

export const reducers=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_DAYS:
            return {
                ...state,
                daysVariable:action.payload
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isloading:false,
                data:action.payload,
                cases_time_series:action.payload.cases_time_series,
                statewise:action.payload.statewise,
                tested:action.payload.tested
            }
        case FETCH_SUCCESS_DISTRICTWISE:
            return{
                ...state,
                statewiseLoading:false,
                districtwise:action.payload
            }
        case FETCH_NEWS_SUCCESS:
            let error=false
            let loading=false
            if(action.payload.status==='error'){
                loading=true
                if(action.payload.code==='apiKeyExhausted'){
                    error=true
                }
            }
            return{
                ...state,
                newsLoading:loading,
                newsData:action.payload,
                apiKeyExhausted:error,
                totalPages: Math.ceil(action.payload.articles.length/state.dataPerPage),
            }
        case CHANGE_PAGE:
                return {...state,
                currentPage:action.payload
                } ;
        default:
            return state
    }
}
