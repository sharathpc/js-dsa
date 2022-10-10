import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { FiHome } from 'react-icons/fi';
import { IconType } from 'react-icons';
import {
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Link,
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
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={60}
                pos="fixed"
                h="full">
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="4xl" fontFamily="monospace" fontWeight="bold">
                        JS DSA
                    </Text>
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} href={link.href}>
                        {link.name}
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
    );
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    href: string;
    children: string;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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