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
    icon: FiLifeBuoy,
    list: [{
        name: 'Basic Queue',
        description: '',
        href: '/queue'
    }, {
        name: 'Priority Queue',
        description: '',
        href: '/pqueue'
    }]
}, {
    name: 'Linked List',
    description: '',
    icon: FiLifeBuoy,
    list: [{
        name: 'Single Linked List',
        description: '',
        href: '/slinkedlist'
    }, {
        name: 'Double Linked List',
        description: '',
        href: '/dlinkedlist'
    }, {
        name: 'Circular Linked List',
        description: '',
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