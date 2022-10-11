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
import LinkItems from '../data/listItems';

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
                        <NavItem key={link.name} icon={link.icon} href={link.href}>
                            <Text fontSize="xl" fontWeight="bold">{link.name}</Text>
                        </NavItem>
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

interface NavItemProps extends FlexProps {
    icon: IconType;
    href: string;
    children: ReactNode;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'green.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default Layout