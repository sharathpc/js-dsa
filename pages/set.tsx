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

import styles from '../styles/set.module.scss';
import CSet from '../functions/set';
import TostConfig from '../data/tostConfig';

const cSet = new CSet();

const Set: NextPage = () => {
  const [DSASet, setDSASet] = useState<any[]>([]);
  const toast = useToast(TostConfig);

  const addHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    const addRes = cSet.add(newNum);
    toast({
      title: `Item ${newNum} added`,
      status: (addRes ? 'success' : 'error'),
      description: addRes.toString()
    });
    setDSASet(cSet.values);
  }

  const removeHandler = () => {
    if (cSet.size > 0) {
      const newNum = Math.floor(Math.random() * 10) + 1;
      const removeRes = cSet.remove(newNum);
      toast({
        title: `Item ${newNum} removed`,
        status: (removeRes ? 'warning' : 'error'),
        description: removeRes.toString()
      });
      setDSASet(cSet.values);
    }
  }

  const hasHandler = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    const hasRes = cSet.has(newNum);
    toast({
      title: `Has ${newNum} item`,
      status: (hasRes ? 'success' : 'error'),
      description: hasRes.toString()
    });
  }

  const sizeHandler = () => {
    toast({
      title: 'Set size',
      description: cSet.size
    });
  }

  const valuesHandler = () => {
    toast({
      title: 'Set values',
      description: cSet.values.toString()
    });
  }

  return (
    <>
      <Flex my={10} minH={'40vh'} justifyContent={'center'} alignItems={'center'}>
        <ul className={styles.setContainer}>
          {DSASet.map((item, index) =>
            <li className={styles.setItem} key={index}>{item}</li>
          )}
        </ul>
      </Flex>

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
