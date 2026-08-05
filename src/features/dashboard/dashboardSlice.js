import { createSlice } from "@reduxjs/toolkit"
import trades from "../../data/trades"
import account from "../../data/account"

const initialState = {
  account,
  trades
} 

const dashboardSlice = createSlice({
  name : "dashboard",
  initialState,
  reducers : {}
})

export default dashboardSlice.reducer