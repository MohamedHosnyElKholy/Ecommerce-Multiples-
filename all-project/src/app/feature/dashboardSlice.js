const { createSlice } = require("@reduxjs/toolkit");

const dashboardSlice = createSlice({
    name:'dashboard',
    initialState:{
        inDashboard:false,
    },
    reducers:{
        setInDashboard:(state,action)=>{
            state.inDashboard=action.payload
        }
    }

})
export default dashboardSlice.reducer
export const {setInDashboard} = dashboardSlice.actions