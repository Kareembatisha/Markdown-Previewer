const cheatSheetData = {
  status: "OK",
  last_updated: "2017-11-10",
  cheat_sheet: [
    {
      basic_syntax: [
        {
          element: "Blockquotes",
          syntax: "> blockquote",
        },
        {
          element: "Bold",
          syntax: "**bold text**",
        },
        {
          element: "Code",
          syntax: "`code`",
        },
        {
          element: "Headings",
          syntax: "# H1\n## H2\n### H3\n",
        },
        {
          element: "Horizontal Rules",
          syntax: "---",
        },
        {
          element: "Images",
          syntax: "![alt text](image.jpg)",
        },
        {
          element: "Italic",
          syntax: "*italicized text*",
        },
        {
          element: "Links",
          syntax: "[title](https://www.example.com)",
        },
        {
          element: "Ordered Lists",
          syntax: "1. First item\n2. Second item\n3. Third item\n",
        },
        {
          element: "Unordered Lists",
          syntax: "- First item\n- Second item\n- Third item\n",
        },
      ],
    },
    {
      extended_syntax: [
        {
          element: "Definition Lists",
          syntax: "term\n: definition\n",
        },
        {
          element: "Fenced Code Blocks",
          syntax:
            '```\n{\n"firstName": "John",\n"lastName": "Smith",\n"age": 25\n}\n```\n',
        },
        {
          element: "Footnotes",
          syntax:
            "Here's a sentence with a footnote. [^1]\n\n[^1]: This is the footnote.\n",
        },
        {
          element: "Heading IDs",
          syntax: "### My Great Heading {#custom-id}",
        },
        {
          element: "Strikethrough",
          syntax: "~~The world is flat.~~",
        },
        {
          element: "Tables",
          syntax:
            "| Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |\n",
        },
        {
          element: "Task Lists",
          syntax:
            "- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n",
        },
      ],
    },
  ],
};

export default cheatSheetData;
