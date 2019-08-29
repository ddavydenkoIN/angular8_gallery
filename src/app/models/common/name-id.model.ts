import { AgName } from "./name.model";
import { AgId } from "./id.model";

export interface AgNameId<N = string, I = number> extends AgName<N>, AgId<I> {
}
