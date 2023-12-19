import type { Meta, StoryObj } from '@storybook/svelte';

import '../../app.scss';

import Icon from '$lib/icon/icon.svelte';
import { iconSizes } from '$lib/icon/props.ts';

const meta = {
	title: 'AURA/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		name: { control: 'text' },
		size: { control: 'select', options: iconSizes }
	}
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallIcon: Story = {
	args: {
		name: 'arrow-circle-left',
		size: 'small'
	}
};

export const MediumIcon: Story = {
	args: {
		name: 'arrow-circle-left',
		size: 'medium'
	}
};

export const LargeIcon: Story = {
	args: {
		name: 'arrow-circle-left',
		size: 'large'
	}
};

export const SmallIconColor: Story = {
	args: {
		name: 'microsoft-color',
		size: 'small'
	}
};

export const MediumIconColor: Story = {
	args: {
		name: 'microsoft-color',
		size: 'medium'
	}
};

export const LargeIconColor: Story = {
	args: {
		name: 'microsoft-color',
		size: 'large'
	}
};
