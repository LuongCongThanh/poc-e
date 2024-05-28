"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Heading from "./components/Header/heading";
import { Input } from "./components/Input/input";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Heading, {
  name: "Header",
  inputs: [
    {
      name: "title",
      type: "string",
      friendlyName: "thanhluong",
      required: true,
    },
  ],
});

Builder.registerComponent(Input, {
  name: "th\u00E0nh",
});
