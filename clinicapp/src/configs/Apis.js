import axios from "axios"

export let endpoints = {
    "medicine":"/medicine/",
    "category_medicine":"/category_medicine/"
}

export default axios.create({
    baseURL:"http://127.0.0.1:8000/"
})