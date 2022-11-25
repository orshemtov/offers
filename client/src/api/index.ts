import axios from "axios"

export interface Client {
  ID: number
  name: string
  company: string
  address: string
  phone: string
  email: string
}

export const getClients = async () => {
  const url = "/clients"
  const resp = await axios.get(url)
  return await resp.data
}

export const createClient = async (client: any) => {
  const url = `/clients`
  const resp = await axios.post(url, client)
  return await resp.data
}

export const editClient = async (id: number, client: Client) => {
  const url = `/clients?id=${id}`
  const resp = await axios.put(url, client)
  return await resp.data
}

export const deleteClient = async (id: number) => {
  const url = `/clients?id=${id}`
  const resp = await axios.delete(url)
  return resp.data
}