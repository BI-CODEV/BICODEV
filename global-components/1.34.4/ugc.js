!(function(e, o, t, c, r, p, u, s, n, i, a, l, d, f) {
    for (
        a = e.ugc = e.ugc || {},
        (l = o.createElement("style")).innerHTML =
        n + "{visibility:hidden}.hydrated{visibility:inherit}",
        l.setAttribute("data-styles", ""),
        d = o.head.querySelector("meta[charset]"),
        o.head.insertBefore(l, d ? d.nextSibling : o.head.firstChild),
        (function(e, o, t) {
            (e["s-apps"] = e["s-apps"] || []).push("ugc"),
                t.componentOnReady ||
                (t.componentOnReady = function() {
                    var o = this;

                    function t(t) {
                        if (o.nodeName.indexOf("-") > 0) {
                            for (var c = e["s-apps"], r = 0, p = 0; p < c.length; p++)
                                if (e[c[p]].componentOnReady) {
                                    if (e[c[p]].componentOnReady(o, t)) return;
                                    r++;
                                }
                            if (r < c.length)
                                return void(e["s-cr"] = e["s-cr"] || []).push([o, t]);
                        }
                        t(null);
                    }
                    return e.Promise ? new e.Promise(t) : { then: t };
                });
        })(e, 0, i),
        r = r || a.resourcesUrl,
        l = (d = o.querySelectorAll("script")).length - 1; l >= 0 && !(f = d[l]).src && !f.hasAttribute("data-resources-url"); l--
    );
    (d = f.getAttribute("data-resources-url")), !r && d && (r = d), !r &&
        f.src &&
        (r =
            (d = f.src.split("/").slice(0, -1)).join("/") +
            (d.length ? "/" : "") +
            "ugc/"),
        (l = o.createElement("script")),
        (function(e, o, t, c) {
            return (!(o.search.indexOf("core=esm") > 0) &&
                (!(!(o.search.indexOf("core=es5") > 0 || "file:" === o.protocol) &&
                        e.customElements &&
                        e.customElements.define &&
                        e.fetch &&
                        e.CSS &&
                        e.CSS.supports &&
                        e.CSS.supports("color", "var(--c)") &&
                        "noModule" in t
                    ) ||
                    (function(e) {
                        try {
                            return new Function('import("")'), !1;
                        } catch (e) {}
                        return !0;
                    })())
            );
        })(e, e.location, l) ?
        (l.src = r + "ugc.16tipwkd.js") :
        ((l.src = r + "ugc.gefqxef1.js"),
            l.setAttribute("type", "module"),
            l.setAttribute("crossorigin", !0)),
        l.setAttribute("data-resources-url", r),
        l.setAttribute("data-namespace", "ugc"),
        o.head.appendChild(l);
})(
    window,
    document,
    0,
    0,
    " ",
    0,
    0,
    0,
    "base-styles,docs-card,test-app,test-app-dropdowns,test-app-dropdowns-search,test-app-modals,test-app-sliders,ugc-cookie-banner,ugc-cookie-banner-internal,up-c-alert,up-c-auto-scroll,up-c-avatar,up-c-bottom-sheet,up-c-bottom-sheet-header,up-c-btn,up-c-card,up-c-card-footer,up-c-card-header,up-c-card-section,up-c-close-icon,up-c-container,up-c-dialog,up-c-dropdown,up-c-dropdown-item,up-c-dropdown-search,up-c-dropdown-toggle,up-c-error-page,up-c-file-picker,up-c-file-picker-dropbox,up-c-form-group,up-c-fullscreen,up-c-fullscreen-placeholder,up-c-fullscreen-styles,up-c-header,up-c-icon,up-c-icon-demo-page,up-c-illustration,up-c-img,up-c-img-progressive,up-c-infinite-scroll,up-c-input-clear,up-c-intersection-observer,up-c-intl-phone-number,up-c-job-success-score,up-c-line-clamp,up-c-load-button,up-c-load-svg,up-c-logo,up-c-media-object,up-c-modal,up-c-on-click-outside,up-c-on-drop-outside,up-c-on-media-change,up-c-pagination,up-c-prevent-body-scroll,up-c-prevent-body-scroll-styles,up-c-progress-bar,up-c-progress-loader-bar,up-c-relative-time,up-c-row,up-c-select,up-c-select-option,up-c-skip-link,up-c-slider,up-c-sortable,up-c-sticky-footer,up-c-table,up-c-toaster,up-c-toaster-container,up-c-toggle,up-c-toggler,up-c-transition,up-docs-illustration-page,up-footer,up-footer-copyright,up-footer-feedback-form,up-footer-feedback-link,up-footer-feedback-modal,up-footer-links-section,up-footer-skinny,up-footer-social-links,up-footer-visitor,up-footer-visitor-accordion,up-footer-visitor-accordion-item,up-header-offcanvas-toggle,up-header-on-body-scrolled-change,up-header-search,up-header-search-menu,up-header-visitor-dropdown-menu-subnav,up-header-visitor-primary-nav,up-track",
    HTMLElement.prototype
);