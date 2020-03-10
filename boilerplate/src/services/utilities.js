import { humanize } from 'underscore.string';
import { toast } from 'react-toastify';
// import { toast } from 'mdbreact'

const service = {
    arrayToObject(array) {
        const mapped = array.map(value => ({
            name: humanize(value),
            value,
        }));
        return [...mapped];
    },
    showSucessMessage(message) {
        if (!message) return;

        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        });
    },
    showWarningMessage(message) {
        if (!message) return;

        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    },
    showErrorMessage(message) {
        if (!message) return;

        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
        });
    },

};

window.$utility = service;

export default service;
