import { Component } from "solid-js";
import MySiteTitle from "~/components/MySiteTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const Page: Component<{}> = (props) => {
  return (
    <>
      <MySiteTitle>SpeedVPN</MySiteTitle>

      <article class="container grid min-h-screen gap-8 pt-20">
        <div class="flex items-end gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
          <h1 class="font-jakarta text-4xl font-bold text-title">SpeedVPN</h1>
        </div>

        <div class="group mx-auto aspect-[5/4] h-[500px] overflow-hidden bg-black">
          <img
            src="/projects/speedvpn/thumbnail.png"
            class="flex flex-1 object-cover transition-all duration-200 group-hover:scale-110"
            alt="SpeedVPN Mockup Design"
            title="SpeedVPN Mockup Design"
          />
        </div>

        <p>
          SpeedVPN is a project of mine who aims to be the fastest, easiest, yet
          pretty cheap VPN Service Provider based on{" "}
          <a
            href="https://www.v2ray.com/en/"
            target="_blank"
            class="underline hover:font-medium hover:text-black"
          >
            V2Ray protocols
          </a>
          . Maybe some of you are not familiar with V2Ray, because the popular
          protocols was something like OpenVPN and Wireguard. V2Ray was mainly
          used by countries who faced big censorship through Great Firewall (e.g
          countries like China and Iran). I have been using this V2Ray protocols
          for maybe 1 year. I buy the V2Ray vpn account usually in Telegram.
        </p>

        <p>
          At first, I was building my own VPS server based on V2ray protocols
          using{" "}
          <a
            href="https://sing-box.sagernet.org/"
            target="_blank"
            class="underline hover:font-medium hover:text-black"
          >
            sing-box server
          </a>{" "}
          only for my own usage. Why am i building my own, when there are many
          VPN service provider? It was because there is no transparency over how
          their server is managed. I often get bad internet access at the most
          needed of time. I know that most of the time it's my 4G Internet
          Service Provider that slows down, not the VPS server I am using. But
          is it true tho? Is it MY BAD 4G Internet access or is it just bad
          server management? And I can't even check because most of the time we
          only got notified ONLY when the server was down, I don't know how many
          users is connected to the same VPS as mine. So because of that, I plan
          to build VPN Service Provider who made sure that there is only
          smallest chance the users compete over the limited bandwidth of the
          server.
        </p>

        <p>
          Before building it, I try to list out features that I wanted to have.
          So the features I wrote was like this:
        </p>

        <ol class="list-decimal pl-4">
          <li>
            Users can top up their wallet through Payment Gateway, preferably
            via QRIS (Quick Response Code Indonesian Standard)
          </li>

          <li>
            Users can buy even only one server location, but we provide package
            that allows user to have multiple location of server.
          </li>

          <li>
            Make it more easy to import the v2ray configuration. Since v2ray
            config is formatted as JSON or YAML, it sometimes made new users
            confused how to edit it. And make some documentation or video
            explaining step by step how to use the VPN.
          </li>

          <li>
            Since we have a multiple location package, make it easier to do
            custom routing. Custom routing is an ability to filter some domain
            or application to use spesific server, or even block them.
          </li>

          <li>
            Infrastructure is managed using NixOS Flakes with Colmena tool to
            make it easy to add, manage, or update VPS. Automatically
            registering the server to DB and create DNS Records to Cloudflare
            API.
          </li>

          <li>
            Make the dashboard accessible from Telegram using Telegram Mini
            Apps, to make it convenient for Telegram users.
          </li>
        </ol>

        <p>
          So that's the feature I needed to make it possible. For the tech stack
          I ended up using was like these:
        </p>

        <table class="max-w-xl">
          <thead>
            <tr>
              <td class="min-w-[150px]"></td>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="text-lg font-semibold">Frontend Site</td>
              <td>Solid Start, TailwindCSS, Modular Forms, Zod</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">VPN API</td>
              <td>Hono, Zod</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Telegram API</td>
              <td>Hono, Zod, deployed to cf-worker</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Database</td>
              <td>
                Turso LibSQL (SQLite), Drizzle ORM, embedded to every VPN server
              </td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Payment Gateway</td>
              <td>TriPay</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Infra as Code</td>
              <td>NixOS flakes, installed using nixos-anywhere + colmena.</td>
            </tr>
          </tbody>
        </table>

        <p>
          The hardest part was figuring out how to supports multiple V2ray
          protocols on 1 server. This feature was crucial, since users have
          their own preference of which combination of protocol they wanted to
          use (e.g. trojan-websocket, vless-reality, etc). I ended up using both
          HAProxy and NGINX for the reverse proxy. HAProxy is used to filter out
          websocket, grpc, splithttp, and reality protocol. There is one
          protocol that HAProxy couldn't handle, it's http-upgrade (like
          websocket, but minimal), so from HAProxy I redirect it to NGINX for
          this spesific protocol. All of VPN server configuration is dynamic,
          for example the HAProxy & NGINX config is based on DNS Records
          registered in Database. Also for XRAY (a v2ray server app) and
          Cloudflare Warp (for better routing to google) configuration is
          dynamic based on database value that are registered upon installation
          via nixos-anywhere and Colmena.
        </p>

        <p>
          So I think that was it that I needed to share with you about this
          project. If you wanted to know how it looks like to use SpeedVPN, you
          can check video below explaining how to use SpeedVPN. You can also
          check out{" "}
          <a
            href="https://speedvpn.me"
            target="_blank"
            class="underline hover:font-medium hover:text-black"
          >
            SpeedVPN website here.
          </a>
        </p>

        <iframe
          class="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Wdq3AeAIejo?si=DhrLk4ySUkvDybD7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </article>
    </>
  );
};

export default Page;
