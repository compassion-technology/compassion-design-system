import { render } from '@testing-library/react';

import Button from './Button';
import { Icon } from '../';

describe('Button', () => {
  it('should render `Primary` mode with `Medium` size', () => {
    const { container } = render(<Button label="Click Me!" mode="primary" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Secondary` mode with `Small` size', () => {
    const { container } = render(
      <Button label="Click Me!" mode="secondary" size="small" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render `Tertiary` mode with `Large` size', () => {
    const { container } = render(
      <Button label="Click Me!" mode="tertiary" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` variant', () => {
    const { container } = render(
      <Button label="Disabled" mode="primary" disabled />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render a variant with a left icon', () => {
    const { container } = render(
      <Button>
        <Icon.ArrowLeft /> Click Me!
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render a variant with a right icon', () => {
    const { container } = render(
      <Button>
        Click Me! <Icon.ArrowRight />
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render a variant with a left and right icon', () => {
    const { container } = render(
      <Button>
        <Icon.ArrowLeft /> Click Me! <Icon.ArrowRight />
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });
});
