import { toast, Zoom } from "react-toastify";

export function notify_valido(text){
    return toast.success(text,{
        className: "toast-message",
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
}

export function notify_warning(text){
    return toast.warn(text,{
        className: "toast-message",
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
}

export function notify_error(text){
    return toast.error(text,{
        className: "toast-message",
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
}
export function notify_error_fijo(text){
    return toast.error(text,{
        className: "toast-message",
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
        transition: Zoom,
      });
}
export function notify_warning_fijo(text){
    return toast.warn(text,{
        className: "toast-message",
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "",
        progress: undefined,
        transition: Zoom,
      });
}