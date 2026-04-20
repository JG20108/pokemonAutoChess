import { ISuggestionUser } from "../../../../../types";
export default function SearchResults(props: {
    suggestions: ISuggestionUser[];
    onSelect: (user: ISuggestionUser) => void;
}): import("react/jsx-runtime").JSX.Element;
