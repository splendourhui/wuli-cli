exports.container = {
  index: `import {
  $name
} from './$name.component';

import {
  inject$name
} from './$name.decorator';

export default inject$name($name);`,

  style: `.$className {
}`,

  component: `import * as React from 'react';

import 'style.less';  

export const $name = ({

}) => {
  return (
    <div className="$className"></div>
  );
};`,

  selector: ``,

  decorator: `import * as React from 'react';

import {

} from './$name.selector';  

export const inject$name = Wrapper => {

  class WrapperComponent extends React.PureComponent<IProps, IState> {

    subscriptions: any[];

    constructor() {
      super();
      this.state = {};
    }

    componentDidMount() {
      this.subscriptions = [].concat();
    }

    componentWillUnmount() {
      this.subscriptions.forEach(sub =>
        sub.unsubscribe()
      );
    }

    render() {
      return (
        <Wrapper
          {...this.state}
          {...this.props}
          {...{
          }}
        />
      );
    }

  }

  return WrapperComponent;

};

interface IState {
}

interface IProps {
}`
};