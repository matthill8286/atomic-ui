import React, { memo } from 'react'
import { CopyText, Typo } from '@/components/Atoms/Typography'

export interface INewsItem {
  image: string
  title: string
  description: string
  date: string
  newsText: string
  buttonLabel: string
  buttonLink: string
}

export const NewsItem = memo(
  ({ image, title, description, date, newsText, buttonLabel, buttonLink }: INewsItem) => (
    <div className="news-item">
      <figure className="news-content">
        <img alt="News Img" src={image} />
        <figcaption>
          <div className="inner-divider-news" />

          <div className="the-overline the-overline-news" />

          <div className="inner-divider-half" />

          <h3>{title}</h3>

          <div className="inner-divider-news-half" />

          <h4 className="post-all-heading">{description}</h4>

          <div className="inner-divider-news-half" />

          <h5>{date}</h5>

          <div className="inner-divider-news" />

          <CopyText tag="div" textAlign="center" lineHeight="md">
            {newsText}
          </CopyText>

          <div className="inner-divider-news" />

          <div className="the-button-wrapper the-button-wrapper-news">
            <a data-toggle="modal" href={buttonLink}>
              <Typo className="the-button">{buttonLabel}</Typo>
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  )
)
