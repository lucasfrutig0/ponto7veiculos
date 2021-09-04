import { ReactNode } from "react";

export type ReactChildren = {
  children: ReactNode;
};

export type Caracteristics = {
  id: number;
  marca: string;
  anomodelo: string;
  Km: string;
  cambio: string;
  finalplaca: string;
  cor: string;
  licenciado: string;
  combustivel: string;
  ipva: string;
};

type Car = {
  id: number;
  slug: string;
  name: string;
  description: string;
  valor: number;
  caracteristicas: ReadonlyArray<Caracteristics>;
  itemscar: object[];
};

export type Cars = {
  cars: ReadonlyArray<Car>;
};
