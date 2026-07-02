import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { getRouter } from "./router"; // Pointe vers ton src/router.tsx

const router = getRouter();

hydrateRoot(document, <StartClient router={router} />);
