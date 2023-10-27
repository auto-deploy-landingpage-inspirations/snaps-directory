import type { BoxProps } from '@chakra-ui/react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import type { FunctionComponent } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterLinks } from './FooterLinks';
import { FooterTerms } from './FooterTerms';
import { MetaMaskLogo } from './MetaMaskLogo';

export type FooterProps = BoxProps;

export const Footer: FunctionComponent<FooterProps> = (props) => (
  <Box
    {...props}
    as="footer"
    background="background.card"
    marginTop={{ base: 4, md: 20 }}
  >
    <Container maxWidth="7xl" paddingY="12">
      <Flex
        flexDirection={['column', null, 'row']}
        justifyContent="space-between"
        gap="4"
      >
        <Box>
          <MetaMaskLogo marginBottom="4" />
          <Text
            color="gray.muted"
            display="block"
            maxWidth="30rem"
            marginBottom={['12', null, '24']}
          >
            <Trans>
              Start exploring blockchain applications in seconds. Trusted by
              over 30 million users worldwide.
            </Trans>
          </Text>
        </Box>
        <FooterLinks />
      </Flex>
      <FooterTerms />
      <FooterCopyright />
    </Container>
  </Box>
);
