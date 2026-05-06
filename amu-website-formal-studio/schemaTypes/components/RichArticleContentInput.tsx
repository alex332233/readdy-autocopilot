import {Box, Button, Card, Flex, Text} from '@sanity/ui'
import type {ArrayOfObjectsInputProps} from 'sanity'

const createEmptyParagraph = () => ({
  _key: `paragraph-${Math.random().toString(36).slice(2, 12)}`,
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [
    {
      _key: `span-${Math.random().toString(36).slice(2, 12)}`,
      _type: 'span',
      marks: [],
      text: '',
    },
  ],
})

export function RichArticleContentInput(props: ArrayOfObjectsInputProps) {
  const handleAppendParagraph = () => {
    props.onItemAppend(createEmptyParagraph())
  }

  return (
    <div>
      {props.renderDefault(props)}
      <Card marginTop={3} padding={3} radius={2} tone="transparent" border>
        <Flex align="center" justify="space-between" gap={3}>
          <Box flex={1}>
            <Text size={1} muted>
              插入圖片後若滑鼠點不到下一行，可按下方按鈕新增一個文字段落。
            </Text>
          </Box>
          <Button
            disabled={props.readOnly}
            mode="ghost"
            onClick={handleAppendParagraph}
            text="新增文字段落"
            tone="primary"
          />
        </Flex>
      </Card>
    </div>
  )
}
