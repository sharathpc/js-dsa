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

import styles from '../styles/stack.module.scss';
import CStack from '../functions/stack';
import TostConfig from '../data/tostConfig';

const cStack = new CStack();

const Stack: NextPage = () => {
  const [DSAStack, setDSAStack] = useState<any[]>([]);
  const toast = useToast(TostConfig);

  const pushHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    cStack.push(newNum);
    toast({
      title: 'Item pushed',
      status: 'success',
      description: newNum
    });
    setDSAStack(cStack.values);
  }

  const popHandler = () => {
    if (cStack.size > 0) {
      const poppedNum = cStack.pop();
      toast({
        title: 'Item popped',
        status: 'warning',
        description: poppedNum
      });
      setDSAStack(cStack.values);
    }
  }

  const peekHandler = () => {
    toast({
      title: 'Peek item',
      description: cStack.peek()
    });
  }

  const sizeHandler = () => {
    toast({
      title: 'Stack size',
      description: cStack.size
    });
  }

  const valuesHandler = () => {
    toast({
      title: 'Stack values',
      description: cStack.values.toString()
    });
  }

  return (
    <>
      <Flex my={10} minH={'40vh'} direction={'column'} alignItems={'center'}>
        <ul className={styles.stackContainer}>
          {DSAStack.map((item, index) =>
            <li className={styles.stackItem} key={index}>{item}</li>
          )}
        </ul>
      </Flex>

      <Tabs>
        <TabList>
          <Tab>Push</Tab>
          <Tab>Pop</Tab>
          <Tab>Peek</Tab>
          <Tab>Size</Tab>
          <Tab>Values</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button width={100} onClick={pushHandler}>Push</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={popHandler}>Pop</Button>
          </TabPanel>
          <TabPanel>
            <Button width={100} onClick={peekHandler}>Peek</Button>
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

export default Stack
