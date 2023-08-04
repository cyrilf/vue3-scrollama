import { ref as L, onMounted as W, onBeforeUnmount as X, watchEffect as Z, openBlock as ee, createElementBlock as te, renderSlot as ne } from "vue";
function oe(t, n = document) {
  return typeof t == "string" ? Array.from(n.querySelectorAll(t)) : t instanceof Element ? [t] : t instanceof NodeList ? Array.from(t) : t instanceof Array ? t : [];
}
function re(t) {
  const n = document.createElement("div");
  n.className = `scrollama__debug-step ${t}`, n.style.position = "fixed", n.style.left = "0", n.style.width = "100%", n.style.zIndex = "9999", n.style.borderTop = "2px solid black", n.style.borderBottom = "2px solid black";
  const o = document.createElement("p");
  return o.style.position = "absolute", o.style.left = "0", o.style.height = "1px", o.style.width = "100%", o.style.borderTop = "1px dashed black", n.appendChild(o), document.body.appendChild(n), n;
}
function se({ id: t, step: n, marginTop: o }) {
  const { index: s, height: u } = n, p = `scrollama__debug-step--${t}-${s}`;
  let d = document.querySelector(`.${p}`);
  d || (d = re(p)), d.style.top = `${o * -1}px`, d.style.height = `${u}px`, d.querySelector("p").style.top = `${u / 2}px`;
}
function ie() {
  const t = "abcdefghijklmnopqrstuvwxyz", n = Date.now(), o = [];
  for (let s = 0; s < 6; s += 1) {
    const u = t[Math.floor(Math.random() * t.length)];
    o.push(u);
  }
  return `${o.join("")}${n}`;
}
function _(t) {
  console.error(`scrollama error: ${t}`);
}
function S(t) {
  return +t.getAttribute("data-scrollama-index");
}
function ce(t, n) {
  const o = Math.ceil(t / n), s = [], u = 1 / o;
  for (let p = 0; p < o + 1; p += 1)
    s.push(p * u);
  return s;
}
function z(t) {
  if (typeof t == "string" && t.indexOf("px") > 0) {
    const n = +t.replace("px", "");
    return isNaN(n) ? (err("offset value must be in 'px' format. Fallback to 0.5."), { format: "percent", value: 0.5 }) : { format: "pixels", value: n };
  } else if (typeof t == "number" || !isNaN(+t))
    return t > 1 && err("offset value is greater than 1. Fallback to 1."), t < 0 && err("offset value is lower than 0. Fallback to 0."), { format: "percent", value: Math.min(Math.max(0, t), 1) };
  return null;
}
function le(t) {
  t.forEach(
    (n) => n.node.setAttribute("data-scrollama-index", n.index)
  );
}
function ae(t) {
  const { top: n } = t.getBoundingClientRect(), o = window.pageYOffset, s = document.body.clientTop || 0;
  return n + o - s;
}
let y, $, h;
function j(t) {
  const n = t ? t.scrollTop : window.pageYOffset;
  y !== n && (y = n, y > $ ? h = "down" : y < $ && (h = "up"), $ = y);
}
function fe(t) {
  y = 0, $ = 0, document.addEventListener("scroll", () => j(t));
}
function Y() {
  let t = {}, n = ie(), o = [], s, u, p, d = 0, g = !1, f = !1, A = !1, M = !1, k = [];
  function q() {
    t = {
      stepEnter: () => {
      },
      stepExit: () => {
      },
      stepProgress: () => {
      }
    }, k = [];
  }
  function w(e) {
    e && !g && T(), !e && g && I(), g = e;
  }
  function P(e, i) {
    const r = S(e), c = o[r];
    i !== void 0 && (c.progress = i);
    const a = { element: e, index: r, progress: i, direction: h };
    c.state === "enter" && t.stepProgress(a);
  }
  function C(e, i = !0) {
    const r = S(e), c = o[r], a = { element: e, index: r, direction: h };
    c.direction = h, c.state = "enter", k[r] || t.stepEnter(a), M && (k[r] = !0);
  }
  function F(e, i = !0) {
    const r = S(e), c = o[r];
    if (!c.state)
      return !1;
    const a = { element: e, index: r, direction: h };
    f && (h === "down" && c.progress < 1 ? P(e, 1) : h === "up" && c.progress > 0 && P(e, 0)), c.direction = h, c.state = "exit", t.stepExit(a);
  }
  function D([e]) {
    const i = S(e.target), r = o[i], c = e.target.offsetHeight;
    c !== r.height && (r.height = c, B(r), R(r), N(r));
  }
  function U([e]) {
    j(u);
    const { isIntersecting: i, target: r } = e;
    i ? C(r) : F(r);
  }
  function V([e]) {
    const i = S(e.target), r = o[i], { isIntersecting: c, intersectionRatio: a, target: m } = e;
    c && r.state === "enter" && P(m, a);
  }
  function B({ observers: e }) {
    Object.keys(e).map((i) => {
      e[i].disconnect();
    });
  }
  function I() {
    o.forEach(B);
  }
  function N(e) {
    const i = new ResizeObserver(D);
    i.observe(e.node), e.observers.resize = i;
  }
  function G() {
    o.forEach(N);
  }
  function R(e) {
    const i = window.innerHeight, r = e.offset || s, c = r.format === "pixels" ? 1 : i, a = r.value * c, m = e.height / 2 - a, b = e.height / 2 - (i - a), x = { rootMargin: `${m}px 0px ${b}px 0px`, threshold: 0.5, root: p }, H = new IntersectionObserver(U, x);
    H.observe(e.node), e.observers.step = H, A && se({ id: n, step: e, marginTop: m, marginBottom: b });
  }
  function J() {
    o.forEach(R);
  }
  function K(e) {
    const i = window.innerHeight, r = e.offset || s, c = r.format === "pixels" ? 1 : i, a = r.value * c, m = -a + e.height, b = a - i, E = `${m}px 0px ${b}px 0px`, O = ce(e.height, d), v = { rootMargin: E, threshold: O }, x = new IntersectionObserver(V, v);
    x.observe(e.node), e.observers.progress = x;
  }
  function Q() {
    o.forEach(K);
  }
  function T() {
    I(), G(), J(), f && Q();
  }
  const l = {};
  return l.setup = ({
    step: e,
    parent: i,
    offset: r = 0.5,
    threshold: c = 4,
    progress: a = !1,
    once: m = !1,
    debug: b = !1,
    container: E = void 0,
    root: O = null
  }) => (fe(E), o = oe(e, i).map((v, x) => ({
    index: x,
    direction: void 0,
    height: v.offsetHeight,
    node: v,
    observers: {},
    offset: z(v.dataset.offset),
    top: ae(v),
    progress: 0,
    state: void 0
  })), o.length ? (f = a, M = m, A = b, d = Math.max(1, +c), s = z(r), u = E, p = O, q(), le(o), w(!0), l) : (_("no step elements"), l)), l.enable = () => (w(!0), l), l.disable = () => (w(!1), l), l.destroy = () => (w(!1), q(), l), l.resize = () => (T(), l), l.offset = (e) => e == null ? s.value : (s = z(e), T(), l), l.onStepEnter = (e) => (typeof e == "function" ? t.stepEnter = e : _("onStepEnter requires a function"), l), l.onStepExit = (e) => (typeof e == "function" ? t.stepExit = e : _("onStepExit requires a function"), l), l.onStepProgress = (e) => (typeof e == "function" ? t.stepProgress = e : _("onStepProgress requires a function"), l), l;
}
const pe = {
  __name: "VueScrollama",
  setup(t, { emit: n }) {
    let o = L(null);
    const s = L(null), u = new Proxy({}, {
      get: (g, f) => o.value.getAttribute(f),
      has: (g, f) => o.value.hasAttribute(f)
    });
    W(() => {
      s.value = Y(), p();
    }), X(() => {
      s.value && s.value.destroy(), window.removeEventListener("resize", d);
    }), Z(() => {
      p();
    });
    function p() {
      if (s.value && s.value.destroy(), o.value) {
        const g = {
          step: Array.from(o.value.children),
          progress: "step-progress" in u,
          ...u
        };
        s.value = Y().setup(g).onStepProgress((f) => {
          n("step-progress", f);
        }).onStepEnter((f) => {
          n("step-enter", f);
        }).onStepExit((f) => {
          n("step-exit", f);
        }), window.addEventListener("resize", d);
      }
    }
    function d() {
      s.value && s.value.resize();
    }
    return (g, f) => (ee(), te("div", {
      class: "scrollama__steps",
      ref_key: "rootElement",
      ref: o
    }, [
      ne(g.$slots, "default")
    ], 512));
  }
};
export {
  pe as default
};
