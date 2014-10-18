export var page = {
    "title": "Block Scope (let)",
    "navGroup": ".lessons",
    "next": "lessons/block-scope-const",
    "nextText": "There's another way to do block scoping.  Learn about \"const\" next.",
    "heading": "Block Scope (\"let\" keyword)",
    "code": "class Person {\n  constructor(first, last) {\n    this.first = first;\n    this.last = last;\n  }\n\n  toString() {\n    return `${this.first} ${this.last}`;\n  }\n}    \n\nlet brian = new Person('Brian', 'Genisio');\n\nconsole.log(brian.toString());",
    "intro": "<p>Classes are now first-class concepts in JavaScript.  Having a syntax for class declaration standardizes the class definition approaches.  It enables extension, super, and static capabilities in a well-defined, expected way.</p>\n<p>Classes are mostly made up of a special &quot;constructor&quot; method, and any other method you may need on the class.  Prototypal inheritance will happen to new objects just like the ES5 mechanism of adding functoins to a class&#39;s prototype.</p>\n<pre><code class=\"lang-javascript\"><span class=\"hljs-keyword\">class</span> Person {\n  constructor(first, last) {\n    <span class=\"hljs-keyword\">this</span>.first = first;\n    <span class=\"hljs-keyword\">this</span>.last = last;\n  }\n\n  toString() {\n    <span class=\"hljs-keyword\">return</span> `${<span class=\"hljs-keyword\">this</span>.first} ${<span class=\"hljs-keyword\">this</span>.last}`;\n  }\n}\n</code></pre>\n<h3 id=\"give-it-a-try\">Give it a try</h3>\n"
};