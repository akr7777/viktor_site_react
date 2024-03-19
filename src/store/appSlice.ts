import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appInitContent, AppInitContentType } from "../consts/store-consts";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: appInitContent as AppInitContentType,
  reducers: {
    changeBigPhotoSrcAC: (state: AppInitContentType, action: PayloadAction<string | null>) => {
      state.bigPhotoSrc = action.payload
    },
    addOpenedEventIdAC: (state: AppInitContentType, action: PayloadAction<number>) => {
      state.openedEventListIds = [...state.openedEventListIds, action.payload]
    },
    removeOpenedEventIdAC: (state: AppInitContentType, action: PayloadAction<number>) => {
      state.openedEventListIds = state.openedEventListIds.filter(id => id !== action.payload)
    },
  },

//   extraReducers: (builder) => {
    
//   },
});
export const {
  changeBigPhotoSrcAC, addOpenedEventIdAC, removeOpenedEventIdAC
} = appSlice.actions;

export default appSlice.reducer;
