import { Component } from "solid-js";
import ExternalLinkIcon from "../ExternalLinkIcon";

export const Projects: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-4 border-b-2 border-title font-poppins text-lg font-semibold">
        PROJECTS
      </h3>

      <ul class="grid gap-3">
        <li>
          <a href="/projects/speedvpn" target="_blank" class="group">
            <h4 class="mb-1 font-poppins text-lg font-medium">
              <span class="group-hover:underline group-hover:underline-offset-4">
                SpeedVPN
              </span>

              <ExternalLinkIcon class="-mt-1 ml-2 inline-block" />
            </h4>
          </a>

          <p class="text-xs">
            VPN service provider based on{" "}
            <a
              href="https://www.v2ray.com/en/"
              target="_blank"
              class="underline transition-all duration-200 hover:font-medium hover:text-black"
            >
              V2Ray protocols
            </a>
            . To supports as many protocols as possible, it needs complex
            routing system. I used HAProxy combined with NGINX, and automated
            DNS Records creation via Cloudflare API. Users can top up their
            wallets to use our services. I used{" "}
            <a
              href="https://tripay.co.id/"
              target="_blank"
              class="underline transition-all duration-200 hover:font-medium hover:text-black"
            >
              TriPay payment gateway
            </a>{" "}
            for that. All the infrastructure was written with NixOS Flakes, with
            the help of{" "}
            <a
              href="https://github.com/zhaofengli/colmena"
              target="_blank"
              class="underline transition-all duration-200 hover:font-medium hover:text-black"
            >
              Colmena tool
            </a>{" "}
            for easy deployment to various VPS Providers. The website was also
            accessible through{" "}
            <a
              href="https://core.telegram.org/bots/webapps"
              target="_blank"
              class="underline transition-all duration-200 hover:font-medium hover:text-black"
            >
              Telegram Mini Apps
            </a>{" "}
            for convenient use.
          </p>
        </li>

        <li>
          <a href="/projects/rocket-jaket-pos" target="_blank" class="group">
            <h4 class="mb-1 font-poppins text-lg font-medium">
              <span class="group-hover:underline group-hover:underline-offset-4">
                Rocket Jaket Cashier (PoS)
              </span>

              <ExternalLinkIcon class="-mt-1 ml-2 inline-block" />
            </h4>
          </a>

          <ul class="flex list-disc flex-col space-y-1 text-xs">
            <li>
              Designed a <i>Point of Sale</i> app by the client requests.
            </li>
            <li>
              Designed the database system using <i>PostgreSQL</i>.
            </li>
            <li>
              Built the backend using a serverless function with <i>GraphQL</i>{" "}
              as the query language.
            </li>
            <li>
              Built the client app using <i>React Native</i> to accommodate{" "}
              <i>Android</i> smartphone and tablet as the target user.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
