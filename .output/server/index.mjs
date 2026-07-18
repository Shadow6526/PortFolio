globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2": {
		"type": "font/woff2",
		"etag": "\"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 25960,
		"path": "../public/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2"
	},
	"/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2": {
		"type": "font/woff2",
		"etag": "\"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 18748,
		"path": "../public/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2"
	},
	"/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2": {
		"type": "font/woff2",
		"etag": "\"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 11232,
		"path": "../public/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2"
	},
	"/assets/inter-greek-wght-normal-CkhJZR-_.woff2": {
		"type": "font/woff2",
		"etag": "\"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 18996,
		"path": "../public/assets/inter-greek-wght-normal-CkhJZR-_.woff2"
	},
	"/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2": {
		"type": "font/woff2",
		"etag": "\"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 85068,
		"path": "../public/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2"
	},
	"/assets/inter-latin-wght-normal-Dx4kXJAl.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 48256,
		"path": "../public/assets/inter-latin-wght-normal-Dx4kXJAl.woff2"
	},
	"/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2": {
		"type": "font/woff2",
		"etag": "\"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 10252,
		"path": "../public/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2"
	},
	"/assets/icon-zoWfl5zY.jpg": {
		"type": "image/jpeg",
		"etag": "\"23832-MwW2n+Z2dLXMs5kZAvx07DrhqrY\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 145458,
		"path": "../public/assets/icon-zoWfl5zY.jpg"
	},
	"/assets/curr-DqkvpOK7.pdf": {
		"type": "application/pdf",
		"etag": "\"70953-WIzeia7cnddGP40UALaxtRGeYiM\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 461139,
		"path": "../public/assets/curr-DqkvpOK7.pdf"
	},
	"/assets/project-1-BLIQc9kN.jpg": {
		"type": "image/jpeg",
		"etag": "\"faf5-z/Mq/FS02pG2v9WS8VKhmmOugCo\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 64245,
		"path": "../public/assets/project-1-BLIQc9kN.jpg"
	},
	"/assets/space-grotesk-latin-400-normal-BnQMeOim.woff": {
		"type": "font/woff",
		"etag": "\"426c-ghmNOmJRvnMHZL5v05+7tCgOuLs\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 17004,
		"path": "../public/assets/space-grotesk-latin-400-normal-BnQMeOim.woff"
	},
	"/assets/routes-BZWop11L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12bb4-DSH2MoMAv0Tu6T4qC777pvpn7UY\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 76724,
		"path": "../public/assets/routes-BZWop11L.js"
	},
	"/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2": {
		"type": "font/woff2",
		"etag": "\"344c-4RfT7aFk3EnbF6Hh/aQS0Dwt6dI\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 13388,
		"path": "../public/assets/space-grotesk-latin-400-normal-CJ-V5oYT.woff2"
	},
	"/assets/space-grotesk-latin-600-normal-BflQw4A9.woff": {
		"type": "font/woff",
		"etag": "\"41f4-A1LHI2d4uZUcNIX0toiV/mWCn98\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 16884,
		"path": "../public/assets/space-grotesk-latin-600-normal-BflQw4A9.woff"
	},
	"/assets/space-grotesk-latin-600-normal-DjKNqYRj.woff2": {
		"type": "font/woff2",
		"etag": "\"33e4-2jIlH+AsPyFgIaKwqDO5WYXfeQY\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 13284,
		"path": "../public/assets/space-grotesk-latin-600-normal-DjKNqYRj.woff2"
	},
	"/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff": {
		"type": "font/woff",
		"etag": "\"4020-6+Lv6SyfClI9gHZHIfMCmlje8BE\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 16416,
		"path": "../public/assets/space-grotesk-latin-700-normal-CwsQ-cCU.woff"
	},
	"/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2": {
		"type": "font/woff2",
		"etag": "\"3228-CUaBya012LbSd7QFPXYy34srV9k\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 12840,
		"path": "../public/assets/space-grotesk-latin-700-normal-RjhwGPKo.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2": {
		"type": "font/woff2",
		"etag": "\"2fe0-c3xYOMmU2wqZgHAe410CnfS5OGE\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 12256,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-CfP_5XZW.woff2"
	},
	"/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff": {
		"type": "font/woff",
		"etag": "\"4194-65sd2rUQ1RXSRzlf/UdsfnxLy8Q\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 16788,
		"path": "../public/assets/space-grotesk-latin-ext-400-normal-DRPE3kg4.woff"
	},
	"/assets/space-grotesk-latin-ext-600-normal-DxxdqCpr.woff2": {
		"type": "font/woff2",
		"etag": "\"3000-6K2CsKJNrxHeh6w0a0WeKzYg/RY\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 12288,
		"path": "../public/assets/space-grotesk-latin-ext-600-normal-DxxdqCpr.woff2"
	},
	"/assets/space-grotesk-latin-ext-600-normal-VcznFIpX.woff": {
		"type": "font/woff",
		"etag": "\"4158-hXJ05iafhGTLOF1Sjuwds70aYJk\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 16728,
		"path": "../public/assets/space-grotesk-latin-ext-600-normal-VcznFIpX.woff"
	},
	"/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2": {
		"type": "font/woff2",
		"etag": "\"2ed8-TBMRoktioCogW6/NM520zKySXcU\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 11992,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-BQnZhY3m.woff2"
	},
	"/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff": {
		"type": "font/woff",
		"etag": "\"404c-FfjgS7J3XUuOSTAwuPCMJSSAvt0\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 16460,
		"path": "../public/assets/space-grotesk-latin-ext-700-normal-HVCqSBdx.woff"
	},
	"/assets/index-DszTi-0Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bf70-lLk0e+/CguC2U2To7BLGb/pwfCQ\"",
		"mtime": "2026-07-18T12:34:23.434Z",
		"size": 376688,
		"path": "../public/assets/index-DszTi-0Q.js"
	},
	"/assets/profile-Cb24q9zQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"55224-NWzBlmZLouG4a+by6hN+y15r+AE\"",
		"mtime": "2026-07-18T12:34:23.435Z",
		"size": 348708,
		"path": "../public/assets/profile-Cb24q9zQ.jpg"
	},
	"/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2": {
		"type": "font/woff2",
		"etag": "\"10c8-1JGRw5hFjWC+pPUJ6csycnKgHxA\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 4296,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-B7xT_GF5.woff2"
	},
	"/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff": {
		"type": "font/woff",
		"etag": "\"1660-Gmat2y5b870gScU9KClIjJn3GqI\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 5728,
		"path": "../public/assets/space-grotesk-vietnamese-400-normal-BIWiOVfw.woff"
	},
	"/assets/space-grotesk-vietnamese-600-normal-D6zpsUhD.woff": {
		"type": "font/woff",
		"etag": "\"1648-U831D1UvvnP2XK3oeBMahBZ6uAA\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 5704,
		"path": "../public/assets/space-grotesk-vietnamese-600-normal-D6zpsUhD.woff"
	},
	"/assets/space-grotesk-vietnamese-600-normal-DUi7WF5p.woff2": {
		"type": "font/woff2",
		"etag": "\"10d8-zLY8xT+eAaR0b+FEszj/7T+CXbA\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 4312,
		"path": "../public/assets/space-grotesk-vietnamese-600-normal-DUi7WF5p.woff2"
	},
	"/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2": {
		"type": "font/woff2",
		"etag": "\"106c-OvrbrxRBqhaoWMfcV7ZXQfDd/bQ\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 4204,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-DMty7AZE.woff2"
	},
	"/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff": {
		"type": "font/woff",
		"etag": "\"15d4-G/yewNcLknFzx6or6nPJYti8zRg\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 5588,
		"path": "../public/assets/space-grotesk-vietnamese-700-normal-Duxec5Rn.woff"
	},
	"/assets/styles-DiqF0pLT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17772-mP0Hmk07l2+pyaCiOdS85YNJgtQ\"",
		"mtime": "2026-07-18T12:34:23.436Z",
		"size": 96114,
		"path": "../public/assets/styles-DiqF0pLT.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_pcUrtv = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_pcUrtv
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
