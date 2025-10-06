// @ts-nocheck -- skip type checking

import { _runtime } from "fumadocs-mdx/runtime/next";
import * as docs_1 from "../content/docs/ahmed/index.mdx?collection=docs&hash=1759691348746";
import * as docs_2 from "../content/docs/ahmed/subpage.mdx?collection=docs&hash=1759691348746";
import * as docs_0 from "../content/docs/index.mdx?collection=docs&hash=1759691348746";
import type * as _source from "../source.config.mjs";
export const docs = _runtime.docs<typeof _source.docs>(
	[
		{
			info: { path: "index.mdx", fullPath: "content/docs/index.mdx" },
			data: docs_0,
		},
		{
			info: {
				path: "ahmed/index.mdx",
				fullPath: "content/docs/ahmed/index.mdx",
			},
			data: docs_1,
		},
		{
			info: {
				path: "ahmed/subpage.mdx",
				fullPath: "content/docs/ahmed/subpage.mdx",
			},
			data: docs_2,
		},
	],
	[],
);
