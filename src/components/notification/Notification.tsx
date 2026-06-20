import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Toast, Wrapper} from "./styles/NotificationStyle.tsx";
import {hideNotification} from "../../features/error/notificationSlice.ts";

export const Notification = () => {
    const dispatch = useDispatch();

    const notification = useSelector(
        (state: any) => state.notification
    );

    useEffect(() => {
        if (!notification.visible) return;

        const timer = setTimeout(() => {
            dispatch(hideNotification());
        }, notification.duration);

        return () => clearTimeout(timer);
    }, [notification.visible]);

    if (!notification.visible) return null;

    return (
        <Wrapper>
            <Toast $type={notification.type}>
                {notification.text}
            </Toast>
        </Wrapper>
    );
};