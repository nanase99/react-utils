import { Label } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Label,
  args: { children: "ラベル" }
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
