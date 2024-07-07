import { menuItem, preparePromise } from '../../constant'
import { useEffect } from 'react'

export default function Sider() {
    useEffect(() => {
        testURl()
    }, [])

    const testURl = () => {
        // preparePromise('tv/popular').then((resp) => {
        //     console.log('resp', resp)
        // })
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

    return <></>

    // return <>{showMenu()}</>
}
