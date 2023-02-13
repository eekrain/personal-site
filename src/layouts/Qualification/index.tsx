import { Component, createEffect, createSignal, Show } from "solid-js";
import { Tabs } from "@kobalte/core";
import {
  createViewportObserver,
  createVisibilityObserver,
} from "@solid-primitives/intersection-observer";
import { setActivePage } from "../../utils/activePage";

export const Qualification: Component<{}> = (props) => {
  const [selectedTab, setSelectedTab] = createSignal<"edu" | "exp">("edu");

  let section: HTMLElement | undefined;

  const visible = createVisibilityObserver({ threshold: 0.6 })(() => section);

  createEffect(() => {
    if (visible()) setActivePage("skills");
  });

  return (
    <>
      <section ref={section} class="mt-24">
        <h2 class="section__title text-center text-4xl text-title">
          Qualification
        </h2>
        <span class="section__subtitle mb-12 block text-center lg:mb-16">
          My personal journey
        </span>
        <Tabs.Root
          value={selectedTab()}
          onValueChange={(val) => setSelectedTab(val as "edu" | "exp")}
          class="qualification__container container mx-auto max-w-[768px]"
        >
          <Tabs.List class="qualification__tabs mb-8 flex justify-center">
            <Tabs.Trigger
              value="edu"
              class="qualification__button qualification__active button--flex mx-3 inline-flex cursor-pointer items-center rounded-2xl py-2 px-2 font-medium transition-all duration-300 sm:px-5 md:mx-4 md:py-5 md:px-8"
              classList={{
                "text-title hover:text-black": selectedTab() !== "edu",
                "bg-title text-white hover:bg-black": selectedTab() === "edu",
              }}
            >
              <i class="uil uil-graduation-cap qualification_icon text-2xl sm:mr-2 md:mr-4"></i>
              Education
            </Tabs.Trigger>
            <Tabs.Trigger
              value="exp"
              class="qualification__button button--flex mx-3 inline-flex cursor-pointer items-center rounded-2xl px-2 py-2 font-medium transition-all duration-300 sm:px-5 md:mx-4 md:py-5 md:px-8"
              classList={{
                "text-title hover:text-black": selectedTab() !== "exp",
                "bg-title text-white hover:bg-black": selectedTab() === "exp",
              }}
            >
              <i class="uil uil-briefcase-alt qualification_icon text-2xl sm:mr-2 md:mr-4"></i>
              Experience
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content
            value="edu"
            class="qualification__sections grid justify-center md:grid-cols-[0.5fr]"
          >
            <div class="qualification__content qualification__content-active">
              {/* Item */}

              <QualificationItem
                position="left"
                title="Web Design"
                subtitle="Spain - Institute"
                date="2021 - Present"
              />

              <QualificationItem
                position="right"
                title="Art Director"
                subtitle="Spain - Institute"
                date="2021 - Present"
              />

              <QualificationItem
                position="left"
                title="Web Development"
                subtitle="Spain - Institute"
                date="2021 - Present"
              />

              <QualificationItem
                position="right"
                title="UX Expert"
                subtitle="Spain - Institute"
                date="2021 - Present"
              />
            </div>
          </Tabs.Content>
          <Tabs.Content
            value="exp"
            class="qualification__sections grid justify-center md:grid-cols-[0.5fr]"
          >
            <div class="qualification__content">
              {/* Item */}

              <QualificationItem
                position="left"
                title="Product Designer"
                subtitle="Microsoft - Spain"
                date="2021 - Present"
              />

              <QualificationItem
                position="right"
                title="UX Designer"
                subtitle="Apple Inc - Spain"
                date="2021 - Present"
              />

              <QualificationItem
                position="left"
                title="Web Designer"
                subtitle="Figma - Spain"
                date="2021 - Present"
              />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </section>
    </>
  );
};

const QualificationItem: Component<{
  position: "left" | "right";
  title: string;
  subtitle: string;
  date: string;
}> = (props) => {
  const Data = () => (
    <div>
      <h3 class="qualification__title text-base font-medium">{props.title}</h3>
      <span class="qualification__subtitle mb-4 inline-block text-sm">
        {props.subtitle}
      </span>
      <div class="qualification__calendar text-sm">
        <i class="uil uil-calendar-alt">{props.date}</i>
      </div>
    </div>
  );
  const Separator = () => (
    <div>
      <span class="qualification__rounder inline-block h-3 w-3 rounded-full bg-normalTextColor"></span>
      <span class="qualification__line block h-full w-px translate-x-[5px] translate-y-[-7px] bg-normalTextColor"></span>
    </div>
  );
  return (
    <div class="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
      <Show
        when={props.position === "left"}
        fallback={
          <>
            <div></div>
            <Separator />
          </>
        }
      >
        <Data />
      </Show>
      <Show when={props.position === "left"} fallback={<Data />}>
        <Separator />
      </Show>
    </div>
  );
};
