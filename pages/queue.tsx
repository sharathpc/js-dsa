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

import styles from '../styles/queue.module.scss';
import TostConfig from '../data/tostConfig';
import CQueue from '../functions/queue';

const cQueue = new CQueue();

const Queue: NextPage = () => {
  const [DSAQueue, setDSAQueue] = useState<any[]>([]);
  const toast = useToast(TostConfig);

  const enqueueHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    cQueue.enqueue(newNum);
    toast({
      title: 'Item queued',
      status: 'success',
      description: newNum
    });
    setDSAQueue(cQueue.values);
  }

  const dequeueHandler = () => {
    if (cQueue.size > 0) {
      const dequeueNum = cQueue.dequeue();
      toast({
        title: 'Item dequeued',
        status: 'warning',
        description: dequeueNum
      });
      setDSAQueue(cQueue.values);
    }
  }

  const peekHandler = () => {
    toast({
      title: 'Peek item',
      description: cQueue.peek()
    });
  }

  const isEmptyHandler = () => {
    toast({
      title: 'Queue empty',
      description: cQueue.peek()
    });
  }

  const sizeHandler = () => {
    toast({
      title: 'Queue size',
      description: cQueue.size
    });
  }

  const valuesHandler = () => {
    toast({
      title: 'Queue values',
      description: cQueue.values.toString()
    });
  }

  return (
    <>
      <Flex my={10} minH={'40vh'} justifyContent={'center'} alignItems={'center'}>
        <ul className={styles.queueContainer}>
          {DSAQueue.map((item, index) =>
            <li className={styles.queueItem} key={index}>{item}</li>
          )}
        </ul>
      </Flex>

      <Tabs>
        <TabList>
          <Tab>Enqueue</Tab>
          <Tab>Dequeue</Tab>
          <Tab>Peek</Tab>
          <Tab>IsEmpty</Tab>
          <Tab>Size</Tab>
          <Tab>Values</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button width={100} onClick={enqueueHandler}>Enqueue</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={dequeueHandler}>Dequeue</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={peekHandler}>Peek</Button>
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

export default Queue
