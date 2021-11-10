import { Meta, Story } from '@storybook/react'
import React from 'react'
import { INewsItem, NewsItem } from '@/components/Molecules/NewsItem/NewsItem'
import { styled } from '@/styles'

const NewsItemWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
`

export default {
  title: 'Design System/Molecules/NewsItem',
  component: NewsItem,
} as Meta

const Template: Story<INewsItem> = (args: INewsItem) => (
  <NewsItemWrapper>
    <NewsItem {...args} />
  </NewsItemWrapper>
)

export const NewsItemStory = Template.bind({})
NewsItemStory.args = {
  title: 'Carbon',
  description: 'Vorsteiner Spoiler',
  image: 'public/images/featured_products/featured_product_lxp.jpg',
  buttonLink: '#',
  buttonLabel: 'Read More',
  newsText:
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer took a galley of type and scrambled it to make a type specimen book.',
  date: '21/11/21',
}
NewsItemStory.argTypes = {}
