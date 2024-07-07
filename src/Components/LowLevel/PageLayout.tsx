import { useState } from 'react'

interface Props {
    sider: React.ReactNode
    content: React.ReactNode
    isCollapse?: boolean
}

export default function PageLayout(props: Props) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    // const onClickCollapse = (collapsed: boolean, type: CollapseType) => {
    //     setIsCollapsed(collapsed)
    // }

    const onMouseEnter = () => {
        setIsCollapsed(false)
    }

    const onMouseLeave = () => {
        setIsCollapsed(true)
    }

    return <></>
}
