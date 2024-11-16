import { Top } from "@/features/top";
import { serverHc } from "@/lib/hc/server";

export default async function Page() {
  const res = await (await serverHc()).hc
    .$get({ query: { q: "good" } })
    .then((res) => res.json());
  console.log({ res });
  return <Top status={res.status} />;
}
