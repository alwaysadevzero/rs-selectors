import { Task } from "./interface";

const tasks: Task[] = [
  {
    name: "Basic Selectors",
    title: "Select all plates",
    syntax: "tag",
    hint: "Select every <plate> element on the page.",
    example: " tag div select all div elements",
    solution: "plate",
    html: `<plate>
</plate>
<plate>
</plate>
    `,
  },
  {
    name: "Child Selectors",
    title: "Select apple on the plate",
    syntax: "selector > selector",
    hint: "Select <apple> elements that are direct children of <plate> elements.",
    example: "selector > help with that",
    solution: "plate > apple",
    html: `<plate>
  <apple></apple>
</plate>
<plate></plate>
`,
  },
  {
    name: "Class Selectors",
    title: "Select all red apples",
    syntax: ".selector-name",
    hint: 'Select all elements with class="red".',
    example: '.mow selects all elements with class="mow".',
    solution: ".red",
    html: `<apple class="red">
</apple>
<apple></apple>`,
  },
  {
    name: "Descendant Selectors",
    title: "Select all apples in the plates",
    syntax: "plate apple",
    hint: "Select all <apple> elements inside <plate> elements.",
    example: "plate apple selects all <apple> elements inside any <plate>.",
    solution: "plate apple",
    html: `<bento>
  <plate>
    <apple></apple>
  </plate>
</bento>
<plate>
  <apple></apple>
</plate>
<orange></orange>
`,
  },
  {
    name: "Multiple Selectors",
    title: "Select pickle and apples and bento",
    syntax: "selector, selector, ...",
    hint: "Select all pickle, apples, bento, elements ",
    example: "plate, apple selects all <plate> and <apple> elements.",
    solution: "pickle, apple, bento",
    html: `<bento>
  <pickle></pickle>
</bento>
<bento>
    <orange></orange>
</bento>
<plate>
  <apple></apple>
</plate>
<plate>
    <orange></orange>
</plate>
`,
  },
  {
    name: "ID Selectors",
    title: 'Select the element with ID "special"',
    syntax: "#id-selector",
    hint: "",
    example: '#special selects any element with id="special".',
    solution: "#special",
    html: `<plate id="special">
</plate>
<plate></plate>`,
  },
  {
    name: "Pseudo-class Selectors",
    title: "Select the first apple on a plate",
    syntax: "apple:first-child",
    hint: "Selects the first <apple> element that is a direct child of any <plate> element.",
    example:
      "apple:first-child selects the first <apple> that is a direct child of any parent.",
    solution: "plate apple:first-child",
    html: `<bento>
  <plate>
    <apple></apple>
    <apple></apple>
    <orange></orange>
  </plate>
  <pickle></pickle>
</bento>
`,
  },
  {
    name: "Attribute Selectors",
    title: 'Select all plates with a "for" attribute',
    syntax: "selector[attribute]",
    hint: "",
    example: 'div[brr] selects every <div> with a "brr" attribute.',
    solution: "plate[for]",
    html: `<bento>
<plate for="picnic">
</plate>
<plate>
</plate>
<plate>
    <apple></apple>
</plate>
<plate for="picnic">
</plate>
<plate>
</plate>
</bento>`,
  },
  {
    name: "Attribute Selectors With Value",
    title: 'Select all plates with a "for" attribute equal to "picnic"',
    syntax: 'selector[attribute="value"]',
    hint: "",
    example:
      'div[brr="cold"] selects every <div> with a "brr" attribute equal to "cold".',
    solution: 'plate[for="picnic"]',
    html: `<plate for="picnic">
  <apple></apple>
</plate>
<plate>
    <orange></orange>
</plate>
<plate for="breakfast">
    <pickle></pickle>
</plate>`,
  },
  {
    name: "Adjacent Sibling Selectors",
    title: "Select all apples directly following a plate",
    syntax: "selector + selector",
    hint: "",
    example: "div + p selects all <p> elements directly following a <div>.",
    solution: "plate + apple",
    html: `<plate></plate>
<apple></apple>
<plate></plate>
<orange></orange>
<apple></apple>
`,
  },
  {
    name: "General Sibling Selectors",
    title: "Select all apples following a plate",
    syntax: "selector ~ selector",
    hint: "Selects all <apple> elements that follows a <plate>.",
    example: "div ~ p selects all <p> elements that follow a <div>.",
    solution: "plate ~ apple",
    html: `<plate></plate>
<apple></apple>
<plate></plate>
<orange></orange>
<bento></bento>
<apple></apple>
`,
  },
  {
    name: "Pseudo-class Selectors: nth-of-type",
    title: "Select the second apple on each plate",
    syntax: "selector:nth-of-type(n)",
    hint: "",
    example:
      "Selects the second <apple> that is a direct child of any <plate>.",
    solution: "plate apple:nth-of-type(2)",
    html: `<plate>
  <apple></apple>
  <apple></apple>
</plate>
<plate>
  <apple></apple>
  <apple></apple>
  <apple></apple>
</plate>`,
  },
  {
    name: "Combined Selectors",
    title:
      "Select the last apple in every plate after a plate intended for breakfast",
    syntax: "selector[attr=value], selectpr:last-child, selector ~ selector",
    hint: "Use a combination of general sibling selector and pseudo-class selector.",
    example:
      "div ~ p:last-child selects the last <p> child in a <div> that follows another <div>.",
    solution: "plate[for='breakfast'] ~ plate apple:last-child",
    html: `<plate>
  <apple></apple>
  <apple></apple>
</plate>    
<plate for='breakfast'>
  <apple></apple>
  <apple></apple>
</plate>
<plate>
  <apple></apple>
  <apple></apple>
</plate>`,
  },
  {
    name: "Combined Selectors 2",
    title:
      "Select every third apple in the plates that are not intended for breakfast",
    syntax: "selector:not(selector) selector:pseudo-class(n)",
    hint: "Use a combination of negation pseudo-class, nth-of-type pseudo-class, and attribute selector.",
    example:
      "div:not(.special) p:nth-of-type(3) selects the third <p> in every <div> that does not have class 'special'.",
    solution: "plate:not([for='breakfast']) apple:nth-of-type(3)",
    html: `<plate for='lunch'>
  <apple></apple>
  <orange></orange>
  <apple></apple>
  <apple></apple>
</plate>
<plate for='breakfast'>
  <apple></apple>
  <apple></apple>
</plate>`,
  },
  {
    name: "Universal Selectors",
    title: "Select all elements",
    syntax: "*",
    hint: "",
    example: "* selects every element.",
    solution: "*",
    html: `<plate>
</plate>
<bento>
    <bento>
      <plate>
        <orange></orange>
        <apple></apple>
      </plate>
    </bento>
</bento>
<bento>
  <pickle></pickle>
</bento>
<apple></apple>`,
  },
];

export default tasks;
