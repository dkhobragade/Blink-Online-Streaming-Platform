import { Box, Card, rem } from '@mantine/core'
import React from 'react'
import LoginBg from '../../Assets/testLogin.jpg'

export default function TestLogin() {
    return (
        <div
            style={{
                backgroundImage: `url(${LoginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // filter: 'brightness(0.7)',
            }}
        >
            <Card w={rem(600)} h={rem(600)} radius="lg">
                {/* <Card.Section>
                    <Box
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            height: rem(70),
                            transform: 'skewX(-10deg)',
                            overflow: 'hidden',
                        }}
                    >
                        <Box style={{ backgroundColor: 'red' }}></Box>
                        <Box style={{ backgroundColor: 'orange' }}></Box>
                        <Box style={{ backgroundColor: 'yellow' }}></Box>
                        <Box style={{ backgroundColor: 'green' }}></Box>
                        <Box style={{ backgroundColor: 'blue' }}></Box>
                        <Box style={{ backgroundColor: 'indigo' }}></Box>
                        <Box style={{ backgroundColor: 'violet', marginLeft: '-2px' }}></Box>
                    </Box>
                </Card.Section> */}
                <div className="clapperboard">
                    <div className="top">
                        <div className="stripe black"></div>
                        <div className="stripe red"></div>
                        <div className="stripe yellow"></div>
                        <div className="stripe green"></div>
                        <div className="stripe blue"></div>
                        <div className="stripe white"></div>
                    </div>
                    <div className="bottom">
                        <div className="top-row">
                            <div className="box roll">A01</div>
                            <div className="box scene">1</div>
                            <div className="box take">9</div>
                            <div className="box fps">23.98</div>
                        </div>
                        <div className="mid-row">
                            <div className="box timecode">16.21.34.21</div>
                        </div>
                        <div className="bottom-row">
                            <div className="box prod">Roadside</div>
                            <div className="box dir">Jakob & Ryan</div>
                            <div className="box cam">Thomas Taugher</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
