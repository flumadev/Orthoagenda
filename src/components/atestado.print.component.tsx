import { Text } from '@chakra-ui/react';
import * as React from 'react';

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
        <Text>Alo</Text>
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
