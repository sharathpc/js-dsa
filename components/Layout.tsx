import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Divider,
} from '@chakra-ui/react';

import HeadingSection from '../components/HeadingSection';
import { LinkItems, LinkItemProps } from '../data/listItems';

const Layout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    let activeHeader = recursiveFindLinkItem(LinkItems);

    function recursiveFindLinkItem(itemsList: LinkItemProps[]): LinkItemProps | undefined {
        for (const item of itemsList) {
            if (item.list) {
                const headerItem = recursiveFindLinkItem(item.list);
                if (headerItem) {
                    return headerItem;
                }
            } else if (item.href === router.pathname) {
                return item;
            }
        }
    }

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
                    w={80}
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
                        <NavItem key={link.name} link={link} activeLink={activeHeader?.href} fontSize="xl" />
                    ))}
                </Box>
                <Box ml={{ base: 0, md: 80 }} p="4">
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

const NavItem = ({ link, activeLink, fontSize, ...rest }: {
    link: LinkItemProps,
    activeLink: string | undefined,
    fontSize: string,
    py?: number
}) => {
    let attributes: any = link.list ? {
        fontSize: fontSize,
        py: 2,
    } : {
        fontSize: fontSize,
        py: 3,
        cursor: 'pointer',
        _hover: {
            bg: 'green.800',
            color: 'white',
        }
    };

    if (link.href && link.href === activeLink) {
        attributes['backgroundColor'] = 'green.400';
    }

    return (
        <Link href={link.href || ''} style={{ textDecoration: 'none' }}>
            <Box>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    my="2"
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
                <Box ml={4}>
                    {link.list && link.list.map((item) => (
                        <NavItem key={item.name} link={item} py={2} activeLink={activeLink} fontSize="md" />
                    ))}
                </Box>
            </Box>
        </Link>
    );
};

export default Layout