import { toast } from 'react-toastify'

export const showSuccessToast = (msg) => {

    toast.success(msg, {
        position: toast.POSITION.TOP_LEFT
    })

}

export const showErrorToast = (msg) => {

    toast.error(msg, {
        position: toast.POSITION.TOP_LEFT
    })

}

export const showInfoToast = (msg) => {

    toast.info(msg, {
        position: toast.POSITION.TOP_LEFT
    })

}