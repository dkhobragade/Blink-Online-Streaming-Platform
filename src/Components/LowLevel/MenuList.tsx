import ElemsRow from './ElemsRow'
import FlexContainer from './FlexContainer'
import { Box, rem, Tooltip } from '@mantine/core'
import { MenuList as List } from '../../constant'
import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai'
import { selectedId } from '../../Atom/atom'

export default function MenuList() {
    const navigate = useNavigate()
    const selectedID = useSetAtom(selectedId)


    const onMenuListClick = (id: string) => {
        switch (id) {
            case '1':
                navigate('/homePage/user')
                selectedID('1')
                break
            case '2':
                navigate('/homePage/search')
                selectedID('2')
                break
            case '3':
                navigate('/homePage')
                selectedID('3')
                break
            case '4':
                navigate('/homePage/tv')
                selectedID('4')
                break
            case '5':
                navigate('/homePage/movie')
                selectedID('5')
                break
            case '6':
                navigate('/homePage/sport')
                selectedID('6')
                break
            case '7':
                navigate('/homePage/categories')
                selectedID('7')
                break
            default:
                navigate('/homePage')
        }
    }

    const renderMenuList = () => {
        return <ElemsRow spacing={rem(40)} >
            {List.map((item) => {
                return <Box onClick={() => onMenuListClick(item.id)}>
                    <Tooltip label={item.label} position='right' color='#f2aa4cff' withArrow={true} >
                        {item.icon}
                    </Tooltip>
                </Box>
            })}
        </ElemsRow>
    }

    return (
        <FlexContainer px={rem(20)} py={rem(50)}>
            {renderMenuList()}
        </FlexContainer>
    )
}
