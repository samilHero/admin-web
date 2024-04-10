import React from 'react';
import { TabLayout, TabList } from './TabLayout';

interface TabProps {
  list: Array<{
    value: string;
    label: string;
  }>;
  selectedValue: string;
  onClick: () => void;
}

// TODO : 삭제 필요 (TeamType/categories)
enum TeamType {
  PREPARE_TEAM = 'PREPARE_TEAM',
  MISSIONARY_TEAM = 'MISSIONARY_TEAM',
}

export const Tab = ({ list, selectedValue, onClick }: TabProps) => {
  const categories = [
    {
      value: TeamType.PREPARE_TEAM,
      label: '준비팀',
    },
    {
      value: TeamType.MISSIONARY_TEAM,
      label: '선교팀',
    },
  ];

  return (
    <TabLayout>
      {categories.map((category) => (
        <TabList
          key={category.value}
          active={category.value === TeamType.PREPARE_TEAM}
        >
          {category.label}
        </TabList>
      ))}
    </TabLayout>
  );
};
