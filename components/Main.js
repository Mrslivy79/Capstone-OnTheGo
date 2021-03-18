import * as views from "./views";

export default () => `
${views["Days"]()}
${views["Month"]()}
${views["Gallery"]()}
${views["Form"]()}
${views["Schedule"]()}
`;
