import ElemsRow from './ElemsRow'
import FlexContainer from './FlexContainer'
import { Box, rem, Tooltip } from '@mantine/core'
import { MenuList as List } from '../../constant'
import { useNavigate } from 'react-router-dom'

export default function MenuList() {
    const navigate = useNavigate()


    const onMenuListClick = (id: string) => {
        switch (id) {
            case '1':
                navigate('/homePage/user')
                break
            case '2':
                navigate('/homePage/search')
                break
            case '3':
                navigate('/homePage')
                break
            case '4':
                navigate('/homePage/tv')
                break
            case '5':
                navigate('/homePage/movie')
                break
            case '6':
                navigate('/homePage/sport')
                break
            case '7':
                navigate('/homePage/categories')
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
