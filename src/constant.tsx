import { MenuItemType } from 'antd/es/menu/interface'
import {
    DesktopOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    MinusCircleOutlined,
    SearchOutlined,
    UserOutlined,
} from '@ant-design/icons'

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

export const preparePromise = (url: string, options?: any) => {
    const updatedURl = `${https}${url}?api_key=${api_key}`

    return fetch(updatedURl, options).then((resp) => {
        return resp.json()
    })
}
