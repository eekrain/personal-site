import { Component } from "solid-js";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const Page: Component<{}> = (props) => {
  return (
    <article class="container min-h-screen pt-20">
      <div class="mb-8 flex items-end gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
        <h1 class="font-jakarta text-4xl font-bold text-title">
          Rocket Jaket Cashier (PoS)
        </h1>
      </div>

      <div class="group mx-auto aspect-[5/4] h-[500px] overflow-hidden bg-black">
        <img
          src="/projects/rocket-jaket-pos/thumbnail.png"
          class="flex flex-1 object-cover transition-all duration-200 group-hover:scale-110"
          alt="Rocket Jaket Cashier Mockup Design"
          title="Rocket Jaket Cashier Mockup Design"
        />
      </div>
    </article>
  );
};

export default Page;
