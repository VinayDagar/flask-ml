import Axios from 'axios';
import {
    stringify,
} from 'qs';

function createAxios() {
    const axios = Axios.create();

    axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;
    // axios.defaults.headers.common['x-access-token'] = localStorage.getItem('x-access-token') || '';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.timeout = 120000; // 120 seconds before time out

    axios.interceptors.request.use(
        (conf) => {
            return conf;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // if (error && error.response && error.response.status === 401) {
            //     store.dispatch('auth/logout');
            // }
            return Promise.reject(error.response.data);
        },
    );
    return axios;
}

// Initialise Axios
const api = createAxios();

const service = {
    getHeaders() {
        return {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token'),
        };
    },
    // POST services
    async postWithoutHeaders(route, body) {
        const {
            data,
        } = await api.post(route, body);
        return data.object;
    },

    async rawPost(path, payload) {
        const headers = this.getHeaders();

        const data = await api.post(path, payload, {
            headers,
        });

        return data;
    },

    // GET services
    async getById(route, id) {
        const headers = this.getHeaders();
        const {
            data,
        } = await api.get(`${route}/${id}`, {
            headers,
        });
        return data.object;
    },

    async get(route, query = {}, shouldAppendV2 = false) {
        if (shouldAppendV2) {
            Object.assign(query, {
                apiVersion: 'v2',
            });
        }
        const headers = this.getHeaders();
        const {
            data,
        } = await api.get(`${route}?${stringify(query)}`, {
            headers,
        });
        return data.object;
    },

    async getWithoutHeaders(route) {
        const {
            data,
        } = await api.get(route);
        return data.object;
    },

    // PUT services
    async update(route, query = {}, body, shouldAppendV2 = false) {
        if (shouldAppendV2) {
            Object.assign(query, {
                apiVersion: 'v2',
            });
        }
        const headers = this.getHeaders();
        const {
            data,
        } = await api.put(`${route}?${stringify(query)}`, body, {
            headers,
        });
        return data.object;
    },

    async rawPut(path, payload) {
        const {
            data,
        } = await api.put(path, payload);
        return data.object;
    },

    async postFile(path, file) {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        const data = await api.post(path, file, {
            headers
        });
        return data;
    },

    test() {
        console.log('http service is working fine.');
    }
};

window.$http = service;

export default service;