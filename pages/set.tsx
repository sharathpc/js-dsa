import { useState } from 'react';
import type { NextPage } from 'next'
import {
  Button,
  SimpleGrid,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'

import styles from '../styles/set.module.scss';
import SectionItem from '../components/SectionItem';
import CSet from '../functions/set';

let cSet = new CSet();

const Set: NextPage = () => {
  const [DSASet, setDSASet] = useState<any[]>([]);
  const [output, setOutput] = useState<string>('');

  const addHandler = () => {
    if (cSet.size <= 10) {
      const newNum = Math.floor(Math.random() * 10) + 1;
      const addRes = cSet.add(newNum);
      setOutput(`Item ${newNum} added: ${addRes}`);
      setDSASet(cSet.values);
    }
  }

  const removeHandler = () => {
    if (cSet.size > 0) {
      const newNum = Math.floor(Math.random() * 10) + 1;
      const removeRes = cSet.remove(newNum);
      setOutput(`Item ${newNum} removed: ${removeRes}`);
      setDSASet(cSet.values);
    }
  }

  const hasHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    const hasRes = cSet.has(newNum);
    setOutput(`Has ${newNum} item: ${hasRes}`);
  }

  const sizeHandler = () => {
    setOutput(`Set length: ${cSet.size}`);
  }

  const valuesHandler = () => {
    setOutput(`Set values: ${cSet.values}`);
  }

  return (
    <>
      <SimpleGrid my={10} columns={2} spacing={10}>
        <SectionItem>
          <ul className={styles.setContainer}>
            {DSASet.map((item, index) =>
              <li className={styles.setItem} key={index}>{item}</li>
            )}
          </ul>
        </SectionItem>
        <SectionItem title='Output'>
          {output}
        </SectionItem>
      </SimpleGrid>

      <Tabs>
        <TabList>
          <Tab>Add</Tab>
          <Tab>Remove</Tab>
          <Tab>Has</Tab>
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
            <Button width={100} onClick={hasHandler}>Has</Button>
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

export default Set
