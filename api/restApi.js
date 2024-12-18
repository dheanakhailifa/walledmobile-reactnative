import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem('userToken')

const api = axios.create({
    baseURL :'http://54.254.164.127/api/v1',
    headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token
    }
})

export const fetchPosts = async () => {
    const token = await AsyncStorage.getItem('userToken')
    console.log('tokennn', token)
    try {
        const response = await api.get('/users/me', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return response.data.data
    } catch (error) {
        // console.error("Error fetching posts:", error.response?.data || error.message);
        throw new Error('Failed to fetch posts :' + error.message)
    }
}

export const createPost = async (postData) => {
    try {
      const response = await api.post('/auth/users/', postData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create post: ' + error.message);
    }
  };

export const login = async (payload) => {
    console.log('dada', payload)
    try {
      const response = await api.post('/auth/login', payload)
      return response.data;
    } catch (error) {
        console.log('errorrr', error)
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };

  export const register = async (name,email, password, phoneNumber) => {
    console.log(name, email,password, phoneNumber)
    try {
        const body ={
            full_name : name,
            email : email,
            password : password,
            phone_number:phoneNumber
        }
        console.log("hai")
      const response = await api.post('/auth/register', body);
      console.log(response.data)

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Registration failed');
    }
  };

  export const fetchTransaction = async () => {
    const token = await AsyncStorage.getItem('userToken')
    console.log('tokennn transak', token)
    try {
        const response = await api.get('/transactions', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return response.data.data
    } catch (error) {
        // console.error("Error fetching posts:", error.response?.data || error.message);
        throw new Error('Failed to fetch posts :' + error.message)
    }
}

export const postsTransaction = async (payload) => {
    const token = await AsyncStorage.getItem('userToken')
    try {
      const response = await api.post('/transactions', payload, {
        headers: {
            Authorization: 'Bearer ' + token
        }
      })
      return response.data;
    } catch (error) {
        console.log('errorrr', error)
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };


export default api