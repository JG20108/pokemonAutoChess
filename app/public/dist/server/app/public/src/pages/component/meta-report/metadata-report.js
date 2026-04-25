"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const report_metadata_1 = require("../../../models/report-metadata");
const date_1 = require("../../utils/date");
require("./metadata-report.css");
const MetadataReport = () => {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [count, setCount] = (0, react_1.useState)(0);
    const [createdAt, setCreatedAt] = (0, react_1.useState)("");
    const [timeLimit, setTimeLimit] = (0, react_1.useState)("");
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, react_1.useEffect)(() => {
        (0, report_metadata_1.fetchMetadata)().then((res) => {
            if (res[0]) {
                setCount(res[0].count);
                setCreatedAt(res[0].created_at.slice(0, 19));
                setTimeLimit(res[0].time_limit.slice(0, 19));
            }
            setLoading(false);
        });
    }, []);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsx)("p", { id: "metadata-report", title: t("meta_report_info", {
            report_date: (0, date_1.formatDate)(new Date(createdAt), { dateStyle: "long" }),
            time_limit: (0, date_1.formatDate)(new Date(timeLimit), { dateStyle: "long" }),
            count
        }), children: t("meta_report_info", {
            report_date: (0, date_1.formatDate)(new Date(createdAt), { dateStyle: "medium" }),
            time_limit: (0, date_1.formatDate)(new Date(timeLimit), { dateStyle: "medium" }),
            count
        }) }));
};
exports.default = MetadataReport;
//# sourceMappingURL=metadata-report.js.map