// @ts-nocheck -- skip type checking

import { _runtime } from "fumadocs-mdx/runtime/next";
import * as docs_4 from "../content/docs/components/index.mdx?collection=docs&hash=1759691348746";
import * as docs_5 from "../content/docs/components/table/client-data.mdx?collection=docs&hash=1759691348746";
import * as docs_6 from "../content/docs/components/table/index.mdx?collection=docs&hash=1759691348746";
import * as docs_7 from "../content/docs/components/table/server-data.mdx?collection=docs&hash=1759691348746";
import * as docs_0 from "../content/docs/index.mdx?collection=docs&hash=1759691348746";
import * as docs_1 from "../content/docs/temp-dir/components.mdx?collection=docs&hash=1759691348746";
import * as docs_2 from "../content/docs/temp-dir/index.mdx?collection=docs&hash=1759691348746";
import * as docs_3 from "../content/docs/temp-dir/subpage.mdx?collection=docs&hash=1759691348746";
import type * as _source from "../source.config.mjs";
export const docs = _runtime.docs<typeof _source.docs>(
	[
		{
			info: { path: "index.mdx", fullPath: "content/docs/index.mdx" },
			data: docs_0,
		},
		{
			info: {
				path: "temp-dir/components.mdx",
				fullPath: "content/docs/temp-dir/components.mdx",
			},
			data: docs_1,
		},
		{
			info: {
				path: "temp-dir/index.mdx",
				fullPath: "content/docs/temp-dir/index.mdx",
			},
			data: docs_2,
		},
		{
			info: {
				path: "temp-dir/subpage.mdx",
				fullPath: "content/docs/temp-dir/subpage.mdx",
			},
			data: docs_3,
		},
		{
			info: {
				path: "components/index.mdx",
				fullPath: "content/docs/components/index.mdx",
			},
			data: docs_4,
		},
		{
			info: {
				path: "components/table/client-data.mdx",
				fullPath: "content/docs/components/table/client-data.mdx",
			},
			data: docs_5,
		},
		{
			info: {
				path: "components/table/index.mdx",
				fullPath: "content/docs/components/table/index.mdx",
			},
			data: docs_6,
		},
		{
			info: {
				path: "components/table/server-data.mdx",
				fullPath: "content/docs/components/table/server-data.mdx",
			},
			data: docs_7,
		},
	],
	[
		{
			info: {
				path: "temp-dir/meta.json",
				fullPath: "content/docs/temp-dir/meta.json",
			},
			data: {
				pages: [
					"components",
					"---My Separator---",
					"...folder",
					"...",
					"file",
					"!otherFolder",
					"[Shadcn](https://ui.shadcn.com/docs/installation/next)",
				],
			},
		},
	],
);
