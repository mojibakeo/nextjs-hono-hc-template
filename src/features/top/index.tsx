import { Hc, HcResponse } from "@/lib/hc/types";
import { FC } from "react";

type TopProps = {
  status: HcResponse<Hc["hc"], "$get">["status"];
};

export const Top: FC<TopProps> = ({ status }) => {
  return <div>status: {status}</div>;
};
