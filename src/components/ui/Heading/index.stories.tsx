import { Heading } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Heading,
  args: { children: "見出し", level: 1, size: "default" },
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5],
      control: { type: "radio" }
    },
    size: {
      options: ["default", "xs", "sm", "lg", "xl"],
      control: { type: "radio" }
    }
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
