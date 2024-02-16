import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { prisma } from "~/db/prisma";

export const meta: MetaFunction = () => {
  return [
    { title: "Marketplace" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const users = await prisma.user.findMany();
  return json(users);
}

export default function Index() {
  const data = useLoaderData();
  console.log("data", data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-400">Welcome to Remix</h1>
      <Button>Test</Button>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
