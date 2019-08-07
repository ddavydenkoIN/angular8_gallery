import { AgName } from "./name.model";

export interface AgNameValue<N = string, V = string> extends AgName <N> {
  name: N;
  value: V;
}
