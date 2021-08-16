import ClassicLayout from "./Classic/Layout";
import ModernLayout from "./Modern/Layout";

const LayoutCollection = {
  "classic": ClassicLayout,
  "modern": ModernLayout,
  register: function(name, layout){
    this[name] = layout;
  }
};

export default LayoutCollection;
