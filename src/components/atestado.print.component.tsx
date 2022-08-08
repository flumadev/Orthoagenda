import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

import style from '../styles/printable.module.css';

type Props = {
  text?: string;
};

type State = {
  checked: boolean;
};

export class ComponentToPrint extends React.PureComponent<Props, State> {
  public render() {
    const { text } = this.props;

    return (
      <>
        <Box className={style.printable} w="100vw">
          <Text>{this.props.text}</Text>
        </Box>
      </>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef<
  ComponentToPrint | null,
  Props
>((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} text={props.text} />;
});
