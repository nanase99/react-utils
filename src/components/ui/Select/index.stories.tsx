import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Select,
  args: {
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>グループA</SelectLabel>
            <SelectItem value="a">選択肢A</SelectItem>
            <SelectItem value="b">選択肢B</SelectItem>
            <SelectItem value="c">選択肢C</SelectItem>
            <SelectItem value="d">選択肢D</SelectItem>
            <SelectItem value="e">選択肢E</SelectItem>
            <SelectItem value="f">選択肢F</SelectItem>
            <SelectItem value="g">選択肢G</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>グループB</SelectLabel>
            <SelectItem value="h">選択肢H</SelectItem>
            <SelectItem value="i">選択肢I</SelectItem>
            <SelectItem value="j">選択肢J</SelectItem>
            <SelectItem value="k">選択肢K</SelectItem>
            <SelectItem value="l">選択肢L</SelectItem>
            <SelectItem value="m">選択肢M</SelectItem>
            <SelectItem value="n">選択肢N</SelectItem>
            <SelectItem value="o">選択肢O</SelectItem>
            <SelectItem value="p">選択肢P</SelectItem>
            <SelectItem value="q">選択肢Q</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    )
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: { disabled: true }
};
