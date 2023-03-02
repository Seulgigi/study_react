import React from "react";
import { useQuery } from "@apollo/client";

import { Link } from 'react-router-dom';

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Button from "../components/Button";

const GET_NOTES = gql`
    query noteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                }
            }
        }
    }
`;

const Home = () => {
    const { data, loadin, error, fetchMore } = useQuery(GET_NOTES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            {/* <Header />
            <Navigation /> */}
            <p>This is the home page</p>
            <Button>Click Me!</Button>
            {console.log(data)}
            The data loaded!
        </div>
    );
};

export default Home;