import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const notify = {
    success: (message: string) => {
        toast.success(message, {
            position: "bottom-right"
        });
    },
    error: (message: string) => {
        toast.error(message, {
            position: "bottom-right"
        });
    }
};

export default notify;