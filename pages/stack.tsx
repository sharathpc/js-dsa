import { useState } from 'react';
import type { NextPage } from 'next'
import {
  Button,
  SimpleGrid,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'

import styles from '../styles/stack.module.scss';
import SectionItem from '../components/SectionItem';
import CStack from '../functions/stack';

let cStack = new CStack();

const Stack: NextPage = () => {
  const [DSAStack, setDSAStack] = useState<number[]>([]);
  const [output, setOutput] = useState<string>('');

  const pushHandler = () => {
    if (cStack.size <= 8) {
      const newNum = Math.floor(Math.random() * 10) + 1;
      cStack.push(newNum);
      setOutput(`Item pushed: ${newNum}`);
      setDSAStack(cStack.elements);
    }
  }

  const popHandler = () => {
    if (cStack.size > 0) {
      const poppedNum = cStack.pop();
      setOutput(`Item popped: ${poppedNum}`);
      setDSAStack(cStack.elements);
    }
  }

  const peekHandler = () => {
    setOutput(`Peek item: ${cStack.peek()}`);
  }

  const sizeHandler = () => {
    setOutput(`Stack length: ${cStack.size}`);
  }

  return (
    <div>
      <SimpleGrid my={10} columns={2} spacing={10}>
        <SectionItem>
          <ul className={styles.stackContainer}>
            {DSAStack.map((item, index) =>
              <li className={styles.stackItem} key={index}>{item}</li>
            )}
          </ul>
        </SectionItem>
        <SectionItem title='Output'>
          {output}
        </SectionItem>
      </SimpleGrid>

      <Tabs>
        <TabList>
          <Tab>Push</Tab>
          <Tab>Pop</Tab>
          <Tab>Peek</Tab>
          <Tab>Size</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Button
              width={100}
              onClick={pushHandler}
            >
              Push
            </Button>
          </TabPanel>
          <TabPanel>
            <Button
              width={100}
              onClick={popHandler}
            >
              Pop
            </Button>
          </TabPanel>
          <TabPanel>
            <Button
              width={100}
              onClick={peekHandler}
            >
              Peek
            </Button>
          </TabPanel>
          <TabPanel>
            <Button
              width={100}
              onClick={sizeHandler}
            >
              Size
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Stack
