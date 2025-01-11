import { A } from "@solidjs/router";
import { Component, For } from "solid-js";
import { description } from "valibot";
import MySiteTitle from "~/components/MySiteTitle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { setCurrentPage } from "~/lib/page-state";

const projects = [
  {
    name: "SpeedVPN",
    href: "/projects/speedvpn",
    thumbnail: "/projects/speedvpn/thumbnail.png",
    thumbnailDesc: "SpeedVPN Mockup Design",
    description:
      "A VPN Service provider with V2ray based protocols. Offering ease of use without sacrificing internet speeds and privacy.",
  },
  {
    name: "Rocket Jaket Cashier (PoS)",
    href: "/projects/rocket-jaket-pos",
    thumbnail: "/projects/rocket-jaket-pos/thumbnail.png",
    thumbnailDesc: "Rocket Jaket Cashier Mockup Design",
    description:
      "A custom PoS (Point of Sale) application built from scratch, with client app using React Native targeting smartphone & tablet device.",
  },
];

const Page: Component<{}> = (props) => {
  setCurrentPage("/projects");

  return (
    <>
      <MySiteTitle>Projects</MySiteTitle>
      <main class="container min-h-screen pt-20">
        <h1 class="mb-8 text-center font-jakarta text-4xl font-bold text-title">
          Projects Showcase
        </h1>

        <div class="grid grid-cols-2 gap-8">
          <For each={projects}>
            {(item) => (
              <Card class="grid overflow-hidden">
                <A href={item.href} class="group grid">
                  <div class="h-[340px] w-full overflow-hidden">
                    <img
                      src={item.thumbnail}
                      class="flex flex-1 object-cover transition-all duration-200 group-hover:scale-110"
                      alt={item.thumbnailDesc}
                      title={item.thumbnailDesc}
                    />
                  </div>

                  <CardHeader>
                    <CardTitle class="text-3xl">{item.name}</CardTitle>
                  </CardHeader>

                  <CardContent class="self-end">
                    <p>{item.description}</p>
                  </CardContent>
                </A>
              </Card>
            )}
          </For>
        </div>
      </main>
    </>
  );
};

export default Page;
