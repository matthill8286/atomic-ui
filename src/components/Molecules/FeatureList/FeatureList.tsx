import React from 'react'
import { Divider } from '@/components/Atoms/Divider'
import { CopyText } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper/FlexBox'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { styled } from '@/styles'

export type FeatureListType = { label?: string; value: string }

export interface FeatureListProps {
  list: FeatureListType[]
}

export const ListWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.base.sm};
  padding-bottom: ${({ theme }) => theme.spacing.base.sm};
`

export const FeatureList: React.FC<FeatureListProps> = ({ list }): JSX.Element | null => {
  if (!list || !Array.isArray(list) || !list.length) {
    return null
  }

  return (
    <FlexBox display="flex" flexDirection="column">
      {list.map((item, idx) =>
        item.label !== '' && item.label ? (
          <React.Fragment key={`FeatureList-${item.label}-${idx}`}>
            <ListWrapper>
              <Grid noPadding>
                <Row noMargin>
                  <Cell columns={6} colsMd={4} colsSm={4} colsXs={2}>
                    <CopyText weight="semibold" color="grey5" margin="0">
                      {item.label}
                    </CopyText>
                  </Cell>
                  <Cell columns={6} colsMd={4} colsSm={4} colsXs={2}>
                    <CopyText color="grey5" margin="0">
                      {item.value}
                    </CopyText>
                  </Cell>
                </Row>
              </Grid>
            </ListWrapper>
            <Divider color="grey2" height={1} />
          </React.Fragment>
        ) : null
      )}
    </FlexBox>
  )
}

FeatureList.displayName = 'FeatureList'
