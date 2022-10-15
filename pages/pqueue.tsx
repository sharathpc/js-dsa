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

import styles from '../styles/pqueue.module.scss';
import TostConfig from '../data/tostConfig';
import CPriorityQueue from '../functions/pqueue';

const cPriorityQueue = new CPriorityQueue();

const PriorityQueue: NextPage = () => {
  const [DSAPriorityQueue, setDSAPriorityQueue] = useState<any[]>([]);
  const toast = useToast(TostConfig);

  const enqueueHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    const priority = Math.floor(Math.random() * 3) + 1;
    cPriorityQueue.enqueue(newNum, priority);
    toast({
      title: 'Item queued with priority',
      status: 'success',
      description: `${newNum}:${priority}`
    });
    setDSAPriorityQueue(cPriorityQueue.values);
  }

  const dequeueHandler = () => {
    if (cPriorityQueue.size > 0) {
      const dequeueItem = cPriorityQueue.dequeue();
      toast({
        title: 'Item dequeued with priority',
        status: 'warning',
        description: `${dequeueItem.value}:${dequeueItem.priority}`
      });
      setDSAPriorityQueue(cPriorityQueue.values);
    }
  }

  const peekHandler = () => {
    if (cPriorityQueue.size > 0) {
      const peekItem = cPriorityQueue.peek()
      toast({
        title: `${peekItem.value}:${peekItem.priority}`,
        description: cPriorityQueue.peek()
      });
    }
  }

  const isEmptyHandler = () => {
    const isEmpty = cPriorityQueue.isEmpty();
    toast({
      title: 'Queue empty',
      description: isEmpty.toString()
    });
  }

  const sizeHandler = () => {
    toast({
      title: 'Queue size',
      description: cPriorityQueue.size
    });
  }

  const valuesHandler = () => {
    toast({
      title: 'Queue values',
      description: cPriorityQueue.values.toString()
    });
  }

  return (
    <>
      <Flex my={10} minH={'40vh'} justifyContent={'center'} alignItems={'center'}>
        <ul className={styles.pqueueContainer}>
          {DSAPriorityQueue.map((item, index) =>
            <li className={styles.pqueueItem} key={index}>
              <div className={styles.pqueueValue}>{item.value}</div>
              <span className={styles.pqueueSeperator}>:</span>
              <div className={styles.pqueuePriority}>{item.priority}</div>
            </li>
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

export default PriorityQueue
