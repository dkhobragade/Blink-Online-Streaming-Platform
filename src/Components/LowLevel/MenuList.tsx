import ElemsRow from './ElemsRow'
import FlexContainer from './FlexContainer'
import { Box, rem, Tooltip } from '@mantine/core'
import { MenuList as List } from '../../constant'

export default function MenuList() {

    const renderMenuList = () => {
        return <ElemsRow spacing={rem(40)} >
            {List.map((item) => {
                return <Box>
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
