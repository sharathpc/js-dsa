import React, { ReactNode } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface Props {
    title?: string,
    height: any,
    children: ReactNode
}

const SectionItem = ({ title, height, children }: Props) => {
    return (
        <Flex my={10} height={height} direction={'column'} alignItems={'center'}>
            {title && <Heading as='h4' size='md' mb={5}>{title}</Heading>}
            {children}
        </Flex>
    );
}

export default SectionItem