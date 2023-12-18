import { Component } from "@nx-starter/shared/ui/client";
import { SSRComponent } from '@nx-starter/shared/ui/server';

export default async function Demo() {
  return (
    <>
      <SSRComponent />
      <Component />
    </>
  );
}