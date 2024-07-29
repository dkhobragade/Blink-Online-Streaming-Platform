import Categories from "../Components/Pages/Categories";
import Movie from "../Components/Pages/Movie";
import Search from "../Components/Pages/Search";
import Sport from "../Components/Pages/Sport";
import TV from "../Components/Pages/TV";
import User from "../Components/Pages/User";
import Content from '../Components/PageLevel/Content';

interface RouteItem {
    id: string;
    name: string;
    page: JSX.Element;
}

export const routerList: RouteItem[] = [
    { id: '1', name: 'user', page: <User /> },
    { id: '2', name: 'search', page: <Search /> },
    { id: '3', name: 'homepage', page: <Content /> },
    { id: '4', name: 'tv', page: <TV /> },
    { id: '5', name: 'movie', page: <Movie /> },
    { id: '6', name: 'sport', page: <Sport /> },
    { id: '7', name: 'categories', page: <Categories /> },
];