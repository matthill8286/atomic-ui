import { Meta, Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'
import { MultiViewModal, MultiViewModalProps } from './MultiViewModal'
import { MultiViewModalProvider, useMultiViewModalAction } from './MultiViewModal.store'
import { MultiViewModalView } from './MultiViewModalView'
import { Button } from '@/components/Atoms/Button'
import { Spacer } from '@/components/Atoms/Spacer'
import { Cell, FlexBox, Grid, Row } from '@/components/Helper'
import { CookieLayer } from '@/components/Organisms/CookieLayer'
import { HeadingFeatured, Typo } from '@/components/Atoms/Typography'
import { Link } from '@/components/Atoms/Link'
import { Card } from '@/components/Atoms/Card'
import { Accordion } from '@/components/Molecules/Accordion'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Design System/Organisms/Multi View Modal',
  component: MultiViewModal,
  args: {
    targetId: 'modal-portal',
  },
  decorators: [
    Story => {
      return (
        <MultiViewModalProvider homeViewId="view-1">
          <StoryContainer>
            <Story />
          </StoryContainer>
        </MultiViewModalProvider>
      )
    },
  ],
} as Meta

const mockCookieLayerLabels = {
  headline: 'Welcome to saiyan!!',
  infoText: `This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.`,
  button: 'Accept',
  preferences: 'Manage Preferences',
}

const StoryContainer = ({ children }): JSX.Element => {
  const { setActive, setView } = useMultiViewModalAction()

  return (
    <>
      <div id="modal-portal" />

      <FlexBox>
        <Button
          onClick={() => {
            setView('view-1')
            setActive(true)
          }}>
          Open Modal: view 1
        </Button>

        <Spacer size="sm" direction="vertical" />

        <Button
          actionType="secondary"
          onClick={() => {
            setView('view-2')
            setActive(true)
          }}>
          Open Modal: view 2
        </Button>
      </FlexBox>

      {children}
    </>
  )
}

const Template: Story<PropsWithChildren<MultiViewModalProps>> = args => {
  const { setView, close } = useMultiViewModalAction()

  return (
    <MultiViewModal {...args} hideCloseButton canClose={false} showBackButton={false}>
      <MultiViewModalView id="view-1">
        <CookieLayer
          position="relative"
          mainContent={mockCookieLayerLabels.headline}
          buttonAlignment="center"
          primaryButtonProps={{
            buttonLabel: 'Manage Preferences',
            actionType: 'primary',
            onClick: () => setView('view-2'),
          }}
          secondaryButtonProps={{
            buttonLabel: 'Accept',
            actionType: 'outlined',
            onClick: close,
          }}
        />
      </MultiViewModalView>

      <MultiViewModalView id="view-2">
        <Grid>
          <Row noMargin>
            <Cell columns={12}>
              <HeadingFeatured>Your Preferences would be here/........</HeadingFeatured>
            </Cell>
          </Row>
          <Row>
            <Cell columns={12}>
              <HeadingFeatured>Functional</HeadingFeatured>
              <Card
                elevation={0}
                padding="md"
                shape="rounded-small"
                margin={{ top: 'xs', bottom: 'xs' }}>
                <Typo
                  tag="span"
                  fontSize={{
                    desktop: 'sm',
                    mobile: 'xs',
                  }}>
                  We use cookies (and other similar technologies) to collect data to improve your
                  experience on our site. By using our website, you’re agreeing to the collection of
                  data as described in our{' '}
                  <Link inline underline={false} href="#" target="_blank" rel="noopener noreferrer">
                    cookie statement
                  </Link>
                  .
                </Typo>
                <Accordion
                  entries={[
                    {
                      details: 'expanded from sm',
                      title: 'expanded from sm',
                    },
                  ]}
                />
              </Card>
            </Cell>
          </Row>
        </Grid>
      </MultiViewModalView>
    </MultiViewModal>
  )
}

export const Default = Template.bind({})
