import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

interface Props {
    title: string,
    description: string
}

const HeadingSection = ({ title, description }: Props) => {
    return (
        <>
            <Heading
                fontWeight={600}
                fontSize={'4xl'}
                lineHeight={'110%'} color={'green.400'}>
                {title}
            </Heading>
            <Text>{description}</Text>
        </>
    );
}

export default HeadingSection