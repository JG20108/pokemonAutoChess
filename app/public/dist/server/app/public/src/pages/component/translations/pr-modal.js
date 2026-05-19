"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitTranslationPR = submitTranslationPR;
exports.PRModal = PRModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./pr-modal.css");
const REPO_OWNER = "keldaanCommunity";
const REPO_NAME = "pokemonAutoChess";
const TRANSLATION_FILE_PATH = (lang) => `app/public/dist/client/locales/${lang}/translation.json`;
function submitTranslationPR(token, lang, langName, content, onProgress) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json"
        };
        onProgress("Verifying GitHub token…");
        const userRes = yield fetch("https://api.github.com/user", { headers });
        if (!userRes.ok)
            throw new Error("Invalid token or GitHub API error.");
        const user = yield userRes.json();
        const username = user.login;
        onProgress(`Checking for fork under ${username}…`);
        const forkCheckRes = yield fetch(`https://api.github.com/repos/${username}/${REPO_NAME}`, { headers });
        if (forkCheckRes.status === 404) {
            onProgress("Forking repository (this may take a moment)…");
            const forkRes = yield fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/forks`, {
                method: "POST",
                headers,
                body: JSON.stringify({ default_branch_only: true })
            });
            if (!forkRes.ok)
                throw new Error("Failed to fork the repository.");
            yield new Promise((r) => setTimeout(r, 6000));
        }
        else if (!forkCheckRes.ok) {
            throw new Error("Could not verify fork status.");
        }
        onProgress("Reading fork branch reference…");
        const refRes = yield fetch(`https://api.github.com/repos/${username}/${REPO_NAME}/git/ref/heads/master`, { headers });
        if (!refRes.ok)
            throw new Error("Failed to read master branch from fork. Try syncing your fork.");
        const refData = yield refRes.json();
        const masterSha = refData.object.sha;
        const branchName = `translation/${lang}-${Date.now()}`;
        onProgress(`Creating branch ${branchName}…`);
        const branchRes = yield fetch(`https://api.github.com/repos/${username}/${REPO_NAME}/git/refs`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                ref: `refs/heads/${branchName}`,
                sha: masterSha
            })
        });
        if (!branchRes.ok)
            throw new Error("Failed to create branch on fork.");
        onProgress("Reading current translation file…");
        const filePath = TRANSLATION_FILE_PATH(lang);
        const fileRes = yield fetch(`https://api.github.com/repos/${username}/${REPO_NAME}/contents/${filePath}?ref=${branchName}`, { headers });
        let existingSha;
        if (fileRes.ok) {
            const fileData = yield fileRes.json();
            existingSha = fileData.sha;
        }
        onProgress("Committing updated translation file…");
        const bytes = new TextEncoder().encode(content);
        const binary = Array.from(bytes, (b) => String.fromCodePoint(b)).join("");
        const encoded = btoa(binary);
        const commitBody = {
            message: `translation(${lang}): update ${langName} translations`,
            content: encoded,
            branch: branchName
        };
        if (existingSha)
            commitBody.sha = existingSha;
        const commitRes = yield fetch(`https://api.github.com/repos/${username}/${REPO_NAME}/contents/${filePath}`, { method: "PUT", headers, body: JSON.stringify(commitBody) });
        if (!commitRes.ok) {
            const err = yield commitRes.json();
            throw new Error(`Failed to commit file: ${(_a = err.message) !== null && _a !== void 0 ? _a : "unknown error"}`);
        }
        onProgress("Opening pull request…");
        const prRes = yield fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                title: `Translations: update ${langName} (${lang})`,
                body: `Community translation contribution for **${langName}** (\`${lang}\`).\n\nSubmitted via the in-game translation editor.`,
                head: `${username}:${branchName}`,
                base: "master"
            })
        });
        if (!prRes.ok) {
            const err = yield prRes.json();
            throw new Error(`Failed to open PR: ${(_b = err.message) !== null && _b !== void 0 ? _b : "unknown error"}`);
        }
        const pr = yield prRes.json();
        return pr.html_url;
    });
}
function PRModal({ lang, langName, onClose, onSubmit, progress, error, prUrl, submitting }) {
    const [token, setToken] = (0, react_1.useState)("");
    return ((0, jsx_runtime_1.jsx)("div", { className: "pr-modal-overlay", onClick: onClose, children: (0, jsx_runtime_1.jsxs)("div", { className: "pr-modal my-box", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)("h3", { children: "Submit Pull Request" }), prUrl ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: "pr-modal-success", children: "\u2713 Pull request created successfully!" }), (0, jsx_runtime_1.jsx)("a", { className: "pr-modal-link", href: prUrl, target: "_blank", rel: "noopener noreferrer", children: prUrl }), (0, jsx_runtime_1.jsx)("div", { className: "pr-modal-actions", children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: onClose, children: "Close" }) })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["This will fork the repository (if needed), create a branch, commit your ", (0, jsx_runtime_1.jsx)("strong", { children: langName }), " (", lang, ") translation changes, and open a pull request against", " ", (0, jsx_runtime_1.jsxs)("code", { children: [REPO_OWNER, "/", REPO_NAME] }), "."] }), (0, jsx_runtime_1.jsxs)("label", { htmlFor: "gh-token", children: ["GitHub Personal Access Token", (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/settings/personal-access-tokens/new", target: "_blank", rel: "noopener noreferrer", style: { marginLeft: 8, fontSize: "0.8em" }, children: "(click here to create one)" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "pr-modal-hint", children: ["Requires ", (0, jsx_runtime_1.jsx)("code", { children: "repo" }), " (or ", (0, jsx_runtime_1.jsx)("code", { children: "public_repo" }), ") scope. The token is only kept in memory and never stored, so it's up to you to save it securely."] }), (0, jsx_runtime_1.jsx)("input", { id: "gh-token", type: "password", className: "pr-modal-token-input", placeholder: "ghp_\u2026", value: token, onChange: (e) => setToken(e.currentTarget.value), autoComplete: "off" }), progress && (0, jsx_runtime_1.jsx)("p", { className: "pr-modal-progress", children: progress }), error && (0, jsx_runtime_1.jsx)("p", { className: "pr-modal-error", children: error }), (0, jsx_runtime_1.jsxs)("div", { className: "pr-modal-actions", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly", onClick: onClose, disabled: submitting, children: "Cancel" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: !token.trim() || submitting, onClick: () => onSubmit(token.trim()), children: submitting ? "Submitting…" : "Submit Pull Request" })] })] }))] }) }));
}
//# sourceMappingURL=pr-modal.js.map