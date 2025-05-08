export const formatBlogContent = (markdown) => {
  // const listsLines = markdown.split("\n");
  // console.log(listsLines);
  // convert header
  markdown = markdown
    .replace(/^###### (.*$)/gm, "<h6>$1</h6>")
    .replace(/^##### (.*$)/gm, "<h5>$1</h5>")
    .replace(/^#### (.*$)/gm, "<h4>$1</h4>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, `<h2 class="py-[16px]">$1</h2>`)
    .replace(/^# (.*$)/gm, "<h1>$1</h1>");
  // code block
  markdown = markdown.replace(/`([^`\n]+)`/g, (match, codeContent) => {
    // Escape HTML tags to display them as text

    const escapedContent = codeContent
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<code>${escapedContent}</code>`;
  });
  markdown = markdown.replace(
    /```(?:\w*)\n([\s\S]*?)\n```/g,
    (match, codeContent) => {
      // Escape HTML tags to display them as text

      const escapedContent = codeContent
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre class='codeBlock'><code>${escapedContent}</code></pre>`;
    }
  );
  // see --- to <hr> tag in HTML
  markdown = markdown.replace(/---/g, `<hr class='my-[16px]' />`);
  // undered list
  markdown = markdown.replace(/(\- .*(?:\n\- .*)*)/g, (match) => {
    const items = match
      .split("\n")
      .map((line) => `<li>${line.substring(2)}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });
  //ordered list
  markdown = markdown.replace(/(\d+\. .*(?:\n\d+\. .*)*)/g, (match) => {
    const items = match
      .trim()
      .split(/\n/)
      .map((line) => `<li>${line.substring(3)}</li>`)
      .join("");
    return `<ol>${items}</ol>`;
  });
  //links
  markdown = markdown.replace(
    /\[(.*)\]\((.*)\)/g,
    `<a href="$2" target="_blank">$1</a>`
  );
  // Blockquotes

  markdown = markdown.replace(
    /^\>(.*)$/gm,
    "<blockquote><p>$1</p></blockquote>"
  );
  // convert text Bold and Italic
  markdown = markdown.replace(
    /\*\*\*(.*)\*\*\*/,
    "<em><strong>$1</strong></em>"
  );
  // convert text have first letter is uppercase
  markdown = markdown.replace(/^[A-Z](.*)\.$/gm, `<p class="py-[16px]">$&</p>`);
  // convert text in *italic* to italic text
  markdown = markdown.replace(/\*(.*)\*/, "<em>$1</em>");
  // convert text in **text** to bold text
  markdown = markdown.replace(/\*\*(.*)\*\*/, "<strong>$1</strong>");
  // convert when see <br> to <br> tag in HTML
  // markdown = markdown.replace(/<br>/g, "<br>");
  // convert \n to line break in HTML
  // markdown = markdown.replace(/\n/g, "<br>");
  return markdown;
};
