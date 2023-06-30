import { Task } from "./interface";

const tasks: Task[] = [
  {
    name: "Basic Selectors",
    "selector-name": "Type selector",
    title: "Select all plates",
    syntax: "plate",
    hint: "Select every <plate> element on the page.",
    example: "plate selects all <plate> elements.",
    solution: "plate",
    html: `<plate></plate>
  <plate>
        <apple></apple>
      </plate>
    `,
  },
  {
    name: "Child Selectors",
    "selector-name": "Child selector",
    title: "Select apple on the plate",
    syntax: "plate > apple",
    hint: "Select <apple> elements that are direct children of <plate> elements.",
    example:
      "plate > apple selects any <apple> elements directly on a <plate>.",
    solution: "plate > apple",
    html: "<plate><apple></apple></plate><plate></plate>",
  },
  {
    name: "Class Selectors",
    "selector-name": "Class selector",
    title: "Select all red apples",
    syntax: ".red",
    hint: 'Select all elements with class="red".',
    example: '.red selects all elements with class="red".',
    solution: ".red",
    html: '<apple class="red"></apple><apple></apple>',
  },
  {
    name: "Descendant Selectors",
    "selector-name": "Descendant selector",
    title: "Select all apples in the plates",
    syntax: "plate apple",
    hint: "Select all <apple> elements inside <plate> elements.",
    example: "plate apple selects all <apple> elements inside any <plate>.",
    solution: "plate apple",
    html: "<plate><apple></apple></plate><plate></plate>",
  },
  {
    name: "Multiple Selectors",
    "selector-name": "Multiple selectors",
    title: "Select plates and apples",
    syntax: "plate, apple",
    hint: "Select all <plate> elements and all <apple> elements.",
    example: "plate, apple selects all <plate> and <apple> elements.",
    solution: "plate, apple",
    html: "<plate></plate><apple></apple>",
  },
  {
    name: "ID Selectors",
    "selector-name": "ID selector",
    title: 'Select the element with ID "special"',
    syntax: "#special",
    hint: 'Selects the element with id="special".',
    example: '#special selects any element with id="special".',
    solution: "#special",
    html: '<plate id="special"></plate><plate></plate>',
  },
  {
    name: "Pseudo-class Selectors",
    "selector-name": "Pseudo-class selector",
    title: "Select the first apple on a plate",
    syntax: "plate apple:first-child",
    hint: "Selects the first <apple> element that is a direct child of any <plate> element.",
    example:
      "plate apple:first-child selects the first <apple> that is a direct child of any <plate>.",
    solution: "plate apple:first-child",
    html: "<plate><apple></apple><apple></apple></plate><plate></plate>",
  },
  {
    name: "Attribute Selectors",
    "selector-name": "Attribute selector",
    title: 'Select all plates with a "for" attribute',
    syntax: "plate[for]",
    hint: 'Selects every <plate> element that has a "for" attribute.',
    example: 'plate[for] selects every <plate> with a "for" attribute.',
    solution: "plate[for]",
    html: '<plate for="picnic"></plate><plate></plate>',
  },
  {
    name: "Universal Selectors",
    "selector-name": "Universal selector",
    title: "Select all elements",
    syntax: "*",
    hint: "Selects all elements.",
    example: "* selects every element.",
    solution: "*",
    html: "<plate></plate><apple></apple>",
  },
  {
    name: "Pseudo-elements Selectors",
    "selector-name": "Pseudo-elements selector",
    title: "Select the first letter of every apple",
    syntax: "apple::first-letter",
    hint: "Selects the first letter of every <apple> element.",
    example: "apple::first-letter selects the first letter of every <apple>.",
    solution: "apple::first-letter",
    html: "<apple>Red</apple><apple>Green</apple>",
  },
];

export default tasks;
