import { Button } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  args: {
    children: "確認",
    size: "default",
    variant: "default"
  },
  argTypes: {
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" }
    },
    variant: {
      options: ["default", "danger", "outline", "secondary", "ghost", "link"],
      control: { type: "radio" }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
