import { useState } from 'react';
import type { NextPage } from 'next'
import {
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  Flex
} from '@chakra-ui/react'

import styles from '../styles/slinkedlist.module.scss';
import TostConfig from '../data/tostConfig';
import CSingleLinkedList from '../functions/slinkedlist';

const cSingleLinkedList = new CSingleLinkedList();

const SingleLinkedList: NextPage = () => {
  const [DSASingleLinkedList, setDSASingleLinkedList] = useState<any[]>([]);
  const toast = useToast(TostConfig);

  const addHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    cSingleLinkedList.add(newNum);
    toast({
      title: 'Item added',
      status: 'success',
      description: newNum
    });
    setDSASingleLinkedList(cSingleLinkedList.values);
  }

  const removeHandler = () => {
    if (cSingleLinkedList.size > 0) {
      const newNum = Math.floor(Math.random() * 10) + 1;
      const removeInd = cSingleLinkedList.remove(newNum);
      toast({
        title: `Item ${newNum} removed`,
        status: 'warning',
        description: removeInd.toString()
      });
      setDSASingleLinkedList(cSingleLinkedList.values);
    }
  }

  const isEmptyHandler = () => {
    const isEmpty = cSingleLinkedList.isEmpty();
    toast({
      title: 'List empty',
      description: isEmpty.toString()
    });
  }

  const sizeHandler = () => {
    toast({
      title: 'List size',
      description: cSingleLinkedList.size
    });
  }

  const valuesHandler = () => {
    toast({
      title: 'List values',
      description: cSingleLinkedList.values.toString()
    });
  }

  return (
    <>
      <Flex my={10} minH={'40vh'} justifyContent={'center'} alignItems={'center'}>
        <ul className={styles.slinkedlistContainer}>
          {DSASingleLinkedList.map((item, index) =>
            <li className={styles.slinkedlistItem} key={index}>{item}</li>
          )}
        </ul>
      </Flex>

      <Tabs>
        <TabList>
          <Tab>Add</Tab>
          <Tab>Remove</Tab>
          <Tab>IsEmpty</Tab>
          <Tab>Size</Tab>
          <Tab>Values</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button width={100} onClick={addHandler}>Add</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={removeHandler}>Remove</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={isEmptyHandler}>IsEmpty</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={sizeHandler}>Size</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={valuesHandler}>Values</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default SingleLinkedList
