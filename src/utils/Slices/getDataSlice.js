import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";

export const getAllSpots = createAsyncThunk('/allspots',async()=>{
    try{
        const querySnapshot = await getDocs(collection(db, "TravelSpots"));
        const documentIds = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            documentIds.push(doc.data());
        });
        return documentIds
    }catch(err){
        console.log(err)
    }
})

const getDataSlice = createSlice({
    name:'getdata',
    initialState:{
        allspots:[],
        searchedspots:[]
    },
    reducers:{
        searchspots:(state,action)=>{
            state.searchedspots = state.allspots.filter((data)=>{
                return data.location.city.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
        filterspots:(state,action)=>{
            state.searchedspots = state.allspots.filter((data)=>{
                return data.location.country.includes(action.payload)
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllSpots.pending,(state)=>{
            state.status = 'pending'
        }),
        builder.addCase(getAllSpots.fulfilled,(state,action)=>{
            state.status = 'fulfilled'
            state.allspots = action.payload,
            state.searchedspots = action.payload
        }),
        builder.addCase(getAllSpots.rejected,(state)=>{
            state.status = 'rejected'
        })
    }
})

export const {searchspots,filterspots} = getDataSlice.actions

export default getDataSlice.reducer