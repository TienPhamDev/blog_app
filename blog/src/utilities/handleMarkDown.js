import { markdown } from "markdown";

const handleMarkDown = (text) => {

    const html = markdown.toHTML(text);
    return html;
}
export default handleMarkDown;