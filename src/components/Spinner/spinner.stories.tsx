import { Meta, Story } from '@storybook/react/types-6-0';
import { Spinner } from '.';

export default {
  title: 'Spinner',
  component: Spinner
} as Meta;

export const Initial: Story = () => <Spinner />;