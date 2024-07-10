import React from 'react'
import ElemsRow from './ElemsRow'
import FlexContainer from './FlexContainer'
import { Box, rem } from '@mantine/core'
import {
    IconCategory,
    IconDeviceTv,
    IconHome,
    IconMovie,
    IconOlympics,
    IconSearch,
    IconUser,
} from '@tabler/icons-react'

export default function MenuList() {
    return (
        <FlexContainer px={rem(20)} py={rem(50)}>
            <ElemsRow spacing="2rem">
                <Box>
                    <IconUser stroke="white" fill="white" />
                </Box>
                <Box>
                    <IconSearch fill="white" />
                </Box>
                <Box>
                    <IconHome fill="white" />
                </Box>
                <Box>
                    <IconDeviceTv fill="white" />
                </Box>
                <Box>
                    <IconMovie fill="white" />
                </Box>
                <Box>
                    <IconOlympics fill="white" />
                </Box>
                <Box>
                    <IconCategory fill="white" />
                </Box>
            </ElemsRow>
        </FlexContainer>
    )
}
