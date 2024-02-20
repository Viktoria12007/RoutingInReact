import {ReactElement, createContext, useContext, useState, useEffect} from "react";
import { IPage, IPageProvider, IPageProviderProps } from "./interfaces";

const PagesContext = createContext<IPageProvider | null>(null);

export function PagesProvider({ children }: IPageProviderProps): ReactElement {
	const [page, setPage] = useState<IPage>({
		name: window.location.pathname,
		search: window.location.search,
	});

	const navigate = (name: string) => {
		window.history.pushState(null, '', name);
		setPage({ name, search: '' });
	};

	function setSearchParam (key: string, value: string) {
		const searchParam = new URLSearchParams();
		searchParam.set(key, value);

		const newPage: IPage = {
			name: page.name,
			search: searchParam.toString(),
		}

		window.history.replaceState(null, '', `${newPage.name}?${newPage.search}`);
		setPage(newPage);
	}

	useEffect(() => {
		function handlePopstate() {
			setPage({
				name: window.location.pathname,
				search: window.location.search,
			});
		}

		window.addEventListener('popstate', handlePopstate);

		return () => {
			window.removeEventListener('popstate', handlePopstate);
		}
	}, []);

	return (
		<PagesContext.Provider value={{ ...page, navigate, setSearchParam }}>
			{children}
		</PagesContext.Provider>
	);
}

export function usePages(): IPageProvider {
	const pages = useContext(PagesContext);

	if (!pages) {
		throw new Error("pages not found");
	}

	return pages;
}
