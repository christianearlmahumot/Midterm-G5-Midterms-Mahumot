jsxs("div", {
    className:
        "mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]",
    children: [
        jsxs("div", {
            children: [
                jsx("h3", { className: "text-2xl font-bold", children: "Want to contribute?" }),
                jsxs("p", {
                    className: "mt-1 text-xl",
                    children: [
                        "Fix an open issue on ",
                        jsx("a", {
                            className: "font-bold underline",
                            href: "https://github.com/christianearlmahumot/Midterm-G5-Midterms-Mahumot",
                            target: "_blank",
                            onClick: handleContribute,
                            children: "GitHub",
                        }),
                        ".",
                    ],
                }),
            ],
        }),
        jsxs("div", {
            className: "flex items-center gap-8",
            children: [
                jsxs("p", {
                    className: "text-xl",
                    children: ["Contributors: ", jsx("span", { className: "font-bold", children: contributors })],
                }),
                jsxs("p", {
                    className: "text-xl",
                    children: [
                        "Open issues: ",
                        jsx("span", {
                            className: "font-bold",
                            children: Math.max(props.issues - contributors, 0),
                        }),
                    ],
                }),
                jsx("button", {
                    className:
                        "cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold",
                    onClick: handleClear,
                    children: "Clear",
                }),
            ],
        }),
    ],
}),