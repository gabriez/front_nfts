import { toast } from 'react-toastify';

export const alertLogin = () => {
  toast.success('Bienvenido', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
  