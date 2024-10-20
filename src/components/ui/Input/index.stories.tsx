import { Input } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Input,
  args: { placeholder: "入力してください", label: "ラベル" }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: { disabled: true }
};
