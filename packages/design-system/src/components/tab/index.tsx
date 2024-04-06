import React from 'react';
import { TabLayout, TabList } from './TabLayout';

interface ITabProps {
  menuList: Array<{
    id: string;
    title: string;
  }>;
  selectedValue: string;
  onClick: () => void;
}

// TODO : 삭제 필요 (TeamType/categories)
enum TeamType {
  PREPARE_TEAM = 'PREPARE_TEAM',
  MISSIONARY_TEAM = 'MISSIONARY_TEAM',
}

export const Tab = ({ menuList, selectedValue, ...props }: ITabProps) => {
  const categories = [
    {
      id: TeamType.PREPARE_TEAM,
      title: '준비팀',
    },
    {
      id: TeamType.MISSIONARY_TEAM,
      title: '선교팀',
    },
  ];

  return (
    <TabLayout>
      {categories.map((category) => (
        <TabList
          key={category.id}
          active={category.id === TeamType.PREPARE_TEAM}
        >
          {category.title}
        </TabList>
      ))}
    </TabLayout>
  );
};
