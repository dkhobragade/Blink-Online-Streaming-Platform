import { AppShell, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import MenuList from './MenuList'
import { routerList } from '../../Routes/Routes'
import { useAtomValue } from 'jotai'
import { selectedId } from '../../Atom/atom'

export default function PageLayout() {
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
    const selectedID = useAtomValue(selectedId)

    const onMouseLeave = () => {
        setIsNavBarOpen(false)
    }

    const onMouseEnter = () => {
        setIsNavBarOpen(true)
    }

    const renderMain = () => {
        const selectedItem = routerList.find((item) => item.id === selectedID);
        return selectedItem ? selectedItem.page : null
    }


    return (
        <AppShell
            withBorder={false}
            // padding="md"
            navbar={{
                width: rem(60),
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: false },
            }}
        >
            <AppShell.Navbar style={{ backgroundColor: '#101820ff' }}>
                <MenuList />
            </AppShell.Navbar>
            <AppShell.Main style={{ backgroundColor: '#0F1014' }}>
                {renderMain()}
            </AppShell.Main>
        </AppShell>
    )
}

