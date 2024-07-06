import { Card, Col, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
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

    return (
        <Layout style={{ width: '100vw', height: '100vh' }}>
            <Sider
                style={{ width: '100vw', height: '100vh', padding: '16px' }}
                trigger={null}
                collapsible
                collapsed={isCollapsed}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {props.sider}
            </Sider>
            <Content style={{ padding: '16px' }}>{props.content}</Content>
        </Layout>
    )
}
