import Link from 'next/link';
import styles from './page.module.scss';
import { Button } from '@nx-starter/shared/ui';

export default function Index() {
  return (
    <div className={styles.container}>
      <h1>Welcome to your NX boilerplate starter</h1>
      <h2>Why creating an NX boilerplate ?</h2>
      <p>
        I was building my own application and it took sometimes to set up
        everything fine. I wanted to build an application where all the services
        can be maintened all in the same place so thats why I first looked into
        monorepos and started to use @nx for the simplicity.
      </p>
      <p>
        This starter allows to boostrap a fullstack application in a minute,
        where most of the commons services that you need is already set up in
        simple monorepo.
      </p>
      <h2>What&apos;s included ?</h2>
      <ul>
        <li>The frontend application build on top of React/NextJS</li>
        <li>
          Your own secure API build on top of Node/NestJS including Swagger UI
        </li>
        <li>A database build with PostgresSQL and Prisma</li>
        <li>And also, Authentification with auth.js</li>
      </ul>
      <h2>What&apos;s next ?</h2>
      <Link href="/backoffice">
        <Button skin="primary">Go to backoffice</Button>
      </Link>
    </div>
  );
}
