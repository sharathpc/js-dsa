import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { IconType } from 'react-icons';
import {
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    FlexProps,
    Divider,
} from '@chakra-ui/react';

import HeadingSection from '../components/HeadingSection';
import { LinkItems, LinkItemProps } from '../data/listItems';

const Layout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const activeHeader = LinkItems.find(item => item.href === router.pathname);

    return (
        <>
            <Head>
                <title>JS-DSA</title>
            </Head>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <Box
                    bg={useColorModeValue('white', 'gray.900')}
                    borderRight="1px"
                    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                    w={60}
                    pos="fixed"
                    h="full">
                    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                        <Link href='/'>
                            <Text fontSize="4xl" fontFamily="monospace" fontWeight="bold">
                                JS-DSA
                            </Text>
                        </Link>
                    </Flex>
                    {LinkItems.map((link) => (
                        <NavItem key={link.name} link={link} fontSize="xl" />
                    ))}
                </Box>
                <Box ml={{ base: 0, md: 60 }} p="4">
                    {activeHeader && (<>
                        <HeadingSection
                            title={activeHeader.name}
                            description={activeHeader.description}
                        />
                        <Divider my={5} />
                    </>)}
                    {children}
                </Box>
            </Box>
        </>
    );
}

const NavItem = ({ link, fontSize, ...rest }: {
    link: LinkItemProps,
    fontSize: string,
    py?: number
}) => {
    let attributes = link.list ? {
        fontSize: fontSize,
        pb: 2
    } : {
        fontSize: fontSize,
        cursor: 'pointer',
        _hover: {
            bg: 'green.400',
            color: 'white',
        }
    };
    return (
        <Link href={link.href || ''} style={{ textDecoration: 'none' }}>
            <Box>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    {...attributes}
                    {...rest}>
                    {link.icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={link.icon}
                        />
                    )}
                    <Text fontWeight="bold">{link.name}</Text>
                </Flex>
                <Box ml={6}>
                    {link.list && link.list.map((item) => (
                        <NavItem key={item.name} link={item} py={2} fontSize="md" />
                    ))}
                </Box>
            </Box>
        </Link>
    );
};

export default Layout