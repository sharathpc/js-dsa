import { IconType } from "react-icons";
import { FiLayers, FiList, FiLifeBuoy } from "react-icons/fi";

export interface LinkItemProps {
    name: string;
    description: string;
    icon?: IconType;
    href?: string;
    list?: LinkItemProps[];
}

export const LinkItems: LinkItemProps[] = [{
    name: 'Stack',
    description: 'A Stack is a linear type of data structure which follows the LIFO(Last-In-First-Out) and allows insertion and deletion operations from one end of the data structure',
    icon: FiLayers,
    href: '/stack'
}, {
    name: 'Set',
    description: 'A set is a data structure that stores unique elements of the same type in a sorted order',
    icon: FiList,
    href: '/set'
}, {
    name: 'Queue',
    description: '',
    list: [{
        name: 'Basic Queue',
        description: '',
        icon: FiLifeBuoy,
        href: '/queue'
    }, {
        name: 'Priority Queue',
        description: '',
        icon: FiLifeBuoy,
        href: '/pqueue'
    }]
}, {
    name: 'Linked List',
    description: '',
    list: [{
        name: 'Single Linked List',
        description: '',
        icon: FiLifeBuoy,
        href: '/slinkedlist'
    }, {
        name: 'Double Linked List',
        description: '',
        icon: FiLifeBuoy,
        href: '/dlinkedlist'
    }, {
        name: 'Circular Linked List',
        description: '',
        icon: FiLifeBuoy,
        href: '/clinkedlist'
    }]
}, {
    name: 'Tree',
    description: '',
    icon: FiLifeBuoy,
    href: '/tree'
}, {
    name: 'Trie',
    description: '',
    icon: FiLifeBuoy,
    href: '/trie'
}, {
    name: 'Graph',
    description: '',
    icon: FiLifeBuoy,
    href: '/graph'
}];