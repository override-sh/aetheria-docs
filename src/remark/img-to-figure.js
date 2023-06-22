const visit = require("unist-util-visit");

module.exports = (options) => {
	return (tree, vfile) => {
		visit(tree, "paragraph", (node) => {
			node.children.forEach((child, index) => {
				if (child.type === "jsx" && child.value.startsWith("<img")) {

					let alt = /\s+alt=\{"(.+)"}\s+/.exec(child.value);
					if (alt) {
						alt = alt[1];
					}
					node.children[index].value = `<figure>${ child.value }<figcaption>${ alt }</figcaption></figure>`;
				}
			});
		});
	};
};
