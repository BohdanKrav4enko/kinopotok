import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type NotificationType = "error" | "success" | "info";

type NotificationState = {
    visible: boolean;
    text: string;
    type: NotificationType;
    duration: number;
};

const initialState: NotificationState = {
    visible: false,
    text: "",
    type: "info",
    duration: 2000,
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        showNotification: (
            state,
            action: PayloadAction<{
                text: string;
                type?: NotificationType;
                duration?: number;
            }>
        ) => {
            state.visible = true;
            state.text = action.payload.text;
            state.type = action.payload.type || "info";
            state.duration = action.payload.duration || 2000;
        },

        hideNotification: (state) => {
            state.visible = false;
        },
    },
});

export const { showNotification, hideNotification } =
    notificationSlice.actions;

export default notificationSlice.reducer;