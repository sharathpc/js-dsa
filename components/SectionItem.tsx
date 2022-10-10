import React, { ReactNode } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface Props {
    title?: string,
    children: ReactNode
}

const SectionItem = ({ title, children }: Props) => {
    return (
        <Flex direction={'column'} alignItems={'center'}>
            {title && <Heading as='h4' size='md' mb={5}>{title}</Heading>}
            {children}
        </Flex>
    );
}

export default SectionItem