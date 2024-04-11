import { Input } from '@samilhero/design-system/src/components/index';
import { Tab } from '@samilhero/design-system/src/components/tab';
import { Tooltip } from '@samilhero/design-system/src/components';

export default function Home() {
  return (
    <main>
      선교 상륙 작전1
      <Input />
      <Tab />
      <Tooltip text={'ddd'}>툴탑</Tooltip>
    </main>
  );
}
