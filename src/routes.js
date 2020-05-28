import OfflineMode from "views/OfflineMode.js";
import OnlineMode from "views/OnlineMode";

var routes = [
  {
    path: "/offline-mode",
    name: "Offline mode",
    icon: "ni ni-tv-2 text-primary",
    component: OfflineMode,
    layout: "/inference",
  },

  {
    path: "/online-mode",
    name: "Online mode",
    icon: "ni ni-single-02 text-yellow",
    component: OnlineMode,
    layout: "/inference",
  },
];
export default routes;
