import { AgName } from "./name.model";

export interface AgNameId<N = string, I = number> extends AgName<N> {
  id: I;
  name: N;
}
