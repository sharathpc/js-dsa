import { IconType } from "react-icons";
import { FiLayers, FiList } from "react-icons/fi";

interface LinkItemProps {
    name: string;
    description: string,
    icon: IconType;
    href: string;
}

const LinkItems: Array<LinkItemProps> = [{
    name: 'Stack',
    description: 'A Stack is a linear type of data structure which follows the LIFO(Last-In-First-Out) and allows insertion and deletion operations from one end of the data structure',
    icon: FiLayers,
    href: '/stack'
}, {
    name: 'Set',
    description: 'A set is a data structure that stores unique elements of the same type in a sorted order',
    icon: FiList,
    href: '/set'
}, /* {
    name: 'Queue',
    description: '',
    icon: FiHome,
    href: '/queue'
}, {
    name: 'Linked List',
    description: '',
    icon: FiHome,
    href: '/linked-list'
}, {
    name: 'Tree',
    description: '',
    icon: FiHome,
    href: '/tree'
}, {
    name: 'Trie',
    description: '',
    icon: FiHome,
    href: '/trie'
}, {
    name: 'Graph',
    description: '',
    icon: FiHome,
    href: '/graph'
} */];

export default LinkItems;