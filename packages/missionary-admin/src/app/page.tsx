import { Button } from '@samilhero/design-system';
import { HLCheckbox } from '@components/headless';

export default function Home() {
  return (
    <main>
      <HLCheckbox>체크박스입니다.</HLCheckbox>
      <Button size="md" width={100}>
        버튼입니다.
      </Button>
    </main>
  );
}
