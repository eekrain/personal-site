import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const Page: Component<{}> = (props) => {
  return (
    <main class="container min-h-screen pt-20">
      <h1 class="mb-8 text-center font-jakarta text-3xl font-bold text-title">
        Projects Showcase
      </h1>

      <div class="grid grid-cols-2 gap-8">
        <A href="/projects/speedvpn" class="group">
          <Card class="overflow-hidden">
            <div class="h-[340px] w-full overflow-hidden">
              <img
                src="/projects/speedvpn/thumbnail.png"
                class="flex flex-1 object-cover transition-all duration-200 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle class="text-3xl">SpeedVPN</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                A VPN Service provider with V2ray based protocols. Offering ease
                of use without sacrificing internet speeds and privacy.
              </p>
            </CardContent>
          </Card>
        </A>
        <A href="/projects/rocket-jaket-pos" class="group">
          <Card class="group overflow-hidden">
            <div class="h-[340px] w-full overflow-hidden">
              <img
                src="/projects/rocket-jaket-pos/thumbnail.png"
                class="flex flex-1 object-cover transition-all duration-200 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle class="text-3xl">Rocket Jaket (PoS)</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                A custom PoS (Point of Sale) application built from scratch,
                with client app using React Native targeting smartphone & tablet
                device.
              </p>
            </CardContent>
          </Card>
        </A>
      </div>
    </main>
  );
};

export default Page;
