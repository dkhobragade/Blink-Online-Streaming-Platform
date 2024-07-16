import { AppShell, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import MenuList from './MenuList'
import Content from '../PageLevel/Content'

export default function PageLayout() {
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()

    const onMouseLeave = () => {
        setIsNavBarOpen(false)
    }

    const onMouseEnter = () => {
        setIsNavBarOpen(true)
    }


    return (
        <AppShell
            // withBorder={false}
            // padding="md"
            navbar={{
                width: rem(60),
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: false },
            }}
        >
            <AppShell.Navbar style={{ backgroundColor: '#F96167' }}>
                <MenuList />
            </AppShell.Navbar>
            <AppShell.Main style={{ backgroundColor: '#0F1014' }}>
                <Content />
            </AppShell.Main>
        </AppShell>
    )
}

