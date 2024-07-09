import { MantineSpacing, SimpleGrid } from '@mantine/core'

interface Props {
    numCols?: number
    children?: any
    height?: string
    maxWidth?: string
    width?: string
    spacing?: any
    colStyle?: 'min' | 'max'
    padding?: MantineSpacing
    colTemplate?: number[]
}

export default function ElemsRow({
    numCols = 1,
    children,
    height,
    maxWidth,
    width = '100%',
    spacing = 'sm',
    colStyle,
    padding,
    colTemplate,
}: Props) {
    let gridTemplateCols = ''
    colTemplate?.forEach((item) => {
        gridTemplateCols += `${item}fr `
    })

    return (
        <SimpleGrid
            p={padding}
            style={{ gridTemplateColumns: gridTemplateCols }}
            className={colStyle === 'max' ? 'maxStyle' : colStyle === 'min' ? 'minStyle' : ''}
            spacing={spacing}
            h={height}
            w={width}
            maw={maxWidth}
            cols={numCols}
        >
            {children}
        </SimpleGrid>
    )
}
