import { componentGenerator } from '@nx/react';
import { formatFiles, Tree } from '@nx/devkit';
import { Schema } from '@nx/react/src/generators/component/schema';

interface ExtendSchema extends Schema {
  client: boolean;
}

export async function extendComponentGenerator(
  tree: Tree,
  options: ExtendSchema
) {
  await componentGenerator(tree, {
    ...options,
    client: true,
    export: true,
    nameAndDirectoryFormat: 'as-provided',
    style: 'scss',
  } as ExtendSchema);

  let newContent: string = '';
  const content = tree.read(`${options.name}.tsx`);

  if (options.client) {
    newContent = `"use client"; \n ${content}`;
  } else {
    newContent = content
      .toString()
      .replace('export function', 'export async function');
  }

  tree.write(`${options.name}.tsx`, newContent);

  await formatFiles(tree);
}

export default extendComponentGenerator;
