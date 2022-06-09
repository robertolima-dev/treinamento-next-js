import { notification } from 'antd';

export const openNotification = (message: any, description: any, status: any, duration: any = 10) => {
    notification[status]({
        message,
        description,
        duration,
    });
}