type ConstructClassNameParams = {
  classObject: {
    base: string;
    modifiers?: Array<string | undefined>;
  };
  styles: {
    readonly [key: string]: string;
  };
};
export const constructClassName = ({
  classObject,
  styles,
}: ConstructClassNameParams) => {
  if (!styles) {
    throw new Error('You should pass styles object');
  }
  let classes = [];
  const { base } = classObject;
  const modifiers = classObject?.modifiers || null;
  classes.push(styles[base]);

  if (modifiers?.length) {
    for (const modifier of new Set([...modifiers])) {
      classes.push(styles[`${base}--${modifier}`]);
    }
  }

  return classes.join(' ');
};
