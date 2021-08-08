import dynamic from "next/dynamic";

const AceEditorSSR = dynamic(
  async () => {
    const reactAce = await import("react-ace");
    await import("ace-builds/src-min-noconflict/ext-language_tools");
    await import("ace-builds/src-min-noconflict/mode-sql");
    await import("ace-builds/src-min-noconflict/theme-chrome");
    let ace = require("ace-builds/src-min-noconflict/ace");
    ace.config.set(
      "basePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/"
    );
    ace.config.setModuleUrl(
      "ace/mode/javascript_worker",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-javascript.js"
    );

    return reactAce;
  },
  {
    ssr: false // react-ace doesn't support server side rendering as it uses the window object.
  }
);


export default AceEditorSSR