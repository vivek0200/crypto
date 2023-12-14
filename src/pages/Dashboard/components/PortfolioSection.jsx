import { HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6">
      <Stack>
        <HStack color="black.80">
            <Text fontSize="14px" >Total Portfolio Value</Text>
            <Icon as={IoInformationCircleOutline} />
        </HStack>
        <Text fontSize="24px">₹ 112,312.24</Text>
      </Stack>
    </HStack>
  )
}

export default PortfolioSection
