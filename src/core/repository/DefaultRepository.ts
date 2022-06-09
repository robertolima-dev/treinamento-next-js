import axios from "axios"
import { config } from '../../utils/headers'
import { handleError, handleSuccess } from '../../utils/repositoryResponse'

export default interface DefaultFunctions {
    index(limit: any, offset: any, filter: any): Promise<any>
    create(data: any): Promise<any>
    update(id: any, data: any): Promise<any>
    show(id: any): Promise<any>
    delete(id: any): Promise<any>
}

export default class DefaultRepository implements DefaultFunctions {

    async index(limit: any, offset: any, filter: any): Promise<any> {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/default?limit=${limit}&offset=${offset}&filter=${filter}`, config())
            return handleSuccess(res)
        } catch (error) {
            return handleError(error)
        }
    }

    async create(data: any): Promise<any> {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/default`, data, config())
            return handleSuccess(res)
        } catch (error) {
            return handleError(error)
        }
    }

    async update(id: any, data: any): Promise<any> {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/default/${id}`, data, config())
            return handleSuccess(res)
        } catch (error) {
            return handleError(error)
        }
    }

    async show(id: any): Promise<any> {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/default/${id}`, config())
            return handleSuccess(res)
        } catch (error) {
            return handleError(error)
        }
    }

    async delete(id: any): Promise<any> {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/default/${id}`, config())
            return handleSuccess(res)
        } catch (error) {
            return handleError(error)
        }
    }
}