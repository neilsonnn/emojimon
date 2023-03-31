import { overridableComponent } from "@latticexyz/recs";
import { world } from "./world";

import { 
  defineBoolComponent,
  defineCoordComponent,
} from "@latticexyz/std-client";


export const contractComponents = {
  
  Movable: defineBoolComponent(world, {
    metadata: {
      contractId: "component.Movable",
    },
  }),

  Player: overridableComponent(
    defineBoolComponent(world, {
      metadata: {
        contractId: "component.Player",
      },
    }),
  ),

  Position: overridableComponent(
    defineCoordComponent(world, {
    metadata: {
      contractId: "component.Position",
    },
  }),
  ),

};

export const clientComponents = {};
