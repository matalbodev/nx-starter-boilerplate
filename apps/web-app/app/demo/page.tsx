import { CSRComponent } from "@nx-starter/shared/ui";
import { SSRComponent } from '@nx-starter/shared/ui';

export default async function Demo() {
  return (
    <>
      <SSRComponent />
      <CSRComponent />
    </>
  );
}