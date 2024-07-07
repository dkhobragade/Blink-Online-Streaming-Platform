import { MenuItemType } from 'antd/es/menu/interface'
import {
    DesktopOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    MinusCircleOutlined,
    SearchOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { url } from 'inspector'

export const menuItem: MenuItemType[] = [
    {
        icon: <UserOutlined />,
        title: 'My Space',
        key: '',
    },
    {
        icon: <SearchOutlined />,
        title: 'Search',
        key: '',
    },
    {
        icon: <HomeOutlined />,
        title: 'Home',
        key: '',
    },
    {
        icon: <DesktopOutlined />,
        title: 'TV',
        key: '',
    },
    {
        icon: <MinusCircleOutlined />,
        title: 'Movies',
        key: '',
    },
    {
        icon: <MenuUnfoldOutlined />,
        title: 'Categories',
        key: '',
    },
]

export const api_key = '5c61281db1640e948982784ce33529dc'

export const https = 'https://api.themoviedb.org/3/'

export const img_https = 'https://image.tmdb.org/t/p/w500/'

const apiGet = (url: string) => {
    const init: RequestInit = {
        method: 'GET',
    }
    return fetch(url, init).then((resp) => {
        return resp.json()
    })
}

const apiPost = (url: string, requestBody?: Record<string, string>) => {
    const requestPayload: Record<string, any> = {
        method: 'POST',
    }
    const formData = new FormData()
    for (const key in requestBody) {
        formData.set(key, requestBody[key])
    }

    if (requestBody) {
        requestPayload['body'] = formData
    }
    return fetch(url, requestPayload).then((resp) => {
        return resp.json()
    })
}

const processApiResponse = (response: any) => {
    return response
}

export const preparePromise = (type: string, url: string, params?: Record<string, string>) => {
    const payload = {
        ...params,
    }

    const updatedURl = `${https}${url}?api_key=${api_key}`

    if (type === 'get') {
        return apiGet(updatedURl).then((resp) => processApiResponse(resp))
    } else {
        return apiPost(updatedURl, payload).then((resp) => processApiResponse(resp))
    }
}
