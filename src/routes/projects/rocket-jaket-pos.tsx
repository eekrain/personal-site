import { Component, For } from "solid-js";
import MySiteTitle from "~/components/MySiteTitle";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Card, CardContent } from "~/components/ui/card";

const images = [
  { name: "Login screen", src: "/projects/rocket-jaket-pos/1_login.png" },
  {
    name: "User profile screen",
    src: "/projects/rocket-jaket-pos/2_profile.png",
  },
  {
    name: "Store registration form",
    src: "/projects/rocket-jaket-pos/3_store_registration.png",
  },
  {
    name: "User management",
    src: "/projects/rocket-jaket-pos/4_user_management.png",
  },
  {
    name: "Products list",
    src: "/projects/rocket-jaket-pos/5_products_list.png",
  },
  {
    name: "Products form",
    src: "/projects/rocket-jaket-pos/6_products_form.png",
  },
  {
    name: "Cash register UI",
    src: "/projects/rocket-jaket-pos/7_cash_register.png",
  },
  {
    name: "Transactions list",
    src: "/projects/rocket-jaket-pos/8_transaction_list.png",
  },
  {
    name: "Transaction detail",
    src: "/projects/rocket-jaket-pos/9_transaction_detail.png",
  },
  {
    name: "Employee presence",
    src: "/projects/rocket-jaket-pos/10_employee_presence.png",
  },
  {
    name: "Dashboard charts",
    src: "/projects/rocket-jaket-pos/11_dashboard_chart.png",
  },
];

const Page: Component<{}> = (props) => {
  return (
    <>
      <MySiteTitle>Rocket Jaket Cashier (PoS)</MySiteTitle>

      <article class="container grid min-h-screen gap-8 pt-20">
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

        <p>
          This project is a request from my client Rocket Jaket. Rocket Jaket is
          a garment store who provides jacket collections, and also other
          garment like shirts, t-shirts, and also jeans pants. My client wanted
          a system that can help him manage all the store that he has easily and
          with good accountability. He also wanted the system can be accessed
          anywhere, so he can also monitor the stores while he's not on the
          location.
        </p>

        <p>
          Based on my client request, I concluded that my client needs a PoS
          (Point of Sale) apps. At that time subscribing to paid PoS apps is
          actually quite expensive. So then I proposed a design to build PoS
          mobile apps, including some wireframe / rough design. Because of the
          tight budget of my clients, I ended up with stacks look like these:
        </p>

        <table class="max-w-xl">
          <thead>
            <tr>
              <td class="min-w-[150px]"></td>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="text-lg font-semibold">App Client</td>
              <td>React Native, Native Base Component</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Backend</td>
              <td>Nhost, Server Functions</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Database</td>
              <td>PostgreSQL, Nhost with GraphQL for access</td>
            </tr>

            <tr class="border-b">
              <td class="text-lg font-semibold">Whatsapp Server</td>
              <td>Node.js, whatsapp-web.js</td>
            </tr>
          </tbody>
        </table>

        <p>
          For the backend, I chose to use Nhost for rapid development. Nhost is
          like an ORM but it's accesssed through GraphQL. At that time, I don't
          know what ORM that can do typesafe query, so I chose Nhost. Also, my
          client has a tight budget so atleast the app can leverage Free Tier of
          Nhost, until he needs it, we can always use Docker on VPS instead. Now
          let's talk about the features that my client asked:
        </p>

        <ol class="list-decimal pl-4">
          <li>User authentication and user creation from client app</li>
          <li>An app can handle multiple stores (multi-tenant)</li>
          <li>
            Products management. Products is divided by the categories and each
            products can have it's own variation.
          </li>
          <li>Operating cost management.</li>
          <li>Easy cash register UI on the dashboard</li>
          <li>Payment note is sent to customer via Whatsapp</li>
          <li>Add or cancel transaction</li>
          <li>
            Employee should make a presence every start or finish work. The
            presence is only valid if employee is in 50 meter range from the
            store (GPS validation) and include a photo from the workplace.
          </li>
        </ol>

        <p>
          That was all the requirements asked. If you wanted to check out the
          code, here is the{" "}
          <a
            href="https://github.com/eekrain/rocketjaket-be"
            target="_blank"
            class="underline hover:font-medium hover:text-black"
          >
            back-end repo
          </a>
          , and here is the{" "}
          <a
            href="https://github.com/eekrain/rocketjaket-rn"
            target="_blank"
            class="underline hover:font-medium hover:text-black"
          >
            mobile app repo
          </a>
          . And here is some screenshots of the app:
        </p>

        <div class="grid grid-cols-2 gap-4">
          <For each={images}>
            {(img) => (
              <Card>
                <CardContent class="pt-6">
                  <img
                    src={img.src}
                    alt={img.name}
                    title={img.name}
                    loading="lazy"
                  />

                  <p class="mt-2 text-center">{img.name}</p>
                </CardContent>
              </Card>
            )}
          </For>
        </div>
      </article>
    </>
  );
};

export default Page;
