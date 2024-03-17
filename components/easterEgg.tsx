"use client";

import { env } from "process";

export default function EasterEgg() {
  if (env.NODE_ENV !== "development") {
    console.clear();
    console.log(" ");
    console.log(" ");
    console.log("                   ██▄");
    console.log("                  ╙██▀");
    console.log("                   ,█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄_");
    console.log("                 ▄█████████████████████▄,");
    console.log("               ▄███ █ █████████████████████▄");
    console.log("              █████▌█  █▀▀▀▀▀▀▀▀▀████████████▄");
    console.log("             ████████  ╙█           ╙▀█████████,");
    console.log("             ╙████████▄ ╙█             ╙████████▌");
    console.log("              ╙████████▌  █              ╙███████▌");
    console.log("                ████████▌  ▀▄              ███████");
    console.log("                 ▀████████  ╙█,             ██████▌");
    console.log("                  ╟███████▌   ╙▀▄_  _       └██████");
    console.log("                ▄██████████▌     ''▀▀''       ╟████▌");
    console.log("               ▀▀▀▀▀████████⌐                ▐████▌");
    console.log("                    █╙███████                 ████");
    console.log("                    █ ╙██████⌐               ▐███▌");
    console.log("                    █  ██████M               ╟███");
    console.log("                    █  ╫████▀                ███");
    console.log("                    █  ████'                ▐██'");
    console.log("                ,,▄▄█,▓█▀                  ╔██`");
    console.log("             ▄██████████████▄▄_           ╓██");
    console.log("           ╓█████████████████████▄_      ▄█▀");
    console.log("          ▄███▀▀▀▀███████████████████,  ██'");
    console.log("         ▐█'        █  '╙▀██████████████▀");
    console.log("                    █       '▀▀███████▀");
    console.log("                    █           └▀██▀");
    console.log("                    █");
    console.log("                  ,██▌_");
    console.log("                 ╙█████");
    console.log("                   ███");
    console.log("                    ▀");
    console.log(" ");
    console.log(" ");
  }
  return <></>;
}
