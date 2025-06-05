import { Artist } from "./artist";
import { Collection } from "./collection";
import { Commissions } from "./commissions";
import { TitlePage } from "./titlePage";

export interface Config {
  titlePage: TitlePage;
  collections: Collection[];
  artists: Artist[];
  commissions: Commissions;
}