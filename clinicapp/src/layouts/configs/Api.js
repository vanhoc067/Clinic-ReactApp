import axios from "axios"
import cookie from "react-cookies"

export const endpoints = {
    'medicine':  '/medicine/',
    "oauth2-info":"/oauth2-info",
    "login":"/o/token/",
    "current_user":"/users/current-user/",
    "users":"/users/",
    "examination-schedule":'/examination_schedule/',
    'medicine-detail': (medicineId) => `/medicine/${medicineId}/`,
    'like-medicine': (medicineId) => `/medicine/${medicineId}/like/`,
    'rate-medicine': (medicineId) => `/medicine/${medicineId}/rating/`,
    'patient': '/patient/',
    'bill': '/bill/',
    'medicine-comments': (medicineId) => `/medicine/${medicineId}/comments/`,
    'comments': '/comments/'
}

export const authAxios = () => axios.create({
    baseURL: 'https://vanhoc067.pythonanywhere.com/',
    headers: {
        'Authorization': `Bearer ${cookie.load('access_token')}`
    }
})

export default axios.create({
    baseURL: 'https://vanhoc067.pythonanywhere.com/'
})