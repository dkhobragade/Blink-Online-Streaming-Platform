import { Menu, MenuProps } from 'antd'
import { menuItem, preparePromise } from '../../constant'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useEffect } from 'react'

export default function Sider() {
    const onMenuItemsClick = (info: MenuInfo) => {
        console.log(info)
    }

    useEffect(() => {
        testURl()
    }, [])

    const testURl = () => {
        preparePromise('tv/popular').then((resp) => {
            console.log('resp', resp)
        })
    }

    const showMenu = () => {
        return (
            <>
                {menuItem.map((item) => {
                    return (
                        <div style={{ color: 'red' }} key={item.key}>
                            <div style={{ width: '100px', height: '100px' }}>{item.icon}</div>
                            {/* {item.title} */}
                        </div>
                    )
                })}
            </>
        )
    }

    return <Menu onClick={(info) => onMenuItemsClick(info)} mode="inline" items={menuItem}></Menu>

    // return <>{showMenu()}</>
}
