import { Tabs } from "@kobalte/core/tabs";
import { FaSolidGraduationCap } from "solid-icons/fa";
import { HiOutlineBriefcase } from "solid-icons/hi";
import { Component } from "solid-js";
import { TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { QualificationItem } from "./QualificationItem";

const HomeQualification: Component<{}> = (props) => {
  return (
    <section id="qualification" class="min-h-[85vh] scroll-mt-28">
      <h2 class="text-center text-4xl text-title">Qualification</h2>
      <span class="mb-12 block text-center lg:mb-16">My personal journey</span>

      <Tabs defaultValue="education" class="mx-auto max-w-lg">
        <TabsList class="grid w-full grid-cols-2 gap-x-8">
          <TabsTrigger value="education">
            <FaSolidGraduationCap class="mr-4 size-6" />
            <span>Education</span>
          </TabsTrigger>
          <TabsTrigger value="password">
            <HiOutlineBriefcase class="mr-4 size-6" />
            <span>Experience</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="education">
          <QualificationItem
            position="left"
            title="Bachelor of Informatics"
            subtitle={
              <span class="mb-4 inline-block text-sm">
                Amikom University of Yogyakarta
              </span>
            }
            date="Sep 2017 - Oct 2022"
          />

          <QualificationItem
            position="right"
            title="Computer Network Engineering"
            subtitle={
              <span class="mb-4 inline-block text-sm">SMK N 2 Yogyakarta</span>
            }
            date="Jul 2013 - May 2016"
          />
        </TabsContent>
        <TabsContent value="password">
          <QualificationItem
            position="left"
            title="Freelance Fullstack Developer"
            subtitle={
              <a
                href="https://platon.co.id/?lang=id"
                target="_blank"
                class="mb-4 inline-block text-sm hover:underline hover:underline-offset-2"
              >
                Platon.co.id
              </a>
            }
            date="Dec 2023 - Dec 2024"
          />

          <QualificationItem
            position="right"
            title="Fullstack Developer"
            subtitle={
              <span class="mb-4 inline-block text-sm">
                PT. Wahana Bumilangit Teknologi - Purwokerto
              </span>
            }
            date="Mar 2020 - Mar 2021"
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HomeQualification;
